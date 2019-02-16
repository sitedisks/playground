import scrapy
import json
from scrapy.spiders import Spider
from proDoctor.items import ProdoctorItem


class PracticePageSpider(Spider):
    name = "practicespider"

    start_urls = [
        "file:///Users/peterwang/Dev/GitHub/playground/Python/Projects/proDoctor/html/practice_101HairCare.html"]

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

            # fill the item
            item['data_type'] = heData_obj['pageData']['pageType']
            item['s_id'] = heData_obj['practiceData']['grpLocId']
            item['s_clinic_name'] = heData_obj['practiceData']['practiceName']
            item['s_description'] = detail_obj['description']
            item['s_address'] = detail_obj['address']
            item['s_phone'] = detail_obj['telephone']

            item['s_specialties'] = heData_obj['practiceData']['specialties']
            item['s_bulkbilled'] = heData_obj['practiceData']['bulkBilled']
            item['s_afterhours'] = heData_obj['practiceData']['afterHours']
            item['s_add_state'] = heData_obj['practiceData']['state']
            item['s_add_suburb'] = heData_obj['practiceData']['suburb']
            item['s_add_post'] = heData_obj['practiceData']['postcode']

            # div#practice-appointments

            # -div#practice-description
            # --div.description-content
            # ---div.sidebar-image-inner
            # --div#practice-staff
            # --div#practice-gallery
            practice_description = response.css('div#practice-description')

            if practice_description:
                if practice_description.css('div#practice-staff'):
                    staff_list = practice_description.css(
                        'div#practice-staff div.practitioner-listing').xpath('@data-href')
                    for s in staff_list:
                        # go to practitioner parse!
                        practitioner_link = s.get()
                        # /chinese-medicine-practitioner/vic/malvern/dr-wenjing-sun/p78690?location=69618'
                        # yield scrapy.Request(self.base_url+practitioner_link, callback=self.practitioner_parse)

            # -div#practice-pricing
            # --div.preferred-provider-wrapper
            # --div.praicing-guide-wrapper

            # -div#contact-info
            # --div.practice-information-contain
            # ---div.basic-details
            # ---div.opening-hours
            # ---div.social-media
            # ---div.language
            # ---div.app-download

            if response.css('div#contact-info'):
                basic_details = response.css(
                    'div#contact-info div.basic-details')
                if basic_details:
                    if basic_details.css('li.url-info'):
                        item['s_website'] = basic_details.css(
                            'li.url-info a::text').get()

            yield item
        except:
            print('Practice extracting error')
