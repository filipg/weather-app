import { Component, OnInit, Input } from '@angular/core';
import { DarkSkyCurrently } from 'src/app/shared/models/darksky.type';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  @Input() city: string;
  @Input() currentWeather: DarkSkyCurrently;

  constructor() { }

  ngOnInit() {
    console.log(this.city);
    console.log(this.currentWeather);
  }

}
