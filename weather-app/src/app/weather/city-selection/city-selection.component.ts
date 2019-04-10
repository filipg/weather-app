import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/shared/services/city.service';
import { City } from 'src/app/shared/city.type';
import { WeatherService } from 'src/app/shared/services/weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-selection',
  templateUrl: './city-selection.component.html',
  styleUrls: ['./city-selection.component.scss']
})
export class CitySelectionComponent implements OnInit {

  selectedCity: City;
  selectedCityName: string;
  cities: City[] = [];

  constructor(private cityService: CityService,
    private weatherService: WeatherService,
    private router: Router) { }

  ngOnInit() {
    this.cities = this.cityService.cities;
    // this.weatherService.getWrather().subscribe((data) => {
    //   console.log(data);
    // });
  }

  checkWeather(city: string) {
    if(this.selectedCity && city === this.selectedCity.city) {
      const {city, latitude, longitude} = this.selectedCity;
      console.log('We will use mocked objects - ', city, latitude, longitude);
      this.router.navigate(['/weather-for-city', {latitude, longitude}]);
    } else {
      console.log("I just have city string name - " + city);
      this.fetchLatitudeLongitude(city);
    }
  }

  fetchLatitudeLongitude(city: string) {
    this.weatherService.getLatitudeLongitude().subscribe((data: any) => {
      console.log('longitude - ' + data.features[0].center[0]);
      console.log('latitude - ' + data.features[0].center[1]);
    }, error => {
      console.log('Error !!!!!! ' + error);
    });
  }

  selectCity(city: City) {
    this.selectedCity = city;
    this.selectedCityName = city.city;
  }

}
