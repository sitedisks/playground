import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/data/employees.json";
  // service to provide employee data
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url).pipe(
      tap(()=>console.log('fetched data')),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse){
    return Observable.throw(error.message || 'Server Error');
  }
}
