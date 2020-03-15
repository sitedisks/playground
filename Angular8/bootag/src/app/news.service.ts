import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  key: string = environment.APIKEY;
  API_URL: string = "https://newsapi.org/v2/top-headlines?country=au&category=technology&page=1&apiKey=" + this.key;
  
  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get(this.API_URL);
  }
}
