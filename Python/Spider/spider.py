import requests
from parsel import Selector

import time
start = time.time()

### Crawling to the website

# GET request to recurship site
response = requests.get('http://recurship.com')

## Setup for scrapping tool
# 'response.txt' contains all web page content

selector = Selector(response.text)
'''
file = open('recurship.txt','w')
file.write(response.text)
file.close()
'''

# Extracting href attribute from anchor tag <a href="*">
href_links = selector.xpath('//a/@href').getall()

# convert list to string
sdata = []
for p in href_links:
    sdata.append(p)

hrefStr='\n'.join(sdata)
str(hrefStr)
file = open('href_links.txt','w')
file.write(hrefStr)
file.close()


# Extracting src attribute from img tag <img src="*">
img_links = selector.xpath('//img/@src').getall()

idata = []
for i in img_links:
    idata.append(i)
imgStr='\n'.join(idata)
    
str(imgStr)
file = open('img_links.txt','w')
file.write(imgStr)
file.close()


end = time.time()
print("Time taken in seconds : ", (end-start))