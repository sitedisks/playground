import os
import json
import requests
import sys

# run python pageloader.py http://www.com.au
url = 'https://www.smh.com.au/healthcare/drop-the-phone-millions-turn-to-the-internet-to-book-gp-appointments-20190404-p51az7.html'
jsonfilename = 'default_json.json'
htmlfilename = 'default_html.html'

if len(sys.argv) > 1:
    url = sys.argv[1]
    print('url:' + url)
    filename = url.split('/')[-1]
    print('filename: ' + filename)
    if filename.find('.html') == -1:
        # pure file name
        jsonfilename = filename + '.json'
        htmlfilename = filename + '.html'
    elif filename.find('.html') > -1:
        jsonfilename = filename.split('.html')[0] + '.json'
        htmlfilename = filename


token = 'shKZWrxnRaGdXEi-9QiavQ'
api_url = 'http://api.url2io.com/article?token=' + token + '&url=' + url

response = requests.get(api_url)

jsondata = json.loads(response.text)

with open('data/smh/' + jsonfilename, 'w') as fp:
    json.dump(jsondata, fp)


htmlcontent = jsondata['content'].replace('\"', '"')

with open('data/smh/' + htmlfilename, 'w') as f:
    f.write(htmlcontent)

print('job done!')
