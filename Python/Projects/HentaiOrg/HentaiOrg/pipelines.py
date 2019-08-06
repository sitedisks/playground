# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html
import scrapy
from scrapy.pipelines.images import ImagesPipeline
from scrapy.exceptions import DropItem
from urllib.parse import urlparse
from os.path import basename


class HentaiorgPipeline(ImagesPipeline):
    def file_path(self, request, response=None, info=None):
        folder = request.meta['folder']
        path = urlparse(request.url).path
        return 'full/hentai/G-Panda/%s/%s' % (folder, basename(path))

    def get_media_requests(self, item, info):
        for image_url in item['image_urls']:
            yield scrapy.Request(url = image_url, meta = {'folder': item['folder']})

