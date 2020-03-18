import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

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

  getClasses() {
    return this.http.get(this.APIURL + 'class', this.httpOptions);
  }

  addClass(item) {
    return this.http.post(this.APIURL + 'class', item);
  }

  editClass(item) {
    return this.http.put(this.APIURL + 'class', item);
  }

  deleteClass(id) {
    return this.http.delete(this.APIURL + 'class/' + id);
  }

  getStudentByClass(id: number) {
    return this.http.get(this.APIURL + 'student/class/' + id, this.httpOptions);
  }

  addStudent(item) {
    return this.http.post(this.APIURL + 'student', item);
  }

  editStudent(item) {
    return this.http.put(this.APIURL + 'student', item);
  }

  deleteStudent(id) {
    return this.http.delete(this.APIURL + 'student/' + id);
  }
}
