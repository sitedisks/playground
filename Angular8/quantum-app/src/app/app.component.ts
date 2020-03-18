import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Class } from './model/class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  classes;
 
  modalClass: Class = new Class(0, '','','');

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getClasses().subscribe(
      data => {
        this.classes = data;
        console.log(data);
      }
    );
  }

  newClass(){
    this.modalClass = new Class(0, '','','');
  }

  editClass(item: Class) {
    this.modalClass = item;
  }

  submitClassForm(value) {
    console.log(value);
    if(value.id==0){
      console.log('new');
      this.data.addClass(value).subscribe(
        data=>{
          this.classes.push(data);
          this.modalClass = new Class(0, '','','');
        }
      );
    }else {
      console.log('edit');
    }
  }

  deleteClass(id){
    console.log('Class: ' + id + ' deleted');
  }
}
