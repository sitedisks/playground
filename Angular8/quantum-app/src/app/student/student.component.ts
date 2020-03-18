import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  classId: number;
  students;
  private sub: any;
  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.classId = params['id'];
      this.data.getStudentByClass(this.classId).subscribe(
        data=>{
          this.students = data;
          console.log(data);
        }
      );
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
