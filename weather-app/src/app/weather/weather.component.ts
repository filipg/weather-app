import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../shared/services/weather.service';
import { City } from '../shared/city.type';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators'
import { DarkSkyCurrently } from '../shared/models/darksky.type';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnDestroy {

  city: string;
  cityCondition = false;
  spinnerCondition = false;
  cityToCheck: Subscription;
  currentWeather: DarkSkyCurrently;

  constructor(
    private weatherService: WeatherService,
  ) { }

  ngOnInit() {
    this.cityToCheck = this.weatherService.getCity().subscribe((data: City) => {
      this.spinnerCondition = true;
      this.checkWeatherForCity(data);
    })
  }

  private checkWeatherForCity(cityToCheckWeather: City) {
    const { city, latitude, longitude } = cityToCheckWeather;
    this.city = city;
    this.weatherService.getWeather(latitude, longitude)
    .pipe(
      map(darkSkyResponse => darkSkyResponse['currently'])
    )
    .subscribe((data: DarkSkyCurrently) => {
      setTimeout(() => {
        this.cityCondition = true;
        this.spinnerCondition = false;
        this.currentWeather = data;
        console.log(this.currentWeather);
      }, 1000);
    });
  }

  ngOnDestroy() {
    this.cityToCheck.unsubscribe();
  }
}
