import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from '../shared/services/weather.service';
import { City } from '../shared/city.type';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit, OnDestroy {

  city: string;
  cityToCheck: boolean = false;

  constructor(
    private weatherService: WeatherService,
  ) { }

  ngOnInit() {
    this.weatherService.cityCheck.subscribe((city: City) => {
      this.cityToCheck = true;
      this.checkWeatherForCity(city);
    })
  }

  private checkWeatherForCity(cityToCheckWeather: City) {
    const {city, latitude, longitude} = cityToCheckWeather;
    this.city = city;
    this.weatherService.getWeather(latitude, longitude).subscribe(data => {
      console.log(data);
    });
  }

  ngOnDestroy() {
    this.weatherService.cityCheck.unsubscribe();
  }
}
