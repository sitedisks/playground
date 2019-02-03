import scrapy

from scrapy.crawler import CrawlerProcess


class QuotesSpider(scrapy.Spider):
    name = 'quotes'
    start_urls = ['http://quotes.toscrape.com/tag/humor']

    def parse(self,response):
        for quote in response.css('div.quote'):
            yield {
                'text':quote.css('span.text::text').get(),
                'author':quote.xpath('span/small/text()').get(),
                'link':quote.css('span a::attr("href")').get(),
            }

        next_page=response.css('li.next a::attr("href")').get()
        if next_page is not None:
            yield response.follow(next_page,self.parse)

process = CrawlerProcess({
    'USER_AGENT': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)',

})

process.crawl(QuotesSpider)
process.start()
#scrapy runspider srapy_prac1.py -o quotes2.json