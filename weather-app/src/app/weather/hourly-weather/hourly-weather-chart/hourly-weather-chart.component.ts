import { Component, OnInit, OnDestroy } from '@angular/core';
import { DarkSkyHourlyData } from 'src/app/shared/models/darksky.type';
import { ChartsService } from 'src/app/shared/services/charts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hourly-weather-chart',
  templateUrl: './hourly-weather-chart.component.html',
  styleUrls: ['./hourly-weather-chart.component.scss']
})
export class HourlyWeatherChartComponent implements OnInit, OnDestroy {

  hourlyWeatherDataSubscription: Subscription;
  hourlyWeatherData: DarkSkyHourlyData[];

  single = [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    }
  ];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(
    private chartService: ChartsService
  ) {}

  ngOnInit() {
    this.hourlyWeatherDataSubscription = this.chartService.getHourlyWeather()
    .subscribe((data: DarkSkyHourlyData[]) => {
      console.log('from charts');
      console.log(data);
      this.hourlyWeatherData = data;
    })
  }

  ngOnDestroy() {
    this.hourlyWeatherDataSubscription.unsubscribe();
  }

  onSelect(event) {
    console.log(event);
  }

}
