import { Component } from '@angular/core';
import { City } from 'src/app/shared/city.type';
import { WeatherService } from 'src/app/shared/services/weather.service';

@Component({
  selector: 'app-city-selection',
  templateUrl: './city-selection.component.html',
  styleUrls: ['./city-selection.component.scss']
})
export class CitySelectionComponent {

  selectedCityName: string;
  locationError = false;

  constructor(
    private weatherService: WeatherService,
  ) { }

  checkWeather(city: string) {
    this.weatherService.getLatitudeLongitude(city).subscribe((data: any) => {
      if (data.features.length) {
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
    const cityToCheck: City = { city, latitude, longitude };
    this.weatherService.sendCity(cityToCheck);
  }

  checkForError() {
    (this.locationError) ? this.locationError=false : null;
  }
}
