import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { WeatherComponent } from './weather/weather.component';
import { CompareWeatherComponent } from './weather/compare-weather/compare-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WeatherComponent,
    CompareWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
