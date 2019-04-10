import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { CompareWeatherComponent } from './weather/compare-weather/compare-weather.component';
import { CitySelectionComponent } from './weather/city-selection/city-selection.component';

const routes: Routes = [ //TODO: move to seperate module and lazy load
  {path: 'weather', component: CitySelectionComponent},
  {path: 'compare-weather', component: CompareWeatherComponent},
  {path: 'weather-for-city', component: WeatherComponent},
  {path: '',   redirectTo: '/weather', pathMatch: 'full'},
  {path: '**', component: CitySelectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
