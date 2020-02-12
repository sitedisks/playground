import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''; password = '';

  constructor(@Inject('auth') private service) { }

  handleClick(): void {

    var login = this.service.loginWithCredentials(this.username, this.password);
    console.log('Login? ' + login);

  }

  handleSubmit(formValue): void {
    console.log(formValue)
    var login = this.service.loginWithCredentials(this.username, this.password);
    console.log('Login? ' + login);
  }

  ngOnInit() {
  }

}
