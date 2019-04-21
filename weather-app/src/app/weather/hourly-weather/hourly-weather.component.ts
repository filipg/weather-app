import { Component, Input } from '@angular/core';
import { DarkSkyHourly } from 'src/app/shared/models/darksky.type';

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.scss']
})
export class HourlyWeatherComponent {

  @Input() city: string;
  @Input() hourlyWeather: DarkSkyHourly;
}
