import scrapy


class HentaiOrgSearch(scrapy.Spider):
    name = 'hentaisearch'

    link = 'https://e-hentai.org/?f_doujinshi=1&f_manga=1&f_artistcg=1&f_gamecg=1&f_western=1&f_non-h=1&f_imageset=1&f_cosplay=1&f_asianporn=1&f_misc=1&f_search=fetish+chinese&f_apply=Apply+Filter'
    start_urls = [link]

    def parse(self, response):
        result_links = response.css(
            'body table.itg div.it5').xpath('.//a/@href').getall()

        file_name = self.link.split('search=')[1].split('&')[0]

        with open('urls/' + file_name + '.txt', 'a') as f:
            for link in result_links:
                f.write(link+'\n')

        
        next_page_list = response.css('body table.ptb td')

        if '>' in next_page_list.css('a::text').getall():
            next_page = next_page_list[-1].xpath('.//a/@href').get()
            yield scrapy.Request(next_page, callback=self.parse)