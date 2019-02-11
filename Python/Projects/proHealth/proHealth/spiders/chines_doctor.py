import scrapy


class ChineseDoctor(scrapy.Spider):
    name = "chinesedoctor"
    start_urls = ""

    def start_requests(self):

        headers = {
            'Content-Type':'application/x-www-form-urlencoded',
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36',
        }

        params = {
            'numbersOfListings': '10',
            'numbersOfListingsPerPage': '10',
            'header_type': 'html',
            'dataType': '10',
            'featureID': '1',
            'request_type': 'POST',
            'widget_name': 'Add-On - Bootstrap Theme - Search - Lazy Loader',
            'userQuery': "SELECT ud.user_id, ud.listing_type, CASE WHEN ud.listing_type = 'individual' THEN CASE WHEN ud.first_name <> '' THEN CONCAT(ud.first_name, ' ', ud.last_name) ELSE ud.company END ELSE CASE WHEN ud.company = '' THEN CONCAT(ud.first_name, ' ', ud.last_name) ELSE ud.company END END AS name FROM `users_data` AS ud INNER JOIN `subscription_types` AS st ON ud.subscription_id = st.subscription_id WHERE ud.active = '2' AND st.searchable = '1' AND ud.spoken_language LIKE ' % %' AND ud.country_code = 'AU' AND ud.city LIKE ' % Melbourne % ' AND (st.search_membership_permissions REGEXP 'visitor' OR st.search_membership_permissions = '') ORDER BY st.search_priority ASC, name ASC, ud.user_id DESC"
        }

        url = "https://www.chinesedoctor.com.au/wapi/widget"

        yield scrapy.FormRequest(url, callback=self.parse, headers=headers,
                                 method='POST', formdata=params)

    def parse(self, response):
        print(response.text)
