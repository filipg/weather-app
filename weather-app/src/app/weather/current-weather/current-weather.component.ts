import { Component, Input } from '@angular/core';
import { DarkSkyCurrently } from 'src/app/shared/models/darksky.type';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent {

  @Input() city: string;
  @Input() currentWeather: DarkSkyCurrently;
}
