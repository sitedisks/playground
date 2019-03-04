import os
import json
import urllib.request

key = "AIzaSyCr5tneICjc77TVKJMVUr0rVw0uryDy4gI"
file_to_open = os.path.abspath('data/healthengine.json')
with open(file_to_open, 'r') as f:
    items = json.load(f)

counter = 0
for item in items:
    print(item['s_address'])
    address = urllib.parse.quote(item['s_address'])
    url = "https://maps.googleapis.com/maps/api/geocode/json?address=%s&key=%s" % (address, key)
    response = urllib.request.urlopen(url)
    geocode_data = json.loads(response.read())
    geo_location = geocode_data['results'][0]['geometry']['location']
    lat = geo_location['lat']
    lng = geo_location['lng']
    print('lat: ' + str(lat) + ', lng:' + str(lng))
    item['lat'] = lat
    item['lng'] = lng
    counter = counter+1

with open('data/healthengine_geo.json','w') as fp:
    json.dump(items, fp)

print('Job done: ' + str(counter))
