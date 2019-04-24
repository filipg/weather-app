import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { WeatherComponent } from './weather/weather.component';
import { CompareWeatherComponent } from './weather/compare-weather/compare-weather.component';
import { CitySelectionComponent } from './weather/city-selection/city-selection.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { CurrentWeatherComponent } from './weather/current-weather/current-weather.component';
import { HourlyWeatherComponent } from './weather/hourly-weather/hourly-weather.component';
import { DailyWeatherComponent } from './weather/daily-weather/daily-weather.component';
import { OneDayComponent } from './weather/daily-weather/one-day/one-day.component';
import { OneDayDatePipe } from './shared/pipes/one-day-date.pipe';
import { HourlyWeatherChartComponent } from './weather/hourly-weather/hourly-weather-chart/hourly-weather-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WeatherComponent,
    CompareWeatherComponent,
    CitySelectionComponent,
    CurrentWeatherComponent,
    HourlyWeatherComponent,
    DailyWeatherComponent,
    OneDayComponent,
    OneDayDatePipe,
    HourlyWeatherChartComponent,
    MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxChartsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
