import urllib.request
req = urllib.request.Request("http://placekitten.com/g/500/800")
response = urllib.request.urlopen(req)

info = response.info()
print(info)


cat_img = response.read()

with open('cat_500_800.jpg','wb') as f:
    f.write(cat_img)