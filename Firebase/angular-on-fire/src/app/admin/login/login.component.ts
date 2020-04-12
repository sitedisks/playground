import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
// import { Form } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit(): void {
  }

  submitForm(form) {
    console.log(form.value);
    this.authService.login(form.value.email, form.value.password)
      .then(res => {
        console.log(res);
      }, err => {
        console.log(err.message);
      });
  }

  logoutMe() {
    console.log('logout me');
    this.authService.logout();
  }

  googleLogin() {
    console.log('google login');
    this.authService.loginWithGoogle()
      .then(res => {
        console.log(res);
      }, err => {
        console.log(err.message);
      });
  }

  facebookLogin() {
    console.log('facebook login');
    this.authService.loginWithFacebook()
      .then(res => {
        console.log(res);
      }, err => {
        console.log(err.message);
      });
  }

  resetPassword() {
    console.log('reset password');
    this.router.navigate(['admin/forgot']);
  }

}
