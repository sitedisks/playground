import scrapy


class HealthEngineSpider(scrapy.Spider):

    name = 'healthenginespider'
    base_url = 'https://healthengine.com.au'
    all_practitioners = {}
    all_practices = {}

    err = []
    start_urls = [
        base_url + '/find/chinese-medicine-practitioner/Australia/']
    # https://healthengine.com.au/find/chinese-medicine-practitioner/Australia/

    def parse(self, response):

        for section in response.css('div#search-results-area-main section.search-card-contain'):
            try:
                # decide practice | practitioner
                practice = section.xpath('@data-practice-id')
                practitioner = section.xpath('@data-practitioner-id')

                name = section.css('h2.search-main-title a::text').get()
                link = section.css(
                    'h2.search-main-title a').xpath('@href').get()
                phone = section.css(
                    'span.search-phone div.search-phone-more-tt h2')
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
                print("section analyse error")

        print(self.all_practices)

        next_page = response.css(
            'div.he-global-pagination div.he-global-paglinks a.page-next').xpath('@href').get()

        # if next_page:
        #     yield scrapy.Request(self.base_url+next_page, callback=self.parse)
