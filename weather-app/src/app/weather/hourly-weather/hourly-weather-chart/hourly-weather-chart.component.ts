import { Component, OnInit, OnDestroy } from '@angular/core';
import { DarkSkyHourlyData } from 'src/app/shared/models/darksky.type';
import { ChartsService } from 'src/app/shared/services/charts.service';
import { Subscription } from 'rxjs';
import { NgxChartsType } from 'src/app/shared/models/ngx-charts.type';

@Component({
  selector: 'app-hourly-weather-chart',
  templateUrl: './hourly-weather-chart.component.html',
  styleUrls: ['./hourly-weather-chart.component.scss']
})
export class HourlyWeatherChartComponent implements OnInit, OnDestroy {

  hourlyWeatherDataSubscription: Subscription;
  hourlyWeatherData: DarkSkyHourlyData[];
  hourlyNgxChartsData: NgxChartsType[];

  xAxisLabel = 'Hours';
  yAxisLabel = 'Temperature';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    // domain: ['#AAAAAA']
  };

  constructor(
    private chartService: ChartsService
  ) {}

  ngOnInit() {
    this.hourlyWeatherDataSubscription = this.chartService.getHourlyWeather()
    .subscribe((data: DarkSkyHourlyData[]) => {
      this.hourlyWeatherData = data;
      this.hourlyNgxChartsData = this.convertToNgxCharts(this.hourlyWeatherData);
    })
  }

  private convertToNgxCharts(hourlyData: DarkSkyHourlyData[]): NgxChartsType[] {
    const a = hourlyData.map((hourly: DarkSkyHourlyData) => {
      const time: Date = new Date(hourly.time*1000);
      const timeToDisplay = this.convertToProperStringDate(time);
      return {name: timeToDisplay, value: hourly.temperature};
    });
    return a;
  }

  private convertToProperStringDate(time: Date): string {
    const hour = (time.getHours()>9)?time.getHours():'0'+time.getHours();
    const minutes = (time.getMinutes()>9)?time.getMinutes():'0'+time.getMinutes();
    const day = (time.getDate()>9)?time.getDate():'0'+time.getDate();
    const mounth = (time.getMonth()>9)?(time.getMonth()+1):'0'+(time.getMonth()+1);
    return (day + '/' + mounth + ' ' +  hour + ':' + minutes).toString();
  }

  ngOnDestroy() {
    this.hourlyWeatherDataSubscription.unsubscribe();
  }
}
