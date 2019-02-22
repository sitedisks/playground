import scrapy
from HentaiOrg.items import HentaiorgItem

class HentaiOrgSpider(scrapy.Spider):
    name = 'hentaispider'
    start_urls=["https://e-hentai.org/g/1361638/a5a1ee1574/"]

    def parse(self, response):
        imageLinks = response.css('body div#gdt div.gdtm div a').xpath('@href').getall()
        for link in imageLinks:
            yield response.follow(link, self.parse_image)

        next_page_list = response.css('body div.gtb table td')

        if '>' in next_page_list.css('a::text').getall() :
            # find the next page link
            next_page = next_page_list[-1].xpath('.//a/@href').get()
            yield scrapy.Request(next_page, callback=self.parse)

    def parse_image(self, response):
        item = HentaiorgItem()
        img_list = []
        img_url = response.css('div#i1 div#i3 a img').xpath('@src').get()
        img_list.append(img_url)
        if img_url:
            item['image_urls'] = img_list 
            yield item 
        