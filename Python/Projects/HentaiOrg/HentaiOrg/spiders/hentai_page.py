import scrapy
from HentaiOrg.items import HentaiorgItem


class HentaiOrgSpider(scrapy.Spider):
    name = 'hentaispider'
    # start_urls = ["https://e-hentai.org/g/1364922/e0b8d5cc0e/"]

    start_urls = ["https://e-hentai.org/g/1367680/4f54dd1b96/", "https://e-hentai.org/g/1366914/faec9abcf9/",
                  "https://e-hentai.org/g/1363312/18fa7680c6/", "https://e-hentai.org/g/1360982/f0aa94a6a9/"]

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
