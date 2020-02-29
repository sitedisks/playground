import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  message: string = 'Reactive Form';

  /*
  registrationForm = new FormGroup({
    userName: new FormControl('Peter'),
    password: new FormControl('dd'),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl('Melbourne'),
      state: new FormControl('VIC'),
      postcode: new FormControl('3103')
    })

  });
  */
  constructor(private fb: FormBuilder) { }

  registrationForm = this.fb.group({
    userName: ['Peter', [Validators.required, Validators.minLength(3)]],
    password: ['test'],
    confirmPassword: ['test'],
    address: this.fb.group({
      city: ['Melbourne'],
      state: ['VIC'],
      postcode: ['3333']
    })
  });

  ngOnInit(): void {
  }

  loadApiData() {
    console.log('load the data');
    /*
    this.registrationForm.setValue({
      userName: 'zhiyi',
      password: 'test',
      confirmPassword: 'test',
      address: {
        city: 'Melbourne',
        state: 'VIC',
        postcode: '3103'
      }
    });*/
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    console.log('submit form');
  }

  test() {
    console.log('test');
  }

}
