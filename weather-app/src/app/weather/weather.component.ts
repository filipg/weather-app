import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../shared/services/weather.service';
import { City } from '../shared/city.type';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators'
import { DarkSkyCurrently, DarkSkyResponse, DarkSkyHourly, DarkSkyDaily } from '../shared/models/darksky.type';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnDestroy {

  cityName: string;
  cityCondition = false;
  spinnerCondition = false;
  cityToCheck: Subscription;
  currentWeather: DarkSkyCurrently;
  hourlyWeather: DarkSkyHourly;
  dailyWeather: DarkSkyDaily;

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
    this.weatherService.getWeather(latitude, longitude)
      .pipe(
        map(darkSkyResponse => ({
          currently: darkSkyResponse['currently'],
          hourly: darkSkyResponse['hourly'],
          daily:  darkSkyResponse['daily'],
        }))
      )
      .subscribe((data: DarkSkyResponse) => {
        setTimeout(() => {
          this.cityName = city;
          this.cityCondition = true;
          this.spinnerCondition = false;
          this.currentWeather = data.currently;
          this.hourlyWeather = data.hourly;
          this.dailyWeather = data.daily;
          console.log(data);
        }, 1000);
      });
  }

  ngOnDestroy() {
    this.cityToCheck.unsubscribe();
  }
}
