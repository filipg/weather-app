import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { LatitudeLongitude, CompareCity } from 'src/app/shared/city.type';

@Component({
  selector: 'app-compare-weather',
  templateUrl: './compare-weather.component.html',
  styleUrls: ['./compare-weather.component.scss']
})
export class CompareWeatherComponent implements OnInit {

  constructor(
    private weatherService: WeatherService
    ) { }

  ngOnInit() {
  }

  checkWeather(cityOne: string, cityTwo: string) {
    combineLatest(this.weatherService.getLatitudeLongitude(cityOne),
     this.weatherService.getLatitudeLongitude(cityTwo)).subscribe((data: any) => {
       if(data[0].features.length && data[1].features.length) {
        const locationOne: LatitudeLongitude = {latitude: data[0].features[0].center[1],
          longitude: data[0].features[0].center[0]} //TODO: add types (make object)
        const locationTwo: LatitudeLongitude = {latitude: data[1].features[0].center[1],
          longitude: data[1].features[0].center[0]}; //TODO: add types (make object)
        const objectToSend: CompareCity = {cityOneName: cityOne, cityOneData: locationOne, 
          cityTwoName: cityTwo, cityTwoData: locationTwo};
        this.sendCityCheckRequest(objectToSend);
       }
     })
  }

  private sendCityCheckRequest(toCheck: CompareCity) {
    combineLatest(this.weatherService.getWeather(toCheck.cityOneData.latitude.toString(),
    toCheck.cityOneData.longitude.toString()),
      this.weatherService.getWeather(toCheck.cityTwoData.latitude.toString(),
      toCheck.cityTwoData.longitude.toString()))
      .pipe(
        map(data => ({cityOne: data[0], cityTwo: data[1]}))
      )
      .subscribe(data => {
        console.log(data);
      })
  }

  checkForError() {

  }
}
