import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WineitemComponent } from './wineitem/wineitem.component';
import { FooditemComponent } from './fooditem/fooditem.component';

@NgModule({
  declarations: [
    AppComponent,
    WineitemComponent,
    FooditemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
