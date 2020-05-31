# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class DoubanMovieItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()

    ranking = scrapy.Field()

    movie_name = scrapy.Field()

    score = scrapy.Field()

    score_num = scrapy.Field()

    biz_id = scrapy.Field()

    biz_name = scrapy.Field()

    biz_address1 = scrapy.Field()

    biz_suburb = scrapy.Field()

    biz_state = scrapy.Field()

    biz_postcode: scrapy.Field()

    biz_tel: scrapy.Field()

    biz_email: scrapy.Field()

    biz_website: scrapy.Field()
