import scrapy 
from scrapy.crawler import CrawlerProcess

from proDoctor.spiders.health_engine import HealthEngineSpider
from proDoctor.spiders.local_file import LocalSpider
from proDoctor.spiders.practitioner_page import PractitionerPageSpider
from proDoctor.spiders.practice_page import PracticePageSpider
from proDoctor.spiders.chinese_doctor import ChineseDoctor
from proDoctor.spiders.chinese_doctor_page import ChineseDoctorPageSpider

process = CrawlerProcess({
    'USER_AGENT': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)'
}) 

process.crawl(ChineseDoctor)
process.start() # the script will block here until the crawling is finished
