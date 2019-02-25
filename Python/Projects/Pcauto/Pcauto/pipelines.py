# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html
from scrapy.pipelines.images import ImagesPipeline
from scrapy.exceptions import DropItem
from scrapy.http import Request


class PcautoPipeline(ImagesPipeline):

    def get_media_requests(self, item, info):
        for image_url in item['image_urls']:
            yield Request(image_url, meta={'item': item, 'index': item['image_urls'].index(image_url)})

    def file_path(self, request, response=None, info=None):
        item = request.meta['item']  
        index = request.meta['index']
        car_name = item['image_name'][index] + "." + \
            request.url.split('/')[-1].split('.')[-1]
        down_file_name = u'full/{0}/{1}'.format(item['country'][0], car_name)
        return down_file_name
