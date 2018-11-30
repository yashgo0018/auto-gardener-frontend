import { Component, OnInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js';
import { Http } from '@angular/http';
import { ApiService } from './services/apis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private req: any;
  LineChart: any = [];
  title = 'charts-with-api';
  xList = []; tempList = []; humiList = []; MoistList = [];

  constructor( private _http: Http, private _api: ApiService) {}

  ngOnInit() {
    this.req = this._api.get_data().subscribe(data => {
      [this.xList, this.tempList, this.humiList, this.MoistList] = data
      
      this.LineChart = new Chart('linechart', {
        type: 'line',
        data: {
          labels: this.xList,
          datasets: [
            {
              label: 'Temperature',
              fill: true,
              backgroundColor: 'rgba(255, 0, 0, 0.5)',
              data: this.tempList,
            },
            {
              label: 'Humidity',
              fill: true,
              backgroundColor: 'rgba(0, 255, 0, 0.5)',
              data: this.humiList,
            },
            {
              label: 'Moisture',
              fill: true,
              backgroundColor: 'rgba(86, 193, 255, 0.4)',
              data: this.MoistList,
            },
            
          ],
        },
        options: {
          title:{
            text: "Line Chart",
            display: true,
            fontSize: 25
          },
          scales: {
            xAxes: [{
              display: true,
            }],
            yAxes: [{
              display: true,
            }]
          }
        }
      })
    });
  }

  ngOnDestroy() {
    this.req.unsubscribe()
  }
}
