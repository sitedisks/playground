# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html
import scrapy
from scrapy.pipelines.images import ImagesPipeline
from scrapy.exceptions import DropItem


class HentaiorgPipeline(object):
    def process_item(self, item, spider):
        return item

    def image_key(self, url):
        image_guid = url.split('/')[-1]
        return 'full/%s.jpg' % (image_guid)

    def get_media_requests(self, item, info):
        for image_url in item['image_urls']:
            yield scrapy.Request(image_url)

    def item_completed(self, results, item, info):
        image_paths = [x['path'] for ok, x in results if ok]
        if not image_paths:
            raise DropItem("Item contains no images")
        item['image_paths'] = image_paths
        return item

'''
    def item_completed(self, results, item, info):
        image_paths = [x['path'] for ok, x in results if ok]
        if not image_paths:
            raise DropItem("Item contains no images")

        if item['jk']:
            newname = item['car'] + '-' + item['jk'] + '-' + item['model'] + '.jpg'
        else:
            newname = item['car'] + '-' + item['model'] + '.jpg'
        os.rename("/neteaseauto/" + image_paths[0], "/neteaseauto/" + newname)

        return item  

