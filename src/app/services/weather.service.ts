import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  protected key = 'd009acd187d6f7f3a533550aa9fccfde';
  protected proxy = 'https://cors-anywhere.herokuapp.com/';
  protected link = this.proxy + 'api.openweathermap.org/data/2.5/weather?';

  constructor(private http: HttpClient) { }

  searchBy(type: string, place: string): Observable<object> {
    return this.http.get(`${this.link}${type}=${place}&APPID=${this.key}`)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client side error: ', errorResponse.error.message);
    } else {
      console.error('Server side error: ', errorResponse);
    }

    return throwError('This site cant be found');
  }
}
