import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dealer } from '../model/dealer';

@Injectable({
  providedIn: 'root'
})
export class DealersService {

  dealers: any;
  data: Dealer[] = [
    {username: "1", name: 'North Auto'},
    {username: "2", name: 'South Auto'},
    {username: "3", name: 'East Auto'},
    {username: "4", name: 'West Auto'} 
  ];
  constructor(private http: HttpClient) { }

  getDealers(){
    return this.data;
  }

  getDealerObj(){
    return new Dealer('World', 'Auto');
  }

}
