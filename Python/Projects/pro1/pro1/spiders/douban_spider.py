from scrapy import Request
from scrapy.spiders import Spider
from pro1.items import DoubanMovieItem

class DoubanMovieTop250Spider(Spider):
    name='doubanMovieTop250'
    url = 'https://movie.douban.com/top250'

    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36',
    }

    def start_requests(self):
        yield Request(self.url, headers=self.headers)

    def parse(self, response):
        item = DoubanMovieItem()
        movies = response.xpath('//ol[@class="grid_view"]/li')

        for movie in movies:
            item['ranking'] = movie.xpath('.//div[@class="pic"]/em/text()').get()
            item['movie_name'] = movie.css('span.title::text').get()
            item['score'] = movie.css('div.star span.rating_num::text').get()
            item['score_num'] = movie.css('div.star span')[3].xpath('text()').get()
            yield item

        next_url = response.xpath('//span[@class="next"]/a/@href').get()
        if next_url:
            next_url = self.url + next_url
            yield Request(next_url, headers=self.headers)
            

