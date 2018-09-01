import urllib.request
req = urllib.request.Request("http://placekitten.com/g/600/400")
response = urllib.request.urlopen(req)

info = response.info()
print(info)

'''
cat_img = res.read()

with open('cat_600_400.jpg','wb') as f:
    f.write(cat_img)

'''

