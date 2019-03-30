import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { CompareWeatherComponent } from './weather/compare-weather/compare-weather.component';

const routes: Routes = [
  {path: 'weather', component: WeatherComponent},
  {path: 'compare-weather', component: CompareWeatherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
