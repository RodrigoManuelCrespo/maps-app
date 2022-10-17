import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { GeojsonService } from '../../services/geojson.service';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss'],
})
export class GoogleMapsComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map!: GoogleMap;

  // Configuraciones iniciales
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

  constructor(
    private geojsonService: GeojsonService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    // Obtener posicion actual
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });

    // Cargar geojson
    this.geojsonService.onMapReady().subscribe((res) => {
      // Agregamos geojson
      this.map.data.addGeoJson(res);

      // Seteamos estilos
      this.map.data.setStyle({
        strokeColor: 'blue',
        fillOpacity: 0.1,
        fillColor: 'blue',
        strokeWeight: 2,
        icon: 'http://maps.google.com/mapfiles/ms/micons/blue.png',
      });
    });
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

  // Para añadir un marcador se debe agregar la etiqueta <map-marker> en el template
  addMarker() {
    this.markers.push({
      position: {
        lat: -32.94682,
        lng: -60.63932,
      },
    });
  }
}
