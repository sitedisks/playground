import scrapy
from proDoctor.items import ProdoctorItem

class ChineseDoctorPageSpider(scrapy.Spider):
    name = "chinesedoctorspider"

    start_urls = [
        "file:///Users/peterwang/Dev/GitHub/playground/Python/Projects/proDoctor/html/chinese_doctor_HankChen.html"]

    def parse(self, response):
        self.logger.info('Chinese Doctor Page Open')

        item = ProdoctorItem()

        try:
            print(response.text)
        except:
            pass