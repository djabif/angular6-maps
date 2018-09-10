import { Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { MenuComponent } from './menu/menu.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

export const rootRouterConfig: Routes = [
  { path: '', component: MenuComponent },
  { path: 'menu', component: MenuComponent,
  children: [
    { path: '', component: MapComponent },
    { path: 'map', component: MapComponent },
    { path: 'restaurants', component: RestaurantComponent }
  ]},
];
