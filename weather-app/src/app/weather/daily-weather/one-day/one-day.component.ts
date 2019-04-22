import { Component, OnInit, Input } from '@angular/core';
import { DarkSkyDailyData } from 'src/app/shared/models/darksky.type';

@Component({
  selector: 'app-one-day',
  templateUrl: './one-day.component.html',
  styleUrls: ['./one-day.component.scss']
})
export class OneDayComponent implements OnInit {

  @Input() oneDayWeather: DarkSkyDailyData;

  constructor() { }

  ngOnInit() {
  }

}
