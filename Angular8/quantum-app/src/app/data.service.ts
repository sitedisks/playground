import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Class } from './model/class';
import { Student } from './model/student';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  APIURL: string = environment.apiurl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getClasses(): Observable<Class[]> {
    return this.http.get<Class[]>(this.APIURL + 'class', this.httpOptions).pipe(
      tap(() => console.log('fetched all classes')), catchError(this.handleError)
    );
  }

  getClass(id: number): Observable<Class> {
    return this.http.get<Class>(this.APIURL + 'class/' + id).pipe(
      tap(() => console.log('fetched class by id')), catchError(this.handleError)
    );;
  }

  addClass(item: Class): Observable<Class> {
    return this.http.post<Class>(this.APIURL + 'class', item).pipe(
      tap(() => console.log('added new class')), catchError(this.handleError)
    );;
  }

  editClass(item: Class): Observable<Class> {
    return this.http.put<Class>(this.APIURL + 'class', item).pipe(
      tap(() => console.log('edited class')), catchError(this.handleError)
    );;
  }

  deleteClass(id: number): Observable<Class> {
    return this.http.delete<Class>(this.APIURL + 'class/' + id).pipe(
      tap(() => console.log('deleted class')), catchError(this.handleError)
    );;
  }

  getStudentByClass(id: number): Observable<Student[]> {
    return this.http.get<Student[]>(this.APIURL + 'student/class/' + id, this.httpOptions).pipe(
      tap(() => console.log('fetched all students by class')), catchError(this.handleError)
    );;
  }

  addStudent(item): Observable<Student> {
    return this.http.post<Student>(this.APIURL + 'student', item).pipe(
      tap(() => console.log('added new student')), catchError(this.handleError)
    );;
  }

  editStudent(item): Observable<Student> {
    return this.http.put<Student>(this.APIURL + 'student', item).pipe(
      tap(() => console.log('edited student')), catchError(this.handleError)
    );;
  }

  deleteStudent(id): Observable<Student> {
    return this.http.delete<Student>(this.APIURL + 'student/' + id).pipe(
      tap(() => console.log('deleted student')), catchError(this.handleError)
    );;
  }

  private handleError(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server Error');
  }
}
