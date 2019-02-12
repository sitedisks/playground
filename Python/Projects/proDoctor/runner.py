import scrapy 
from scrapy.crawler import CrawlerProcess

from proDoctor.spiders.health_engine import HealthEngineSpider
from proDoctor.spiders.local_file import LocalSpider

process = CrawlerProcess({
    'USER_AGENT': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)'
}) 

process.crawl(HealthEngineSpider)
process.start() # the script will block here until the crawling is finished
