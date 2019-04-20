import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DarkSkyCurrently } from 'src/app/shared/models/darksky.type';
import { Subscription } from 'rxjs';
import { DarkskyService } from 'src/app/shared/services/darksky.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit, OnDestroy {

  @Input() city: string;
  currentWeather: DarkSkyCurrently;
  currentWeatherFromService: Subscription;
  currentWeatherCondition = false;

  constructor(
    private darkSkyService: DarkskyService
  ) { }

  ngOnInit() {
    this.currentWeatherFromService = this.darkSkyService.getCurrentWeather()
      .subscribe((data: DarkSkyCurrently) => {
        console.log(data);
        this.currentWeather = data;
        this.currentWeatherCondition = true;
      })
  }

  ngOnDestroy() {
    this.currentWeatherFromService.unsubscribe();
  }
}
