import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/shared/services/city.service';
import { City } from 'src/app/shared/city.type';

@Component({
  selector: 'app-city-selection',
  templateUrl: './city-selection.component.html',
  styleUrls: ['./city-selection.component.scss']
})
export class CitySelectionComponent implements OnInit {

  selectedCity: City;
  selectedCityName: string;
  cities: City[] = [];

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.cities = this.cityService.cities;
  }

  checkWeather(city: string) {
    if(this.selectedCity && city === this.selectedCity.city) {
      console.log('We will use mocked objects - ', this.selectedCity.city, 
      this.selectedCity.latitude, this.selectedCity.longitude);
    } else {
      console.log("I just have city string name - " + city);      
    }
  }

  selectCity(city: City) {
    this.selectedCity = city;
    this.selectedCityName = city.city;
  }

}
