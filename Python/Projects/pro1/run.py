import scrapy
from scrapy.crawler import CrawlerProcess

from pro1.spiders.blog_spider import BlogSpider 
from pro1.spiders.douban_spider import DoubanMovieTop250Spider

process = CrawlerProcess({
    'USER_AGENT': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)',
    'FEED_FORMAT': 'json',
    'FEED_URI': 'data.json'
})

process.crawl(DoubanMovieTop250Spider)
process.start() # the script will block here until the crawling is finished
