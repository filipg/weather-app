import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { DarkSkyHourly } from 'src/app/shared/models/darksky.type';
import { ChartsService } from 'src/app/shared/services/charts.service';

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.scss']
})
export class HourlyWeatherComponent implements OnChanges {

  @Input() city: string;
  @Input() hourlyWeather: DarkSkyHourly;

  constructor(
    private chartService: ChartsService
  ){}

  ngOnChanges() {
    this.chartService.sendHourlyWeather(this.hourlyWeather.data);
  }
}
