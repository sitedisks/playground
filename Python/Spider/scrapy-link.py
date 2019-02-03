import scrapy
#from scrapy.crawler import CrawlerProcess

class AuthorSpider(scrapy.Spider):
    name = 'Links'

    start_urls = ['http://recurship.com/']
    images_data ={}

    def parse(self, response):
        #follow links to author pages
        for img in response.css('a::attr(href)'):
            yield response.follow(img, self.parse_images)

    def parse_images(self, response):
        #print "URL:" + response.request.url
        def extract_with_css(query):
            return response.css(query).extract()
        yield {
                'URL': response.request.url,
                'image_link': extract_with_css('img::attr(src)')
        }

'''
# debug only
process = CrawlerProcess({
    'USER_AGENT': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)',

})

process.crawl(AuthorSpider)
process.start()
'''
#scrapy runspider scrapy.py -o quotes.json