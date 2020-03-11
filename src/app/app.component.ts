import { Component } from '@angular/core';

import { Weather } from './interfaces/weather';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  weather: Weather;

  receiveWeather(event: Weather) {
    this.weather = event;
  }
}
