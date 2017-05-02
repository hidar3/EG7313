import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'location-cmp',
  templateUrl: 'location.html'
})
export class LocationComponent {
  title: string = "Leo's Party Rental location";
  lat: number = 29.448831;
  lng: number = -98.588485;
}