import requests
import json
from parsel import Selector

import time
start = time.time()

all_images = {}

response = requests.get('http://recurship.com/')
selector = Selector(response.text)
href_links = selector.xpath('//a/@href').getall()
#image_links = selector.xpath('//img/@src').getall()

for link in href_links:
    try:
        response = requests.get(link)
        if response.status_code == 200:
            selector2 = Selector(response.text)
            image_links = selector2.xpath('//img/@src').getall()
            all_images[link] = image_links
    except Exception as exp:
        print('Error navigating to link:', link)

#print(all_images)

with open('all_images.txt','w') as outfile:
    json.dump(all_images, outfile)

end = time.time()

print("Time takend in seconds:", end-start)