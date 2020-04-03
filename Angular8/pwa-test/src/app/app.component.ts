import { Component, OnInit } from '@angular/core';
import { CoronaService } from './service/corona.service';
import { Corona } from './model/corona.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pwa-test';

  status: Corona = { cases: 0, deaths: 0, recovered: 0, updated: 0, active: 0 };

  constructor(private data: CoronaService) { }

  ngOnInit() {
    this.data.getAllStatus().subscribe((res) => {
      this.status = res;
      console.log(this.status);
    });
  }
}
