import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>
      You selected department with id =  {{departmentId}}
    </h3>
    <p>param = {{param}}</p>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  constructor(private route: ActivatedRoute) { }

  @Input() param: string;

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentId = id;
  }

}
