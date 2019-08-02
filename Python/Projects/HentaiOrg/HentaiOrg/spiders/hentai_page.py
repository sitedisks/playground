import scrapy
from HentaiOrg.items import HentaiorgItem
import os


class HentaiOrgSpider(scrapy.Spider):
    name = 'hentaispider'
    start_urls = []

    def __init__(self, url='', *args, **kwargs):
        super(HentaiOrgSpider, self).__init__(*args, **kwargs)
        if url:
            self.start_urls = [url]
            #scrapy crawl hentaispider -a url=https://e-hentai.org/g/1051485/44efbafb5d/
        else:
            file_to_open = os.path.abspath('urls/demon233.txt')
            urls = open(file_to_open, 'r')
            file_urls = urls.readlines()
            self.start_urls = []

            for url in file_urls:
                self.start_urls.append(url.strip('\n'))

    def parse(self, response):

        title = response.css('body div h1::text').get()
        
        if title:
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
