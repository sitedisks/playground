import re

from scrapy.spiders import Spider


class BestongPageSpider(Spider):
    name = "bestongpagespider"

    def __init__(self, bid='12568'):
        self.start_urls = [
            "https://www.bestong.com.au/business_details.php?Tag=" + bid]

    def parse(self, response):

        details = {}

        def find_between(s, start, end):
            if start in s:
                return (s.split(start))[1].split(end)[0]
            else:
                return ''
                

        try:
            res = response.xpath(
                '//iframe[contains(@src, "Google_Map")]/preceding::p[1]')

            details['_tel'] = res.xpath(
                '//a[contains(@href, "tel:")]/text()').get()

            details['_fax'] = find_between(
                res.get(), '传真：', '联络：').split('<br')[0].strip()

            details['_contact'] = find_between(
                res.get(), '联络：', '地址：').split('<br')[0].strip()

            details['business_address'] = find_between(
                res.get(), '地址：', '邮件：').split('<br')[0].strip()

            details['_email'] = find_between(
                res.get(), '邮件：', '网站：').split('<br')[0].strip()

            website = find_between(res.get(), '网站：', '<br').strip()

            if len(website) > 1:
                details['_website'] = find_between(website, 'href="', '"')

            print(details)
        except:
            self.logger.warning("ERROR: Spider error processing")

# scrapy crawl detailspider -a bid=9659
