import scrapy


class ChineseDoctor(scrapy.Spider):
    name = "chinesedoctor"
    start_urls = ""

    def start_requests(self):
        userQuery = "SELECT ud.user_id, ud.listing_type, CASE WHEN ud.listing_type = 'individual' THEN CASE WHEN ud.first_name <> '' THEN CONCAT(ud.first_name, ' ', ud.last_name) ELSE ud.company END ELSE CASE WHEN ud.company = '' THEN CONCAT(ud.first_name, ' ', ud.last_name) ELSE ud.company END END AS name FROM `users_data` AS ud INNER JOIN `subscription_types` AS st ON ud.subscription_id = st.subscription_id WHERE ud.active = '2' AND st.searchable = '1' AND ud.spoken_language LIKE '%%' AND ud.country_code = 'AU' AND ud.city LIKE '%Melbourne%' AND (st.search_membership_permissions REGEXP 'visitor' OR st.search_membership_permissions = '') ORDER BY st.search_priority ASC, name ASC, ud.user_id DESC"

        form_data = {
            "numbersOfListings": "10",
            "numbersOfListingsPerPage": "10",
            "header_type": "html",
            "dataType": "10",
            "featureID": "1",
            "request_type": "POST",
            "widget_name": "Add-On - Bootstrap Theme - Search - Lazy Loader",
            "userQuery": userQuery
        }

        url = "https://www.chinesedoctor.com.au/wapi/widget"

        yield scrapy.FormRequest(url,
                                 formdata=form_data,
                                 method="POST",
                                 callback=self.parse
                                 )

    def parse(self, response):
        print(response.text)
