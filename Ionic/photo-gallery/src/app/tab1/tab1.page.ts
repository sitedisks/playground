import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  todo;
  constructor(private data: DataService) { }

  firstClick() {
    this.data.getUsers().subscribe(
      data => {
        this.todo = data;
        console.log(this.todo);
      }
    );
  }

}
