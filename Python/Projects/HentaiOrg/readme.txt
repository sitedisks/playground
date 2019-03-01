Todo: 
1. deploy online
2. auto select url
3. scrapy images and zip
4. download 

Use hentai_page.py to do the volumes (folder) scrape 
> scrapy crawl hentaispider {url}
Use hentai_page.py to do one signle page scrape
> scrapy crawl hentaispider -a url=https://e-hentai.org/g/1051485/44efbafb5d/

Use hentail_search to generate the search result text file
> scrapy crawl hentaisearch
don't forget the replace the url, it will be use to generate the text file name as well.