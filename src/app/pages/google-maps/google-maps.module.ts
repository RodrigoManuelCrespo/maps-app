import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoogleMapsPageRoutingModule } from './google-maps-routing.module';

import { GoogleMapsPage } from './google-maps.page';

import {
  GoogleInstructionsComponent,
  GoogleMapsComponent,
} from './views/index';

const VIEWS = [GoogleInstructionsComponent, GoogleMapsComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoogleMapsPageRoutingModule,
  ],
  declarations: [GoogleMapsPage, ...VIEWS],
})
export class GoogleMapsPageModule {}
