import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart } from 'chart.js';
import { Status } from '../model/status.interface';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  url = 'https://corona.lmao.ninja/v2/historical/all';

  dates: string[] = [];
  cases_count: number[] = [];
  deaths_count: number[] = [];
  recovered_count: number[] = [];
  chart = [];

  constructor(private http: HttpClient) { }

  renderChart() {
    this.chart = new Chart('corona', {
      type: 'line',
      data: {
        labels: this.dates,
        datasets: [
          {
            label: 'Cases',
            data: this.cases_count,
            borderColor: '#ffc107',
            fill: false
          },
          {
            label: 'Deaths',
            data: this.deaths_count,
            borderColor: '#dc3545',
            fill: false
          },
          {
            label: 'Recovered',
            data: this.recovered_count,
            borderColor: '#28a745',
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        legend: { display: true },
        scales: {
          xAxes: [{ display: true }],
          yAxes: [{ display: true }]
        }
      }
    });
  }

  ngOnInit(): void {
    this.http.get(this.url).subscribe(
      (result: Status) => {

        for (const [date, count] of Object.entries(result.cases)) {
          this.dates.push(date);
          this.cases_count.push(count);
        }

        for (const [date, count] of Object.entries(result.deaths)) {
          this.deaths_count.push(count);
        }

        for (const [date, count] of Object.entries(result.recovered)) {
          this.recovered_count.push(count);
        }

        console.log(this.dates);
        console.log(this.cases_count);
        console.log(this.deaths_count);
        console.log(this.recovered_count);

        this.renderChart();
      }
    );
  }

}
