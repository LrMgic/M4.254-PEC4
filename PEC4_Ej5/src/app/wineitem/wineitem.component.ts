import { Component, Input, OnInit } from '@angular/core';
import { FoodDTO } from '../models/food';
import { WineDTO } from '../models/wine';

@Component({
  selector: 'app-wineitem',
  templateUrl: './wineitem.component.html',
  styleUrls: ['./wineitem.component.scss'],
})
export class WineitemComponent implements OnInit {
  public wineitem: WineDTO;
  public foods: FoodDTO[] = [];
  public foodPairing!: string;
  public alavenda!: string;
  public quantityNot!: boolean;
  constructor() {
    this.wineitem = new WineDTO('Viña esmeralda', 'assets/img/Vina_esmeralda_2019.png', 6.15, false, 6);
  }

  ngOnInit() {
    this.foods.push(new FoodDTO('Queso', 150, false, false));
    this.foods.push(new FoodDTO('Pescado', 80, false, false));
    this.foods.push(new FoodDTO('Pan', 180, true, true));
    if (this.wineitem.isOnSale) {
      this.alavenda = 'EN STOCK!';
    } else {
      this.alavenda = 'AGOTADO';
    }

  }

  toggleDown() {
    this.wineitem.quantityInCart = this.wineitem.quantityInCart - 1;

    if (this.wineitem.quantityInCart > 1) {
      this.quantityNot = false;
    } else {
      this.quantityNot = true;
    }
  }

  toggleUp() {
    this.wineitem.quantityInCart = this.wineitem.quantityInCart + 1;
  }
}
