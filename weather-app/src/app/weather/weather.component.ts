import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../shared/services/weather.service';
import { City } from '../shared/city.type';
import { Subscription } from 'rxjs';

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
    this.weatherService.getWeather(latitude, longitude).subscribe(data => {
      setTimeout(() => {
        this.cityCondition = true;
        this.spinnerCondition = false;
        console.log(data);
      }, 1000);
    });
  }

  ngOnDestroy() {
    this.cityToCheck.unsubscribe();
  }
}
