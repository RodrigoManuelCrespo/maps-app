import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeafletPageRoutingModule } from './leaflet-routing.module';

import { LeafletPage } from './leaflet.page';

import {
  LeafletDocumentationComponent,
  LeafletInstructionsComponent,
  LeafletMapsComponent,
} from './views/index';

const VIEWS = [
  LeafletDocumentationComponent,
  LeafletInstructionsComponent,
  LeafletMapsComponent,
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, LeafletPageRoutingModule],
  declarations: [LeafletPage, ...VIEWS],
})
export class LeafletPageModule {}
