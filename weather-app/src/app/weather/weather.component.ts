import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../shared/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city: string;
  latitude: string;
  longitude: string;

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService,
  ) { }

  ngOnInit() {
    this.city = this.getParams('city');
    this.latitude = this.getParams('latitude');
    this.longitude = this.getParams('longitude');
    
    this.weatherService.getWeather(this.latitude, this.longitude).subscribe(data => {
      console.log('GET DATA FROM API !!!');
      console.log(data);
    });
  }

  private getParams(params: string) {
    return this.route.snapshot.paramMap.get(params);
  }

}
