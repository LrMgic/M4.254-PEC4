import { Component, OnInit, ViewChild } from '@angular/core';
import { FoodDTO } from '../models/food';
import { WineDTO } from '../models/wine';
import { WineitemComponent } from '../wineitem/wineitem.component';

@Component({
  selector: 'app-winelist',
  template: '<app-wineitem *ngFor="let wineitem of wines" [Wine]="wineitem" (upChangeDetection)="toggleUp($event)" (downChangeDetection)="toggleDown($event)"></app-wineitem>',
  styleUrls: ['./winelist.component.scss'],
})
export class WinelistComponent implements OnInit {
  @ViewChild(WineitemComponent) operations!: WineitemComponent;
  public wines: WineDTO[] = [];
  public foods: FoodDTO[] = [];
  wineitem: any;
  quantityNot!: boolean;
  constructor() {}

  ngOnInit() {
    this.foods.push(new FoodDTO('Queso', 150, false, false));
    this.foods.push(new FoodDTO('Pescado', 80, false, false));
    this.foods.push(new FoodDTO('Pan', 180, true, true));
    this.wines.push(
      new WineDTO(
        0,
        'Viña esmeralda',
        'assets/img/Vina_esmeralda_2019.png',
        6.15,
        false,
        7,
        [this.foods[0], this.foods[1], this.foods[2]]
      )
    );
    this.wines.push(
      new WineDTO(1, 'Orange Lion', 'assets/img/orange-lion.jpg', 25, true, 1, [
        this.foods[0],
      ])
    );
    this.wines.push(
      new WineDTO(
        2,
        'Giral Vinyes Velles Blanc',
        'assets/img/giral-vinyes-velles-blanc.jpg',
        35,
        true,
        0,
        [this.foods[1], this.foods[2]]
      )
    );
  }

  toggleDown(WineQuantityChange: [string, number]) {
    for (let tempwine of this.wines) {
      if (WineQuantityChange[0] === tempwine.name) {
        tempwine.quantityInCart = WineQuantityChange[1] - 1;
      }
    }
  }

  toggleUp(WineQuantityChange: [string, number]) {
    for (let tempwine of this.wines) {
      if (WineQuantityChange[0] === tempwine.name) {
        tempwine.quantityInCart = WineQuantityChange[1] + 1;
      }
    }
  }
}
