import logging
from scrapy.spiders import Spider

from pro1.items import DoubanMovieItem

class Yellowpages(Spider):

    name = "Yellowpages"
    start_urls=["https://www.yellowpages.com.au/search/listings?clue=Hairdressers&locationClue"]

    all_companies = {}
    
    def parse(sef, response):
        
        item = DoubanMovieItem()

        try:
            biz_list = response.xpath('//div[contains(@class, "listing listing-search listing-data")]')

            for biz in biz_list:
                item['biz_id'] = biz.attrib['data-listing-id']
                item['biz_name'] = biz.attrib['data-full-name']
                item['biz_address1'] = item.attrib['data-full-address']
                item['biz_suburb'] = item.attrib['data-suburb']
                item['biz_state'] = item.attrib['data-state']
                item['biz_postcode'] = item.attrib['data-postcode']
                item['biz_tel'] = item.css('.contact-text::text').get()
                item['biz_email'] = item.css('.contact-email').attrib['data-email']
                item['biz_website'] = item.css('.contact-url').attrib['href']

                print('>>>>> ' + item['biz_name'] + ' <<<<<<')

        except:
            self.logger.warning('ERROR: Failed')
        