import re

from scrapy.spiders import Spider
from proHealth.items import ProhealthItem

class TestSpider(Spider):
    name = "testspider"
    start_urls=["https://www.bestong.com.au/index.php?City=Melbourne&Category=6&page=1&ipp=All"]

    def parse(self, response):
        item = ProhealthItem()
        business_list = response.xpath('//p[contains(@class, "line_shade_")]')

        for business in business_list:
            item['business_name'] = business.css('.company_name::text').get().strip()
            item['business_id'] = business.css('.business_id::text').get().strip()
            item['business_tel'] = business.xpath('.//a[contains(@href, "tel:")]/text()').get().strip()
            item['business_address'] = business.css('.google_address::text').get().strip()
            business_id = item['business_id'].replace("商家 ID: B", "").strip()
            details_link = "https://www.bestong.com.au/business_details.php?Tag=" + business_id
            yield response.follow(details_link, self.parse_details)
            yield item
    
    def parse_details(self, response):
        item = ProhealthItem()
        item['details_html'] = response.css('.details').get()
        yield item
