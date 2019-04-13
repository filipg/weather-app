import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/shared/services/city.service';
import { City } from 'src/app/shared/city.type';
import { WeatherService } from 'src/app/shared/services/weather.service';

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
    ) { }

  ngOnInit() {
    this.cities = this.cityService.cities;
  }

  checkWeather(city: string) {
    if(this.selectedCity && city === this.selectedCity.city) {
      const {city, latitude, longitude} = this.selectedCity;
      this.sendCityCheckRequest(city, latitude, longitude);
    } else {
      this.fetchLatitudeLongitude(city);
    }
  }

  private fetchLatitudeLongitude(city: string) {
    this.weatherService.getLatitudeLongitude(city).subscribe((data: any) => {
      if(data.features.length) {
        const location = data.features[0].center; //TODO: add types (make object)
        this.sendCityCheckRequest(city, location[1], location[0]);
      } else {
        this.locationError = true;
      }
    }, error => {
      console.log(error);
      this.locationError = true;
    });
  }

  private sendCityCheckRequest(city: string, latitude: string, longitude: string) {
    const cityToCheck: City = {city, latitude, longitude};
    this.weatherService.cityCheck.next(cityToCheck);
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
