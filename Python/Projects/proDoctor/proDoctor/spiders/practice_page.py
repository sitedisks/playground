import json
from scrapy.spiders import Spider
from proDoctor.items import ProdoctorItem


class PracticePageSpider(Spider):
    name = "practicespider"

    start_urls = [
        "file:///Users/peterwang/Dev/GitHub/playground/Python/Projects/proDoctor/html/practice_GreenElementWellness.html"]

    def parse(self, response):
        self.logger.info('Practice page open')

        def find_between(s, start, end):
            return (s.split(start))[1].split(end)[0]

        item = ProdoctorItem()

        try:
            tempData = response.xpath(
                './head/script[contains(text(), "var heData")]').get()
            tempJson = find_between(tempData, 'heData = ', ';')
            heData_obj = json.loads(tempJson)

            detail_json = response.css('body').xpath(
                './/script[contains(@type, "application")]/text()').get()
            detail_obj = json.loads(detail_json)

            #div#practice-appointments

            #-div#practice-description
            #--div.description-content
            #---div.sidebar-image-inner
            #--div#practice-staff
            #--div#practice-gallery

            #-div#practice-pricing
            #--div.preferred-provider-wrapper
            #--div.praicing-guide-wrapper

            #-div#contact-info
            #--div.practice-information-contain
            #---div.basic-details
            #---div.opening-hours
            #---div.social-media
            #---div.language
            #---div.app-download

            #-div.special-interest-wrapper
            #--ul.li list



            print(heData_obj)
            print(detail_obj)
        except:
            print('Practice extracting error')
