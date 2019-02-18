import scrapy
from proDoctor.items import ProdoctorItem


class ChineseDoctor(scrapy.Spider):
    name = "chinesedoctor"
    base_url = "https://www.chinesedoctor.com.au"
    counter = 0
    err = []

    def start_requests(self):
        query_melb = "SELECT ud.user_id, ud.listing_type, CASE WHEN ud.listing_type = 'individual' THEN CASE WHEN ud.first_name <> '' THEN CONCAT(ud.first_name, ' ', ud.last_name) ELSE ud.company END ELSE CASE WHEN ud.company = '' THEN CONCAT(ud.first_name, ' ', ud.last_name) ELSE ud.company END END AS name FROM `users_data` AS ud INNER JOIN `subscription_types` AS st ON ud.subscription_id = st.subscription_id WHERE ud.active = '2' AND st.searchable = '1' AND ud.spoken_language LIKE '%%' AND ud.country_code = 'AU' AND ud.city LIKE '%Melbourne%' AND (st.search_membership_permissions REGEXP 'visitor' OR st.search_membership_permissions = '') ORDER BY st.search_priority ASC, name ASC, ud.user_id DESC"
        query_melb_mandarin = "SELECT ud.user_id, ud.listing_type, CASE WHEN ud.listing_type = 'individual' THEN CASE WHEN ud.first_name <> '' THEN CONCAT(ud.first_name, ' ', ud.last_name) ELSE ud.company END ELSE CASE WHEN ud.company = '' THEN CONCAT(ud.first_name, ' ', ud.last_name) ELSE ud.company END END AS name FROM `users_data` AS ud INNER JOIN `subscription_types` AS st ON ud.subscription_id = st.subscription_id WHERE ud.active = '2' AND st.searchable = '1' AND ud.spoken_language LIKE '%Mandarin%' AND ud.country_code = 'AU' AND ud.city LIKE '%Melbourne%' AND (st.search_membership_permissions REGEXP 'visitor' OR st.search_membership_permissions = '') ORDER BY st.search_priority ASC, name ASC, ud.user_id DESC"
        query_vic_mandarin = "SELECT ud.user_id, ud.listing_type, CASE WHEN ud.listing_type = 'individual' THEN CASE WHEN ud.first_name <> '' THEN CONCAT(ud.first_name, ' ', ud.last_name) ELSE ud.company END ELSE CASE WHEN ud.company = '' THEN CONCAT(ud.first_name, ' ', ud.last_name) ELSE ud.company END END AS name FROM `users_data` AS ud INNER JOIN `subscription_types` AS st ON ud.subscription_id = st.subscription_id WHERE ud.active = '2' AND st.searchable = '1' AND ud.spoken_language LIKE '%Mandarin%' AND ud.country_code = 'AU' AND ud.state_code = 'NSW' AND (st.search_membership_permissions REGEXP 'visitor' OR st.search_membership_permissions = '') ORDER BY st.search_priority ASC, name ASC, ud.user_id DESC"
        query_au_mandarin = "SELECT ud.user_id, ud.listing_type, CASE WHEN ud.listing_type = 'individual' THEN CASE WHEN ud.first_name <> '' THEN CONCAT(ud.first_name, ' ', ud.last_name) ELSE ud.company END ELSE CASE WHEN ud.company = '' THEN CONCAT(ud.first_name, ' ', ud.last_name) ELSE ud.company END END AS name FROM `users_data` AS ud INNER JOIN `subscription_types` AS st ON ud.subscription_id = st.subscription_id WHERE ud.active = '2' AND st.searchable = '1' AND ud.spoken_language LIKE '%Mandarin%' AND ud.country_code = 'AU' AND (st.search_membership_permissions REGEXP 'visitor' OR st.search_membership_permissions = '') ORDER BY st.search_priority ASC, name ASC, ud.user_id DESC"

        form_data = {
            "numbersOfListings": "0",
            "numbersOfListingsPerPage": "600",
            "header_type": "html",
            "dataType": "10",
            "featureID": "1",
            "request_type": "POST",
            "widget_name": "Add-On - Bootstrap Theme - Search - Lazy Loader",
            "userQuery": query_au_mandarin
        }

        api_url = self.base_url + "/wapi/widget"

        yield scrapy.FormRequest(api_url,
                                 formdata=form_data,
                                 method="POST",
                                 callback=self.parse
                                 )

    def parse(self, response):
        # print(response.text)
        doctor_list = response.css('div.member_results')
        for doctor in doctor_list:
            self.counter = self.counter + 1
            image_link = doctor.css(
                'div.img_section a').xpath('./img/@src').get()
            name = doctor.css('div.mid_section a h2 b::text').get()
            if doctor.css('div.mid_section a'):
                doc_link = self.base_url + \
                    doctor.css('div.mid_section a').xpath('@href').get()
                yield response.follow(doc_link, self.parse_doctor)
                print("Open doctor " + name + " personal page...")

        print("Total results: " + str(self.counter))

    def parse_doctor(self, response):
        item = ProdoctorItem()
        item['data_type'] = "Practitioner"

        try:

            member_profile = response.css('div.member_profile')

            if member_profile.css('div.row-fluid h1.bold'):
                item['p_name'] = member_profile.css(
                    'div.row-fluid h1.bold font::text').get()

            if member_profile.css('div.row-fluid img.img-rounded'):
                item['p_image'] = self.base_url + \
                    member_profile.css(
                        'div.row-fluid img.img-rounded').xpath('@src').get()

            content = member_profile.xpath(
                './/div[contains(@role, "tabpanel") and not(@id)]')

            if content.css('div#1 div.well'):
                item['p_description'] = content.css(
                    'div#1 div.well::text').get().strip()

            more_details = content.css('div#1 ul.table-view li')

            details_dic = {}

            for index, stuff in enumerate(more_details):
                if index % 2 == 0:
                    details_dic[stuff] = more_details[index+1]

            for title, value in details_dic.items():
                if "Profession" in title.xpath('text()').get():
                    item['p_profession'] = value.xpath('text()').get().strip()

                if "Chinese" in title.xpath('text()').get():
                    item['p_cname'] = value.xpath('text()').get().strip()

                if "Practice Name" in title.xpath('text()').get():
                    item['s_clinic_name'] = value.xpath('text()').get().strip()

                if title.xpath('text()').get().strip() == "Location":
                    item['p_location'] = item['s_address'] = ', '.join(
                        value.css('li span::text').getall())

                if "Services" in title.xpath('text()').get():
                    item['s_description'] = value.xpath('text()').get().strip()

                if "Languages" in title.xpath('text()').get():
                    item['p_languages'] = value.xpath('text()').get().strip()

                if "Qualification" in title.xpath('text()').get():
                    item['p_education'] = value.get()

                if "Hours" in title.xpath('text()').get():
                    item['s_opening_hours'] = value.get()

            if content.css('a.weblink'):
                item['s_website'] = content.css(
                    'a.weblink::text').get().strip()
            if content.css('div.myphoneHideDetail a u'):
                item['s_phone'] = content.css(
                    'div.myphoneHideDetail a u::text').get()
            specialties = content.css('div#2 ul li')
            if specialties:
                item['p_interest'] = ', '.join(
                    specialties.css('a::text').getall())

            yield item
            print("Doctor " + item['p_name'] + " data extracted!")
        except:
            self.err.append(response.url)
            print('Error list: ' + self.err)

