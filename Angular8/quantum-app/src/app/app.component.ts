import { Component, OnInit } from '@angular/core';
import {DataService} from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'quantum-app';

  classes;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.getClasses().subscribe(
      data=>{
        this.classes = data;
        console.log(data);
      }
    );
  }



}
