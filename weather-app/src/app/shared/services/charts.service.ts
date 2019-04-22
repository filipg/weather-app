import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { DarkSkyHourlyData } from '../models/darksky.type';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {
  
  hourlyWeather = new BehaviorSubject<DarkSkyHourlyData[]>(null);

  sendHourlyWeather(hourlyWeather: DarkSkyHourlyData[]) {
    this.hourlyWeather.next(hourlyWeather);
  }

  getHourlyWeather(): Observable<DarkSkyHourlyData[]> {
    return this.hourlyWeather.asObservable();
  }
}
