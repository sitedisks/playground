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
                print('>>>>> ' + item['biz_name'] + ' <<<<<<')

        except:
            self.logger.warning('ERROR: Failed')
        