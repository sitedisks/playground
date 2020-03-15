import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newsData;
  constructor(public newsSrv: NewsService) { }

  ngOnInit(): void {
    this.newsSrv.getNews().subscribe(
      data=>{
        
        console.log(data);
        this.newsData = data;

      }
    );
  }

}
