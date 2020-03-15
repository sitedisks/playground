import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  // load news: https://newsapi.org/v2/top-headlines?country=au&category=technology&page=2&apiKey=60b923e5e58c4b9d88122c0a9d2ad60b
  constructor() { }

  ngOnInit(): void {
  }

}
