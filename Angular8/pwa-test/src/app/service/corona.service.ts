import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Corona } from '../model/corona.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  readonly ALL_URL = environment.CORONA_API + 'all';
  constructor(private http: HttpClient) { }

  getAllStatus(): Observable<Corona> {
    return this.http.get<Corona>(this.ALL_URL);
  }

}
