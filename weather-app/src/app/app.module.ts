import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { WeatherComponent } from './weather/weather.component';
import { CompareWeatherComponent } from './weather/compare-weather/compare-weather.component';
import { CitySelectionComponent } from './weather/city-selection/city-selection.component';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WeatherComponent,
    CompareWeatherComponent,
    CitySelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
