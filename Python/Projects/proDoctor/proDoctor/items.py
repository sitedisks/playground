# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# https://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class ProdoctorItem(scrapy.Item):
    data_type = scrapy.Field()
    # practitioner: p_
    # practitioner id: heData_obj['practitionerData']['ID']
    p_id = scrapy.Field()
    # heData_obj['practitionerData']['practitionerName']
    p_name = scrapy.Field()
    P_cname = scrapy.Field()
    p_profession = scrapy.Field()  # 职业
    # heData_obj['practitionerData']['gender']
    p_gender = scrapy.Field()
    # detail_obj['image']
    p_image = scrapy.Field()
    p_location = scrapy.Field()

    # heData_obj['practitionerData']['primarySpecialty']
    p_specialties = scrapy.Field()  # 特色

    # Overview
    p_description = scrapy.Field()

    # Areas of Interest
    p_interest = scrapy.Field()

    # Qualification and Experience
    p_affliation = scrapy.Field()
    p_languages = scrapy.Field()
    p_eduction = scrapy.Field()

    # Practice Info
    # practice: s_
    s_id = scrapy.Field()  # practice id / location id
    s_clinic_name = scrapy.Field()
    s_description = scrapy.Field()
    s_address = scrapy.Field()
    s_phone = scrapy.Field()
    s_mobile = scrapy.Field()
    s_website = scrapy.Field()
    s_specialties = scrapy.Field()
    s_bulkbilled = scrapy.Field()
    s_afterhours = scrapy.Field()

    s_opening_hours = scrapy.Field()

    # heData_obj['practitionerData']['state']
    s_add_state = scrapy.Field()
    # heData_obj['practitionerData']['suburb']
    s_add_suburb = scrapy.Field()
    # heData_obj['practitionerData']['postcode']
    s_add_post = scrapy.Field()
    # detail_obj['address']['streetAddress']
    s_add_street = scrapy.Field()
