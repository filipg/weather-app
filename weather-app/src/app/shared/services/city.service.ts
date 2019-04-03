import { Injectable } from '@angular/core';
import { City } from '../city.type';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  cities: City[] = [
    {cityId: 1, city: "New York", latitude: "40.730610", longitude: "-73.935242"},
    {cityId: 2, city: "Los Angeles", latitude: "34.052235", longitude: "-118.243683"},
    {cityId: 3, city: "Las Vegas", latitude: "36.114647	", longitude: "-115.172813"},
    {cityId: 4, city: "Miami", latitude: "25.761681	", longitude: "-80.191788"},
    {cityId: 5, city: "London", latitude: "51.509865", longitude: "-0.118092"},
    {cityId: 6, city: "Paris", latitude: "48.864716", longitude: "2.349014"},
    {cityId: 7, city: "Tokyo", latitude: "35.652832	", longitude: "139.839478"},
    {cityId: 8, city: "Dubai", latitude: "25.276987", longitude: "55.296249"},
    {cityId: 9, city: "Kuala Lumpur", latitude: "3.140853", longitude: "101.693207"},
    {cityId: 10, city: "Sydney", latitude: "-33.865143", longitude: "151.209900"},
    {cityId: 11, city: "Honolulu", latitude: "21.315603", longitude: "-157.858093"},
    {cityId: 12, city: "Rio De Janeiro", latitude: "-22.970722", longitude: "-43.182365"},
  ];

  constructor() { }

  city = "AAAAA";
}
