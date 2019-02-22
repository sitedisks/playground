www.chinesedoctor.com.au
chinesedoctorspider: chinese_doctor.page.py for single doctor page extraction [debug]
chinesedoctor: chinese.doctor.py for extract all chinese doctor data [Production]
> scrapy crawl chinesedoctor -o chinese_doctor.csv

www.healthengine.com.au
healthenginespider: health_engine.py for extract chinese-medicine-practitioner [Production]
practicespider: practice_page.py for single practice page extraction and debug [debug]
practitionerspider: practitioner_page.py for single practitioner page extraction and debug [debug]

> scrapy crawl healthenginespider -o healthengine.json