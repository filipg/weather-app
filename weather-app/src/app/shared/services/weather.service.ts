import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWrather() {
    return this.http.get('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/985434461670fbd750ec0ed8883d74bc/37.8267,-122.4233');
  }

  getLatitudeLongitude(city: string) {
    return this.http.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoiZmlsaXBnIiwiYSI6ImNqdWJkemhkYjBjZzk0M21sc2RpYnlrZ2oifQ.kLlhqHGZUJKLCDk9x1iEbw&limit=1`);
  }
}
