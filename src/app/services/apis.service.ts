import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

const endpoint = 'http://yashgo00182.pythonanywhere.com/api/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  get_data(){
    var xList = []
    var tempList = []
    var humiList = []
    var MoistList = [] 
    return this._http.get(endpoint + 'data/').pipe(
      map((responseObj: Response) => {
        var data = responseObj as any[any];
        for(var i=0; i<data.length;i++){
          var [datetime, temperature, humidity, moisture] = data[i];
          var [date, time] = datetime.split(' ');
          var [hour, min, sec] = time.split(':');
          var [year, month, day] = date.split('-');
          datetime =  new Date(year, month-1, day, hour, min, sec);
          xList.push(datetime.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }));
          tempList.push(temperature);
          humiList.push(humidity);
          MoistList.push(moisture);
        }
        return [xList, tempList, humiList, MoistList];
      })
    )
  }
}
