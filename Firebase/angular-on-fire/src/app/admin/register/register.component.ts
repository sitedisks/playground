import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  submitForm(form) {
    console.log(form.value);
    this.authService.register(form.value.email, form.value.password)
      .then(res => {
        console.log(res);
      }, err => {
        console.log(err.message);
      });
  }
}
