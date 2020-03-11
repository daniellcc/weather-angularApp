import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { WeatherService } from '../../services/weather.service';

import { Weather } from '../../interfaces/weather';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  @Output() weatherData = new EventEmitter();

  typeSearch = 'city name';
  typeRequest = 'q';

  searching = false;

  constructor(private apiService: WeatherService) {}

  ngOnInit() {
  }

  getPlace(text: string, event: Event) {
    event.preventDefault();
    this.onSearch();

    this.apiService.searchBy(this.typeRequest, text).subscribe(
      (data: Weather) => this.weatherData.emit(data),
      (err: Error) => {
        alert(err);
        this.onSearch();
      },
      () => this.onSearch()
    );
  }

  setType(event) {
    const btn = event.target;
    this.activeType(event);
    if (btn.value === 'name') {
      this.typeSearch = 'city name';
      this.typeRequest = 'q';
    } else {
      this.typeSearch = 'zip code,country code';
      this.typeRequest = 'zip';
    }
  }

  onSearch() {
    this.searching = !this.searching;
  }

  activeType(event) {
    const opposite = event.target.previousElementSibling;
    const next = event.target.nextElementSibling;

    if (opposite) {
      event.target.style.opacity = '1';
      opposite.style.opacity = '.7';
    } else {
      event.target.style.opacity = '1';
      next.style.opacity = '.7';
    }
  }
}
