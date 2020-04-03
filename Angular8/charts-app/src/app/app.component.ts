import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './model/data.interface';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'charts-app';
  data: Data[];
  url = 'http://localhost:4000/results';
  month = [];
  price = [];
  chart = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get(this.url).subscribe(
      (result: Data[]) => {
        result.forEach(y => {
          this.month.push(y.month);
          this.price.push(y.price);
        });

        this.chart = new Chart('ppp', {
          type: 'line',
          data: {
            labels: this.month,
            datasets: [{
              label: 'Crude oil prices',
              data: this.price,
              borderColor: '#ooff33',
              // backgroundColor: '00ff00',
              fill: true
            }]
          },
          options: {
            // responsive: true,
            legend: { display: true },
            scales: {
              xAxes: [{ display: true }],
              yAxes: [{ display: true }]
            }
          }
        });
      }
    );
  }
}
