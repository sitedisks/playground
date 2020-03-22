import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  // alter: https://reqres.in/api/users
  API_URL: string = 'http://localhost:3000/todos';

  private headers = new Headers({ 'Content-Type': 'application/json' });
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.API_URL, this.httpOptions);
  }

  addData(todo) {
    return this.http.post(this.API_URL, todo, this.httpOptions);
  }

  updateData(todo) {
    return this.http.put(this.API_URL + '/' + todo.id, todo);
  }

  removeData(todo) {
    return this.http.delete(this.API_URL + '/' + todo.id);
  }
}
