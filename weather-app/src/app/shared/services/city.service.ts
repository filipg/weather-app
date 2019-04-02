import { Injectable } from '@angular/core';
import { City } from '../city.type';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  cities: City[] = [
    {cityId: 1, city: "New York", latitude: "40.730610", longitude: "-73.935242"},
    {cityId: 2, city: "Los Angeles", latitude: "40.730610", longitude: "-73.935242"},
    {cityId: 3, city: "Las Vegas", latitude: "40.730610", longitude: "-73.935242"},
    {cityId: 4, city: "Miami", latitude: "40.730610", longitude: "-73.935242"},
    {cityId: 5, city: "London", latitude: "40.730610", longitude: "-73.935242"},
    {cityId: 6, city: "Paris", latitude: "40.730610", longitude: "-73.935242"},
    {cityId: 7, city: "Tokio", latitude: "40.730610", longitude: "-73.935242"},
    {cityId: 8, city: "Dubaj", latitude: "40.730610", longitude: "-73.935242"},
    {cityId: 9, city: "Kuala Lumpur", latitude: "40.730610", longitude: "-73.935242"},
    {cityId: 10, city: "Sydney", latitude: "40.730610", longitude: "-73.935242"},
    {cityId: 11, city: "Honolulu", latitude: "40.730610", longitude: "-73.935242"},
    {cityId: 12, city: "Rio De Janeiro", latitude: "40.730610", longitude: "-73.935242"},

  ];

  constructor() { }

  city = "AAAAA";
}
