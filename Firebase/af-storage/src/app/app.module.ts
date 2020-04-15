import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import {
  AngularFireStorageModule,
  BUCKET, // customise the storage bucket
  AngularFireStorageReference, // ?
  AngularFireUploadTask // ?
} from '@angular/fire/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [
    // { provide: BUCKET, useValue: 'my-bucket' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
