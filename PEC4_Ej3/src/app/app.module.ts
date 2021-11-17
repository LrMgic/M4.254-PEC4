import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { WineitemComponent } from './wineitem/wineitem.component';

@NgModule({
  declarations: [AppComponent, WineitemComponent, FoodlistComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
