import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Dealer } from '../model/dealer';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class DealersService {

  public REST_ENDPOINT = 'https://jsonplaceholder.typicode.com/';

  private _carurl = 'http://localhost:3000/cars';

  dealers: any;
  data: Dealer[] = [
    { username: "1", name: 'North Auto' },
    { username: "2", name: 'South Auto' },
    { username: "3", name: 'East Auto' },
    { username: "4", name: 'West Auto' }
  ];
  constructor(private http: HttpClient) { }

  getDealers() {
    return this.data;
  }

  getDealerObj() {
    return new Dealer('World', 'Auto');
  }

  getRemoteDealers() {
    return this.http.get(this.REST_ENDPOINT + 'users');
  }

  getRemoteDealerById() {
    let params = new HttpParams().set('id', '1');
    return this.http.get(this.REST_ENDPOINT + 'users', { params });
  }

  getRemotePosts() {
    return this.http.get<Post[]>(this.REST_ENDPOINT + 'posts');
  }

  getCarList() {
    return this.http.get(this._carurl);
  }
}
