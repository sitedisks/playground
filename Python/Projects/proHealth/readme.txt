Bestong:

categories:

医疗保健 Medical & Healthcare 5
华人医生 Family Doctors 6
牙医诊所 Denture & Dentists 7
美容美体 Beauty & Skin 11
成人服务 Adults Services 15
中医诊所 Traditional Chinese Therapy 64
中医药材 Traditional Chinese Medicine 65

    # Default start_urls:
    # start_urls = ["https://www.bestong.com.au/index.php?City=Melbourne&Category=5&page=1&ipp=All"]

In order to run 
> scrapy crawl bestongspider -a city=Melbourne -a category=5 -o melb_healthcare.csv

If you want to scrape TCM in Sydney
> scrapy crawl bestongspider -a city=Sydney -a category=65 -o syd_tcm.csv

