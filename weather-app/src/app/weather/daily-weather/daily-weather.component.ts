import { Component, Input } from '@angular/core';
import { DarkSkyDaily } from 'src/app/shared/models/darksky.type';

@Component({
  selector: 'app-daily-weather',
  templateUrl: './daily-weather.component.html',
  styleUrls: ['./daily-weather.component.scss']
})
export class DailyWeatherComponent {

  @Input() city: string;
  @Input() dailyWeather: DarkSkyDaily;
}
