import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { UUID } from 'angular2-uuid';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { of, Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  private api_url = 'api/todos';

  private headers = new Headers({ 'Content-Type': 'application/json' });
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  todos: Todo[] = [];

  constructor(private http: HttpClient) { }

  // POST /todos
  addTodo(todoItem: string): Observable<Todo> {
    let todo = {
      id: UUID.UUID(),
      desc: todoItem,
      completed: false
    };
    return this.http
      .post<Todo>(this.api_url, todo, this.httpOptions).pipe(
        tap((newTodo: Todo) => console.log('bibi'),
          catchError(this.handleError<Todo>('Add todo'))
        )
      );
  }

  // PUT /todos/:id
  toggleTodo(todo: Todo): Observable<Todo> {
    const url = `${this.api_url}/${todo.id}`;
    console.log(url);
    let updatedTodo = Object.assign({}, todo, { completed: !todo.completed });

    return this.http.put(this.api_url, updatedTodo, this.httpOptions)
      .pipe(
        tap(_ => console.log(`updated todo id=${todo.id}`)),
        catchError(this.handleError<any>('update todo'))
      );

  }

  // // DELETE /todos/:id
  deleteTodoById(id: string): Observable<Todo> {
    const url = `${this.api_url}/${id}`;
    return this.http
      .delete<Todo>(this.api_url, this.httpOptions).pipe(
        tap(_ => console.log(`deleted todo id=${id}`)),
        catchError(this.handleError<Todo>('deleteHero'))
      );

  }

  // GET /todos
  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.api_url)
      .pipe(
        tap(_ => console.log('fetched data')),
        catchError(this.handleError<Todo[]>('getTodos'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
