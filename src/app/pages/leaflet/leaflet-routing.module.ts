import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeafletPage } from './leaflet.page';
import {
  LeafletDocumentationComponent,
  LeafletInstructionsComponent,
  LeafletMapsComponent,
} from './views';

const routes: Routes = [
  {
    path: '',
    component: LeafletPage,
  },
  {
    path: 'map',
    component: LeafletMapsComponent,
  },
  {
    path: 'documentation',
    component: LeafletDocumentationComponent,
  },
  {
    path: 'instructions',
    component: LeafletInstructionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeafletPageRoutingModule {}
