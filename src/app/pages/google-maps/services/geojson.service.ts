import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class GeojsonService {
  constructor(private http: HttpClient) {}

  onMapReady() {
    return this.http.get('assets/data.json');
  }
}
