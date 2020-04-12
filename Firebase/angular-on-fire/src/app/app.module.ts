import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/auth";

import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderListComponent } from './order-list/order-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './admin/verify-email/verify-email.component';
import { ProjectComponent } from './admin/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    OrderListComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
