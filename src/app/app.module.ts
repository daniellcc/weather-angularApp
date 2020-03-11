import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
