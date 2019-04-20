import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { City } from '../city.type';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  city = new Subject<City>();

  constructor(private http: HttpClient) { }

  sendCity(city: City) {
    this.city.next(city);
  }

  getCity(): Observable<City> {
    return this.city.asObservable();
  }

  getWeather(latitude: string, longitude: string) {
    return this.http.get(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/985434461670fbd750ec0ed8883d74bc/${latitude},${longitude}`);
  }

  getLatitudeLongitude(city: string) {
    return this.http.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoiZmlsaXBnIiwiYSI6ImNqdWJkemhkYjBjZzk0M21sc2RpYnlrZ2oifQ.kLlhqHGZUJKLCDk9x1iEbw&limit=1`);
  }
}
