import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wineitem',
  templateUrl: './wineitem.component.html',
  styleUrls: ['./wineitem.component.scss'],
})
export class WineitemComponent implements OnInit {
  public prova!: string;
  public name!: string;
  public imageUrl!: string;
  public price!: number;
  public isOnSale!: boolean;
  public quantityInCart!: number;
  public foodPairing!: string;
  public alavenda!: string;
  public quantityNot!: boolean;

  constructor() {}

  ngOnInit() {
    this.prova = 'una prova';
    this.name = 'Viña esmeralda';
    this.price = 6.15;
    this.imageUrl = 'assets/img/Vina_esmeralda_2019.png';
    this.isOnSale = false;
    if (this.isOnSale) {
      this.alavenda = 'EN STOCK!';
    } else {
      this.alavenda = 'AGOTADO';
    }
    this.quantityInCart = 6;
    this.foodPairing = 'Queso';
  }

  toggleDown() {
    this.quantityInCart = this.quantityInCart - 1;

    if (this.quantityInCart > 1) {
      this.quantityNot = false;
    } else {
      this.quantityNot = true;
    }
  }

  toggleUp() {
    this.quantityInCart = this.quantityInCart + 1;
  }
}
