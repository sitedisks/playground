import scrapy
from proDoctor.items import ProdoctorItem


class ChineseDoctorPageSpider(scrapy.Spider):
    name = "chinesedoctorspider"

    base_url = "https://www.chinesedoctor.com.au"

    start_urls = [
        "file:///Users/peterwang/Dev/GitHub/playground/Python/Projects/proDoctor/html/chinese_doctor_huang-ke.html"]

    def parse(self, response):
        self.logger.info('Chinese Doctor Page Open')

        item = ProdoctorItem()
        item['data_type'] = "Practitioner"
        #item['p_name'] = ""
        #item['p_cname'] = ""
        #item['p_profession'] = ""
        #item['p_image'] = ""
        item['p_location'] = ""
        #item['p_specialties'] = ""
        #item['p_description'] = ""
        item['p_interest'] = ""
        #item['p_languages'] = ""
        #item['p_education'] = ""
        #item['s_clinic_name'] = ""
        item['s_description'] = ""
        #item['s_address'] = ""
        item['s_phone'] = ""
        #item['s_website'] = ""
        #item['s_specialties'] = ""
        #item['s_opening_hours'] = ""

        try:

            member_profile = response.css('div.member_profile')

            if member_profile.css('div.row-fluid img.img-rounded'):
                item['p_image'] = self.base_url + \
                    member_profile.css(
                        'div.row-fluid img.img-rounded').xpath('@src').get()

            if member_profile.css('div.row-fluid h1.bold'):
                item['p_name'] = member_profile.css(
                    'div.row-fluid h1.bold font::text').get()

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
            print("Job done")
        except:
            print('Error!')
