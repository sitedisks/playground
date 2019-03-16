import scrapy
from scrapy.crawler import CrawlerProcess

from proHealth.spiders.bestong_spider import BestongSpider
from proHealth.spiders.bestong_page_spider import BestongPageSpider
from proHealth.spiders.chines_doctor import ChineseDoctor

process = CrawlerProcess({
    'USER_AGENT': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)',
    'FEED_FORMAT': 'json',
    'FEED_URI': 'data.json'
})

process.crawl(BestongPageSpider)
process.start() # the script will block here until the crawling is finished
