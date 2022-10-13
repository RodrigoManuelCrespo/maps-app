import { Component } from '@angular/core';

import * as L from 'leaflet';

@Component({
  selector: 'app-leaflet-maps',
  templateUrl: './leaflet-maps.component.html',
  styleUrls: ['./leaflet-maps.component.scss'],
})
export class LeafletMapsComponent {
  map: L.Map;
  newMarker: any;

  constructor() {}

  ionViewDidEnter() {
    this.leafletMap();
  }

  ionViewDidLeave() {
    this.map.remove();
  }

  leafletMap() {
    // Para poder cargar el mapa, necesitamos indicarle a leaflet el identificador
    // Le indicaremos a leaflet que utilice el elemento con id mapId.
    this.map = L.map('mapId').setView([-32.94682, -60.63932], 5);

    // A continuación, tenemos que añadirle un «tileLayer» a nuestro mapa.
    // Un «tile» es una imagen que representa un área determinada.
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
      this.map
    );

    // Añadir marcadores a nuestro mapa
    L.marker([-32.94682, -60.63932]).bindPopup('Pop up').addTo(this.map);

    //this.locatePosition();
  }

  // locatePosition() {
  //   this.map.locate({ setView: true }).on('locationfound', (e: any) => {
  //     this.newMarker = L.marker([e.latitude, e.longitude], {
  //       draggable: true,
  //     }).addTo(this.map);
  //     this.newMarker.bindPopup('You are located here!').openPopup();

  //     this.newMarker.on('dragend', () => {
  //       const position = this.newMarker.getLatLng();
  //     });
  //   });
  // }
}
