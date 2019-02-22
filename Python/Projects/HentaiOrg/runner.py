import scrapy
from scrapy.crawler import CrawlerProcess

from HentaiOrg.spiders.hentai_page import HentaiOrgSpider

process = CrawlerProcess({
    'USER_AGENT': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)'
})

process.crawl(HentaiOrgSpider)
process.start() # the script will block here until the crawling is finished
