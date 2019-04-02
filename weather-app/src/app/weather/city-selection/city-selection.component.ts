import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/shared/services/city.service';
import { City } from 'src/app/shared/city.type';

@Component({
  selector: 'app-city-selection',
  templateUrl: './city-selection.component.html',
  styleUrls: ['./city-selection.component.scss']
})
export class CitySelectionComponent implements OnInit {

  cities: City[] = [];

  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.cities = this.cityService.cities;
  }

  selectCity(city: City) {
    console.log(city.city);
  }

}
