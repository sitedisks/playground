import scrapy
import json

from proDoctor.items import ProdoctorItem


class HealthEngineSpider(scrapy.Spider):

    name = 'healthenginespider'
    base_url = 'https://healthengine.com.au'
    all_practitioners = {}
    all_practices = {}

    counter = 0
    err = []
    start_urls = [
        base_url + '/find/chinese-medicine-practitioner/Australia/']
    # https://healthengine.com.au/find/chinese-medicine-practitioner/Australia/

    def parse(self, response):

        for section in response.css('div#search-results-area-main section.search-card-contain'):
            # decide practice | practitioner
            practice = section.xpath('@data-practice-id')
            practitioner = section.xpath('@data-practitioner-id')
            try:

                name = section.css('h2.search-main-title a::text').get()
                link = section.css(
                    'h2.search-main-title a').xpath('@href').get()
                phone = section.css(
                    'span.search-phone div.search-phone-more-tt h2')
                if phone:
                    phone = phone.xpath(
                        './a[contains(@href, "tel:")]').xpath('@href').get()
                    phone = phone.replace("tel:", "")

                if practice:  # sid for practice (business)
                    sid = section.xpath('@data-practice-id').get()
                    self.all_practices[sid] = {
                        "type": "Practice", "name": name, "link": link, "phone": phone}
                elif practitioner:  # pid for practitioner (doctor)
                    pid = section.xpath('@data-practitioner-id').get()
                    # via practitioner link we can get the pid and sid(location id)
                    self.all_practitioners[pid] = {
                        "type": "Practitioner", "name": name, "link": link, "phone": phone}
                else:
                    print("Not practice or practitioner")

            except:
                if practice:
                    self.err.append(section.xpath('@data-practice-id').get())
                elif practitioner:
                    self.err.append(section.xpath(
                        '@data-practitioner-id').get())

                print("section analyse error")

        next_page = response.css(
            'div.he-global-pagination div.he-global-paglinks a.page-next').xpath('@href').get()

        if next_page:
            yield scrapy.Request(self.base_url+next_page, callback=self.parse)
        else:
            print("Practice: " + str(len(self.all_practices)))
            print("Processing all practices! ...")

            print("Practitioners: " + str(len(self.all_practitioners)))
            print("Processing all practices! ...")

            
            for pid, values in self.all_practitioners.items():
                details_link = self.base_url + values['link']
                self.logger.info("Open practitioner detail page")
                yield response.follow(details_link, self.parse_practitioner)
            

            for sid, values in self.all_practices.items():
                details_link = self.base_url + values['link']
                self.logger.info("Open practice detail page")
                yield response.follow(details_link, self.parse_practice)

    def parse_practice(self, response):
        # url link example: /chinese-medicine-practitioner/vic/malvern/green-element-wellness/s69618
        self.logger.info('logger: Parse function called on %s', response.url)

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
            #item['s_opening_hours'] = detail_obj['openingHours']
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
                        yield scrapy.Request(self.base_url+practitioner_link, callback=self.parse_practitioner)

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
            self.err.append(item['data_type'] + ':' + item['s_id'])
            print('Practice extracting error')   

    def parse_practitioner(self, response):
        # url link example: /chinese-medicine-practitioner/wa/floreat/yolanda-shi/p42269?location=60505
        self.logger.info('logger: Parse function called on %s', response.url)

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
            item['data_type'] = heData_obj['pageData']['pageType']
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

            special_interests = response.css(
                'div.content-wrapper div#body div p')
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

                opening_hours = response.css(
                    'div#contact-info div.opening-hours')
                if opening_hours:
                    item['s_opening_hours'] = opening_hours.css('dl').get()

            item['s_add_state'] = heData_obj['practitionerData']['state']
            item['s_add_suburb'] = heData_obj['practitionerData']['suburb']
            item['s_add_post'] = heData_obj['practitionerData']['postcode']
            item['s_add_street'] = detail_obj['address']['streetAddress']

            yield item
            print("Practitioner data extracted")

        except:
            self.err.append(item['data_type'] + ':' + item['p_id'])
            print('Pratitioner extracting error')
