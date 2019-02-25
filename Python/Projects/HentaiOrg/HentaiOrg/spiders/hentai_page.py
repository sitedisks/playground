import scrapy
from HentaiOrg.items import HentaiorgItem


class HentaiOrgSpider(scrapy.Spider):
    name = 'hentaispider'
    # start_urls = ["https://e-hentai.org/g/1364922/e0b8d5cc0e/"]

    start_urls = ["https://e-hentai.org/g/1370955/8b49055d4d/", "https://e-hentai.org/g/1298553/534e64e7d8/",
                  "https://e-hentai.org/g/1298552/cca8c7a740/", "https://e-hentai.org/g/1298551/9d2862ccc6/"]

    def parse(self, response):

        title = response.css('body div h1::text').get()
        if "Content Warning" in title:
            pass_link = response.css('body div p').xpath(
                './/a[contains(text(), "View Gallery")]/@href').get()
            yield response.follow(pass_link, self.parse)

        imageLinks = response.css(
            'body div#gdt div.gdtm div a').xpath('@href').getall()
        for link in imageLinks:
            yield response.follow(link, self.parse_image)

        next_page_list = response.css('body div.gtb table td')

        if '>' in next_page_list.css('a::text').getall():
            # find the next page link
            next_page = next_page_list[-1].xpath('.//a/@href').get()
            yield scrapy.Request(next_page, callback=self.parse)

    def parse_image(self, response):
        item = HentaiorgItem()
        img_list = []
        img_url = response.css('div#i1 div#i3 a img').xpath('@src').get()
        img_list.append(img_url)
        folder_id = response.url.split('/')[-1].split('-')[0]
        item['folder'] = folder_id
        if img_url:
            item['image_urls'] = img_list
            yield item
