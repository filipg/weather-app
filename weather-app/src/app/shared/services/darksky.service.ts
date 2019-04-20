import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { DarkSkyCurrently } from '../models/darksky.type';

@Injectable({
  providedIn: 'root'
})
export class DarkskyService {

  currentWeather = new Subject<DarkSkyCurrently>();

  constructor() { 
  }

  sendCurrentWeather(weather: DarkSkyCurrently) {
    this.currentWeather.next(weather);
  }

  getCurrentWeather(): Observable<DarkSkyCurrently> {
    return this.currentWeather.asObservable();
  }
}
