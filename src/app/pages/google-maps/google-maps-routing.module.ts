import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoogleMapsPage } from './google-maps.page';
import { GoogleDocumentationComponent, GoogleMapsComponent } from './views';

const routes: Routes = [
  {
    path: '',
    component: GoogleMapsPage,
  },
  {
    path: 'map',
    component: GoogleMapsComponent,
  },
  {
    path: 'documentation',
    component: GoogleDocumentationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoogleMapsPageRoutingModule {}
