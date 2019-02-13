# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class ProdoctorItem(scrapy.Item):

    pid = scrapy.Field() # practitioner id
    name = scrapy.Field()
    cname = scrapy.Field()
    profession = scrapy.Field()
    clinic = scrapy.Field()
    location = scrapy.Field()
    eduction = scrapy.Field()
    phone = scrapy.Field()
    mobile = scrapy.Field()
    specialties = scrapy.Field()
    sid = scrapy.Field() # practice id / location id

