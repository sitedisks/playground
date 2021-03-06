import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
// import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
// import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  reset(form) {
    console.log('reset password for ' + form.value.email);
    // this.authService.sendPasswordResetEmail(form.value.email);
  }

}
