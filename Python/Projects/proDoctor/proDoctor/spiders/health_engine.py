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

    def parse_practice(self, response):
        pass

    def parse_practitioner(self, response):
        # url link: /chinese-medicine-practitioner/wa/floreat/yolanda-shi/p42269?location=60505
        self.logger.info('logger: Parse function called on %s', response.url)

        def find_between(s, start, end):
            return (s.split(start))[1].split(end)[0]

        item = ProdoctorItem()

        tempData = response.xpath(
            './head/script[contains(text(), "var heData")]').get()
        tempJson = find_between(tempData, 'heData = ', ';')
        heData_obj = json.loads(tempJson)

        detail_json = response.css('div.container').xpath(
            './script[contains(@type, "application")]/text()')
        detail_obj = json.loads(detail_json)

        # Fill the Items

        item['p_id'] = heData_obj['practitionerData']['ID']
        item['p_name'] = heData_obj['practitionerData']['practitionerName']
        item['p_profession'] = response.css(
            'p.practitioner-info-text span::text').get()
        item['p_gender'] = heData_obj['practitionerData']['gender']
        item['p_image'] = detail_obj['image']
        item['p_location'] = response.css(
            'div.container span.practice-address-text::text').get()

        # Overview
        # Check if practice-description section exist
        if response.css('div#practice-description'):
            if response.css('div.practitioner-description'):
                item['p_description'] = response.css(
                    'div#practice-description > div.practitioner-description').get()
            
            if response.css('div.practitioner-interest'):
                interests = []
                interest_list = response.css(
                    'div.practitioner-interest ul li a::text')
                for i in interest_list:
                    interests.append(i)

                # Todo: parse the interests to string to item['p_interest']

        # Qualification and Experience
        if response.css('div#qualifications-experience'):

            if response.css('div.languages'):
                languages = []
                language_list = response.css(
                    'div.languages ul li::text')
                for l in language_list:
                    languages.append(l)
                    item['p_languages'] = item['p_languages'] + l + ', '

            if response.css('div.educashun'):
                educations = []
                education_list = response.css('div.educashun ul li::text')
                for e in education_list:
                    educations.append(e)
                    item['p_eduction'] = item['p_eduction'] + e + ', '

            if response.css('div.affliations'):
                affliations = []
                affliation_list = response.css('div.affliations ul li::text')
                for a in affliation_list:
                    affliations.append(a)
                    item['p_specialties'] = item['p_specialties'] + a + ', '



        # Practice Info
        item['s_id'] = "blah"
        # #contact-info .practice-information-contain
        # .basic-detail .opening-hours .practice-facilities .social-media
        if response.css('div#contact-info'):
            basic_details = response.css(
                'div#contact-info > div.basic-details')
            if basic_details:

                item['s_clinic_name'] = basic_details.css('li.practice-name a::text').get()
                item['s_address'] = basic_details.css(
                    'li.address::text').get()
                item['s_phone'] = basic_details.css('li.phone').xpath('./span/@data-tel').get()
                if basic_details.css('li.mobile'):
                    item['s_mobile'] = basic_details.css(
                        'li.mobile').xpath('./span/@data-tel').get()
                if basic_details.css('li.url-info'):
                    item['s_website'] = basic_details.css('li.url-info a::text()').get()


        item['s_add_state'] = heData_obj['practitionerData']['state']
        item['s_add_suburb'] = heData_obj['practitionerData']['suburb']
        item['s_add_post'] = heData_obj['practitionerData']['postcode']
        item['s_add_street'] = detail_obj['address']['streetAddress']
