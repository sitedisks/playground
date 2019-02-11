from scrapy.spiders import Spider

class LocalSpider(Spider):
   name = "localspider"
   start_urls = ["file:///Users/peterwang/Dev/GitHub/playground/Python/Projects/proHealth/data/melb_doctors.html"]

   def parse(self, response):
       print(response.text)