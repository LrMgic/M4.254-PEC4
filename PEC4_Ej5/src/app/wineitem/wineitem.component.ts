import { Component, OnInit } from '@angular/core';
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
  public quantities: any;
  constructor() {
    this.wineitem = new WineDTO(
      'Viña esmeralda',
      'assets/img/Vina_esmeralda_2019.png',
      6.15,
      false,
      7
    );
    this.quantities = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
  }

  empty() {
    console.log('Numero ' + this.wineitem.quantityInCart);
    if (this.wineitem.quantityInCart < 1) {
      this.quantityNot = false;
    } else {
      this.quantityNot = true;
    }
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
    this.empty();
  }

  toggleDown() {
    this.wineitem.quantityInCart = this.wineitem.quantityInCart - 1;
    this.empty();
  }

  toggleUp() {
    this.wineitem.quantityInCart = this.wineitem.quantityInCart + 1;
    this.empty();
  }
}
