# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class ProhealthItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    business_name = scrapy.Field()
    business_id = scrapy.Field()
    business_tel = scrapy.Field()
    business_contact = scrapy.Field()
    business_address = scrapy.Field()

    details_html = scrapy.Field()
    
    _tel = scrapy.Field()
    _fax = scrapy.Field()
    _contact = scrapy.Field()
    _address = scrapy.Field()
    _email = scrapy.Field()
    _website = scrapy.Field()
