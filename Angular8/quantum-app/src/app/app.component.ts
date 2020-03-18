import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Class } from './model/class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  currentClassId: number = 0;
  classes: Class[] = [];

  modalClass: Class = new Class(0, '', '', '');

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
    this.modalClass = new Class(0, '', '', '');
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
          this.modalClass = new Class(0, '', '', '');
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
