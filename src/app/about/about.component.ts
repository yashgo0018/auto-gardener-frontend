import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  softlist = [
    'A C++ File to control The Arduino Nano',
    'A Python File to Fetch The data from arduino to computer and save to the database',
    'A Website to Show the Data with the help of Graph'
  ]

  hardlist = [
    'Arduino Nano',
    'Teamperature and humidity Sensor',
    'Moisture Sensor',
    'Relay to control the Pump',
    'A DC Pump but AC Pump can be used',
    'A 9V 1Amp. DC Adaptor'
  ]
  constructor() { }

  ngOnInit() {
  }

}
