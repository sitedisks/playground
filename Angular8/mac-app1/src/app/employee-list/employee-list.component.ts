import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <h3>
      Employee List
    </h3>
    <ul class="list-group" *ngFor="let e of employees">
      <li class="list-group-item">{{e.name}}</li>
    </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  employees = [];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
      .subscribe(data=>this.employees = data);
  }

}
