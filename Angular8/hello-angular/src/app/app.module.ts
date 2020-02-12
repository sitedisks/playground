// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule, InMemoryDbService } from 'angular-in-memory-web-api';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';

// services
import { AuthService } from './core/auth.service';
import { InMemoryTodoDbService } from './todo/todo-data';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule ,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryTodoDbService)
  ],
  providers: [
    { provide: 'auth', useClass: AuthService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
