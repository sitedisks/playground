import json
from scrapy.spiders import Spider

from proDoctor.items import ProdoctorItem


class PractitionerPageSpider(Spider):
    name = "practitionerspider"
    start_urls = [
        "file:///Users/peterwang/Dev/GitHub/playground/Python/Projects/proDoctor/html/practitioner_FayDai.html"]

    def parse(self, response):
        self.logger.info('Practitioner page open')

        def find_between(s, start, end):
            return (s.split(start))[1].split(end)[0]

        item = ProdoctorItem()

        try:
            tempData = response.xpath(
                './head/script[contains(text(), "var heData")]').get()
            tempJson = find_between(tempData, 'heData = ', ';')
            heData_obj = json.loads(tempJson)

            detail_json = response.css('div.container').xpath(
                './script[contains(@type, "application")]/text()').get()
            detail_obj = json.loads(detail_json)

            # Fill the Items

            item['p_id'] = heData_obj['practitionerData']['ID']
            item['p_name'] = heData_obj['practitionerData']['practitionerName']
            item['p_profession'] = response.css(
                'p.practitioner-info-text span::text').get()
            item['p_gender'] = heData_obj['practitionerData']['gender']
            item['p_image'] = detail_obj['image']
            item['p_specialties'] = heData_obj['practitionerData']['specialties']
            location = response.css(
                'div.container span.practice-address-text::text').get()
            if location:
                item['p_location'] = location.strip()

            # Overview
            # Check if practice-description section exist
            interests = []
            if response.css('div#practice-description'):
                description = response.css(
                    'div#practice-description > div.practitioner-description')
                if description:
                    item['p_description'] = description.get()

                if response.css('div.practitioner-interest'):
                    
                    interest_list = response.css(
                        'div.practitioner-interest ul li a::text')

                    for i in interest_list:
                        interests.append(i.get())

            special_interests = response.css('div.content-wrapper div#body div p')
            #special_interest = response.css('div.content-wrapper div#body div p::text').get():
            if "interest" in special_interests.css('::text').get():
                for i in special_interests.css('a'):
                    interests.append(i.css('::text').get())

            item['p_interest'] = ', '.join(interests)

            # Qualification and Experience
            if response.css('div#qualifications-experience'):

                if response.css('div#qualifications-experience div.languages'):
                    languages = []
                    language_list = response.css(
                        'div.languages ul li::text')
                    for l in language_list:
                        languages.append(l.get())
                    item['p_languages'] = ', '.join(languages)

                if response.css('div#qualifications-experience div.educashun'):
                    educations = []
                    education_list = response.css('div.educashun ul li::text')
                    for e in education_list:
                        educations.append(e.get().strip())
                    item['p_education'] = ', '.join(educations)

                if response.css('div#qualifications-experience div.affliations'):
                    affliations = []
                    affliation_list = response.css(
                        'div.affliations ul li::text')
                    for a in affliation_list:
                        affliations.append(a.get())
                    item['p_affliation'] = ', '.join(affliations)

            # Practice Info
            if "location=" in response.url:
                location = response.url.split('location=')[1]
                item['s_id'] = location
                if "&" in location:
                    item['s_id'] = location.split('&')[0]
                    
            # #contact-info .practice-information-contain
            # .basic-detail .opening-hours .practice-facilities .social-media
            if response.css('div#contact-info'):
                basic_details = response.css(
                    'div#contact-info div.basic-details')
                if basic_details:
                    item['s_clinic_name'] = basic_details.css(
                        'li.practice-name a::text').get()
                    if basic_details.css('li.address'):
                        item['s_address'] = basic_details.css(
                            'li.address span::text').get().strip()
                    if basic_details.css('li.phone'):
                        item['s_phone'] = basic_details.css(
                            'li.phone').xpath('./span/@data-tel').get()
                    if basic_details.css('li.mobile'):
                        item['s_mobile'] = basic_details.css(
                            'li.mobile').xpath('./span/@data-tel').get()
                    if basic_details.css('li.url-info'):
                        item['s_website'] = basic_details.css(
                            'li.url-info a::text').get()

            item['s_add_state'] = heData_obj['practitionerData']['state']
            item['s_add_suburb'] = heData_obj['practitionerData']['suburb']
            item['s_add_post'] = heData_obj['practitionerData']['postcode']
            item['s_add_street'] = detail_obj['address']['streetAddress']

            print("Practitioner data extracted")
           
        except:
            print('Pratitioner extracting error')
