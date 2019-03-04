import urllib.request

address="127 balwynroad balwyn vic"
key="AIzaSyCr5tneICjc77TVKJMVUr0rVw0uryDy4gI"
url="https://maps.googleapis.com/maps/api/geocode/json?address=%s&key=%s" % (urllib.parse.quote_plus(address), key)

response = urllib.request.urlopen(url)
jsongeocode = response.read()
print(jsongeocode)

#https://maps.googleapis.com/maps/api/geocode/json?address=127,balwynraod,balwyn,vic&key=AIzaSyCr5tneICjc77TVKJMVUr0rVw0uryDy4gI



