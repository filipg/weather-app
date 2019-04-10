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
  locationError: boolean = false;

  constructor(
    private cityService: CityService,
    private weatherService: WeatherService,
    private router: Router
    ) { }

  ngOnInit() {
    this.cities = this.cityService.cities;
  }

  checkWeather(city: string) {
    if(this.selectedCity && city === this.selectedCity.city) {
      const {latitude, longitude} = this.selectedCity;
      this.router.navigate(['/weather-for-city', {latitude, longitude}]); //TODO: think what when I will have backgroud image of city
    } else {
      this.fetchLatitudeLongitude(city);
    }
  }

  private fetchLatitudeLongitude(city: string) {
    this.weatherService.getLatitudeLongitude(city).subscribe((data: any) => {
      if(data.features.length) {
        const location = data.features[0].center; //TODO: add types (make object)
        this.router.navigate(['/weather-for-city', {latitude: location[1], longitude: location[0]}]);
      } else {
        this.locationError = true;
      }
    }, error => {
      console.log(error);
      this.locationError = true;
    });
  }

  selectCity(city: City) {
    this.selectedCity = city;
    this.selectedCityName = city.city;
  }

  checkForError() {
    if(this.locationError) {
      this.locationError=!this.locationError;
    }
  }

}
