import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'google-maps',
        loadChildren: () =>
          import('../google-maps/google-maps.module').then(
            (m) => m.GoogleMapsPageModule
          ),
      },
      {
        path: 'leaflet',
        loadChildren: () =>
          import('../leaflet/leaflet.module').then((m) => m.LeafletPageModule),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/google-maps',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/google-maps',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
