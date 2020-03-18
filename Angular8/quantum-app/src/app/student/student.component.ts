import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Student } from '../model/student';
import { Class } from '../model/class';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  classId: number;
  currentClass: Class;
  students: Student[] = [];
  private sub: any;
  modalStudent: Student = new Student(0, '', 0, 0, 0);

  constructor(private route: ActivatedRoute, private data: DataService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.classId = +params['id'];
      this.data.getStudentByClass(this.classId).subscribe(
        data => {
          this.students = data;
          console.log(data);
        }
      );

      this.data.getClass(this.classId).subscribe(
        data => {
          this.currentClass = data;
        }
      );
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  newStudent() {
    this.modalStudent = new Student(0, '', 0, 0, 0);
  }

  editStudent(item: Student){
    this.modalStudent = item;
    console.log('item');
  }

  submitStudentForm(value){
    console.log(value);
    value.gpa = +value.gpa;

    if(value.id==0){
      console.log('new student');
      value.classId = this.classId;
      
      console.log(value);

      this.data.addStudent(value).subscribe(
        data=> {
          this.students.push(data);
          this.modalStudent = new Student(0, '', 0, 0, 0);
        }
      );

    }else {
      console.log('edit student');
      this.data.editStudent(value).subscribe(
        data=>{
          console.log('student updated: ' + JSON.stringify(data));
        }
      );
    }
  }

  deleteStudent(id) {
    console.log('Student: ' + id + ' deleted');
    this.data.deleteStudent(id).subscribe(
      _=>{
        this.students= this.students.filter(t=>t.id!==id);
      }
    );
  }
}
