import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { AaaDirective } from './aaa.directive';
import { AaasaPipe } from './aaasa.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent,
    AaaDirective,
    AaasaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
