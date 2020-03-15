import { Component, OnInit, Input} from '@angular/core';

import { Weather } from '../../interfaces/weather';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html'
})
export class WeatherCardComponent implements OnInit {
  @Input() weather: Weather;
  constructor() { }

  ngOnInit() {
  }

  setImg(type: Weather): string {
    const clime = type.weather[0].main.toLowerCase();

    switch (clime) {
      case 'clouds':
      case 'mist':
      case 'haze':
        return 'clouded-sun.png';

      case 'clear':
        return 'sun.png';

      case 'rain':
      case 'drizzle':
        return 'rain.png';

      case 'thunderstorm':
        return 'thunderstorm.png';
    }
  }
}
