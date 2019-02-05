import { Component, OnInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js';
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
  
  constructor(private _api: ApiService) {}

  ngOnInit() {
    this.req = this._api.get_data().subscribe(this.dataHandlerForMakingChart)
  }

  ngOnDestroy() {
    this.req.unsubscribe()
  }

  dataHandlerForMakingChart(data){
    var [xList, tempList, humiList, MoistList] = data 
    var data_for_ds = [
      ['Temperature', 'rgba(255, 0, 0, 0.5)', tempList],
      ['Humidity', 'rgba(0, 255, 0, 0.5)', humiList],
      ['Moisture', 'rgba(0, 0, 255, 0.5)', MoistList] 
    ]
    this.make_chart(data_for_ds, xList);
  }

  make_chart(data, xAxis){
    var dataSets = []

    for(var i=0; i<data.length; i++){
      dataSets.push({
        label: data[i][0],
        fill: true,
        backgroundColor: data[i][1],
        data: data[i][2]
      })
    }
    this.LineChart = new Chart('linechart', {
      type: 'line',
      data: {
        labels: xAxis,
        datasets: dataSets
      },
      options: {
        title:{
          text: "Line Chart",
          display: true,
          fontSize: 25
        },
        scales: {
          xAxes: [{display: true}],
          yAxes: [{display: true}]
        }
      }
    })
  }
}