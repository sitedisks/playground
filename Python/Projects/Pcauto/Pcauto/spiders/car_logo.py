#https://blog.csdn.net/adam_wzs/article/details/78864761

import scrapy 
from Pcauto.items import PcautoItem

class CarLogoSpider(scrapy.Spider):
    name = 'pcauto'
    allowed_domains = ['pcauto.com.cn']

    start_urls = [
        'http://www.pcauto.com.cn/zt/chebiao/guochan/',
        'http://www.pcauto.com.cn/zt/chebiao/riben/',
        'http://www.pcauto.com.cn/zt/chebiao/deguo/',
        'http://www.pcauto.com.cn/zt/chebiao/faguo/',
        'http://www.pcauto.com.cn/zt/chebiao/yidali/',
        'http://www.pcauto.com.cn/zt/chebiao/yingguo/',
        'http://www.pcauto.com.cn/zt/chebiao/meiguo/',
        'http://www.pcauto.com.cn/zt/chebiao/hanguo/',
        'http://www.pcauto.com.cn/zt/chebiao/qita/',
    ]

    def parse(self, response):
        item = PcautoItem()
        srcs = response.xpath('//div[@class="dPic"]/i[@class="iPic"]/a/img/@src').extract()
        car_name = response.xpath('//div[@class="dTxt"]/i[@class="iTit"]/a//text()').extract()
        country = response.xpath('//div[@class="th"]/span/a//text()').extract()

        urls = []
        for url in srcs:
            urls.append('http:' + url)

        item['image_urls'] = urls
        item['image_name'] = car_name
        item['country'] = country

        yield item