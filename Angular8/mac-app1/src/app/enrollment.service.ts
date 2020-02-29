import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { User} from './User';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = '';
  constructor(private _http: HttpClient) { }

  enroll(user: User){
    return this._http.post<any>(this._url, user);
  }
}
