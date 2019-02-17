import scrapy


class ChineseDoctor(scrapy.Spider):
    name = "chinesedoctor"
    base_url = "https://www.chinesedoctor.com.au"
    counter = 0

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

            print(name + ' ' + self.base_url + image_link)

        print("Total results: " + str(self.counter))
