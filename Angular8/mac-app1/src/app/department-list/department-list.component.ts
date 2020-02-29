import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>
      Department List: 
    </h3>
    <ul class="items">
      <li (click)="onSelect(department)" *ngFor="let department of departments">
        <span class="badge">{{department.id}}</span> {{department.name}}
      </li>
    </ul>
    {{rForm.value |json}}
    <form [formGroup]="rForm" (ngSubmit)="onSubmit()">
      <input formControlName="user">
      <button type="submit">submit</button>
    </form>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  departments = [
    { "id": 1, "name": "Angular" },
    { "id": 2, "name": "Node" },
    { "id": 3, "name": "MongoDB" },
    { "id": 4, "name": "Ruby" },
    { "id": 5, "name": "Bootstrap" },
  ];

  constructor(private router: Router, private fb: FormBuilder) { }

  rForm = this.fb.group({
    user: ['Peter']
  });

  ngOnInit(): void {
  }

  onSelect(department) {
    this.router.navigate(['/departments', department.id]);
  }

  onSubmit() {
    console.log('submit!');
    console.log(this.rForm.value);
  }
}
