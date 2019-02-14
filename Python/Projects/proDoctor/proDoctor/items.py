# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class ProdoctorItem(scrapy.Item):

    p_id = scrapy.Field() # practitioner id
    p_name = scrapy.Field()
    P_cname = scrapy.Field()
    p_profession = scrapy.Field()
    s_clinic_name = scrapy.Field()
    s_location = scrapy.Field()
    p_eduction = scrapy.Field()
    s_phone = scrapy.Field()
    s_mobile = scrapy.Field()
    p_specialties = scrapy.Field()
    s_id = scrapy.Field() # practice id / location id
    p_gender = scrapy.Field()
    p_image = scrapy.Field()
    p_languages = scrapy.Field()
