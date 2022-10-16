import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
})
export class GoogleMapsComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;

  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: false,
    maxZoom: 20,
    minZoom: 2,
  };
  markers: any[] = [];

  vertices: google.maps.LatLngLiteral[] = [
    { lat: 13, lng: 13 },
    { lat: -13, lng: 0 },
    { lat: 13, lng: -13 },
  ];

  constructor() {}

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });

    //const prueba = JSON.parse(geojson);

    //this.map.data.addGeoJson(prueba);
  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom) {
      this.zoom++;
    }
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) {
      this.zoom--;
    }
  }

  updateLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      this.zoom = 15;
    });
  }

  addMarker() {
    this.markers.push({
      position: {
        lat: -32.94682,
        lng: -60.63932,
      },
    });
  }
}
