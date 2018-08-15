import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { rootRouterConfig } from './app.routes';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MenuComponent } from './menu/menu.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule, MatProgressSpinnerModule, MatAutocompleteModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MenuComponent,
    RestaurantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
