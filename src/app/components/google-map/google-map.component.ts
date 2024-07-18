import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [GoogleMapsModule, CommonModule],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.scss'
})
export class GoogleMapComponent {

  zoom = 12;
  center: google.maps.LatLngLiteral = { lat: 37.7749, lng: -122.4194 }; // Example coordinates (San Francisco)
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    mapTypeId: 'hybrid'
  };

}
