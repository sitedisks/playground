from scrapy.spiders import Spider

class LocalSpider(Spider):
   name = "localspider"
   start_urls = ["file:///Users/peterwang/Dev/GitHub/playground/Python/Projects/proDoctor/html/chinese_doctors_melb.html"]

   def parse(self, response):
       print(response.text)