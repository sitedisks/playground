import scrapy
import json

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
                details_link =self.base_url + values['link']
                self.logger.info("Open practitioner detail page")
                yield response.follow(details_link, self.parse_practitioner)


    def parse_practice(self, response):
        pass

    def parse_practitioner(self, response):
        self.logger.info('logger: Parse function called on %s', response.url)
        detail_json = response.css('div.container').xpath(
            './script[contains(@type, "application")]/text()').get()

        detail_obj = json.loads(detail_json)
        print(detail_obj["name"])
