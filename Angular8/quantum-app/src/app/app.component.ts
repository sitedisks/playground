import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Class } from './model/class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string = 'AutoStop';
  currentClassId: number = 0;
  classes: Class[] = [];

  // const dummyPosts: Post[] = [
  //   { userId: '1', id: 1, body: 'Hello World', title: 'Testing Angular' },
  //   { userId: '1', id: 2, body: 'Hello World 2', title: 'Testing Angular 2' }
  // ];

  m: Class = { id: 0, userId: '', body: '', title: '' };
  modalClass: Class = this.m;


  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getClasses().subscribe(
      data => {
        this.classes = data;
        console.log(data);
      }
    );
  }

  pickCurrentClass(id) {
    this.currentClassId = id;
  }

  newClass() {
    // this.modalClass = new Class(0, '', '', '');
    this.modalClass = this.m;
  }

  editClass(item: Class) {
    this.modalClass = item;
  }

  submitClassForm(value) {
    console.log(value);
    if (value.id == 0) {
      console.log('new class');
      this.data.addClass(value).subscribe(
        data => {
          this.classes.push(data);
          // this.modalClass = new Class(0, '', '', '');
          this.modalClass = this.m;
        }
      );
    } else {
      console.log('edit class');
      this.data.editClass(value).subscribe(
        data => {
          console.log('class updated: ' + JSON.stringify(data));
        }
      );
    }
  }

  deleteClass(id) {
    console.log('Class: ' + id + ' deleted');
    this.data.deleteClass(id).subscribe(
      _ => {
        this.classes = this.classes.filter(t => t.id !== id);
      }
    );
  }
}
