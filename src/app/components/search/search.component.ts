import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { WeatherService } from '../../services/weather.service';

import { Weather } from '../../interfaces/weather';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: ['#search::-webkit-search-cancel-button {cursor: pointer}']
})
export class SearchComponent implements OnInit {
  @Output() weatherData = new EventEmitter();

  search: string;

  typeSearch = 'city name';
  typeRequest = 'q';

  searching = false; // for loading animation

  constructor(private apiService: WeatherService) { }

  ngOnInit() { }

  getPlace(event: Event): void {
    event.preventDefault();
    this.onSearch();

    this.apiService.searchBy(this.typeRequest, this.search)
      .subscribe(
        (data: Weather) => {
          this.weatherData.emit(data);
          this.onSearch();
          this.clearField();
        },
        (err: Error) => {
          alert(err);
          this.onSearch();
        }
      )
  }

  onSearch(): void {
    this.searching = !this.searching;
  }

  clearField(): void {
    this.search = '';
  }

  setType(btn: HTMLButtonElement): void {

    this.activeType(btn);
    if (btn.value === 'name') {
      this.typeSearch = 'city name';
      this.typeRequest = 'q';
    } else {
      this.typeSearch = 'zip code,country code';
      this.typeRequest = 'zip';
    }
  }

  activeType(btn: any): void { // toggler search-type
    const opposite = btn.previousElementSibling;
    const next = btn.nextElementSibling;

    if (opposite) {
      btn.style.opacity = '1';
      opposite.style.opacity = '.7';
    } else {
      btn.style.opacity = '1';
      next.style.opacity = '.7';
    }

    this.clearField();
  }
}
