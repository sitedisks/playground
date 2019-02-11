import re
import logging

from scrapy.spiders import Spider
from proHealth.items import ProhealthItem


class BestongSpider(Spider):
    name = "bestongspider"

    all_companies = {}
    err = []
    detail_page_url = "https://www.bestong.com.au/business_details.php?Tag="
    categories = {
        '5': 'Medical & Healthcare',
        '6': 'Family Doctors',
        '7': 'Denture & Dentists',
        '11': 'Beauty & Skin',
        '15': 'Adult Services',
        '64': 'Traditional Chinese Therapy',
        '65': 'Traditional Chinese Medicine'
    }

    def __init__(self, city='Sydney', category='15', *args, **kwargs):
        super(BestongSpider, self).__init__(*args, **kwargs)
        self.category = category
        self.start_urls = ['https://www.bestong.com.au/index.php?City=' +
                           city + '&Category=' + category + '&page=1&ipp=All']

    def parse(self, response):
        # debug only
        '''
        details_link = self.detail_page_url + '9299'
        yield response.follow(details_link, self.parse_details)
        '''
        try:
            business_list = response.xpath(
                '//p[contains(@class, "line_shade_")]')

            for business in business_list:
                name = business.css('.company_name::text').get().strip()
                tel = business.xpath(
                    './/a[contains(@href, "tel:")]/text()').get()

                address = business.css('.google_address::text').get()
                if address:
                    address = address.strip()
                company_id = business.css('.business_id::text').get().replace(
                    "商家 ID: B", "").strip()
                self.all_companies[company_id] = {
                    "name": name, "tel": tel, "address": address}

            print("#> Total business: ", len(self.all_companies))

            for id in self.all_companies:
                details_link = self.detail_page_url + id
                logging.info("Open detail page:")
                print(details_link)
                yield response.follow(details_link, self.parse_details)
        except:
            self.logger.warning("ERROR: Failed")

    def parse_details(self, response):
        self.logger.info('logger: Parse function called on %s', response.url)

        def find_between(s, start, end):
            return (s.split(start))[1].split(end)[0]

        item = ProhealthItem()
        key_id = response.url.split('Tag=')[1]

        try:

            this_company = self.all_companies[key_id]
            item['business_id'] = key_id
            item['business_name'] = this_company["name"]
            item['business_tel'] = this_company["tel"]
            item['business_address'] = this_company["address"]
            item['details_html'] = response.css('.details').get().replace(
                "联系时请说明是在百事通网站看到的，谢谢。提及百事通，享受更多优惠。", "")

            # ensure only contact <p> been selected
            res = response.xpath(
                '//iframe[contains(@src, "Google_Map")]/preceding::p[1]')

            item['_tel'] = res.xpath(
                '//a[contains(@href, "tel:")]/text()').get()
            item['_fax'] = find_between(
                res.get(), '传真：', '联络：').split('<br')[0].strip()
            item['_contact'] = find_between(
                res.get(), '联络：', '地址：').split('<br')[0].strip()
            item['_email'] = find_between(
                res.get(), '邮件：', '网站：').split('<br')[0].strip()
            website = find_between(res.get(), '网站：', '<br').strip()

            if len(website) > 1:
                item['_website'] = find_between(website, 'href="', '"')

            item['business_category'] = self.categories[self.category]

            yield item

        except:
            self.err.append(key_id)
            self.logger.warning("ERROR: Spider error processing")
            print("ERROR business ids:", self.err)
