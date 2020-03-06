import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'PIP';
  isShow: boolean = true;

  parentData: string = "parent data from AppComponent";

  myCount: number = 10;


  constructor() { }

  switchDirective() {
    this.isShow = !this.isShow;
  }

  countChange(event) {
    this.myCount = event;
  }
}
