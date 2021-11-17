import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WineDTO } from '../models/wine';

@Component({
  selector: 'app-wineitem',
  templateUrl: './wineitem.component.html',
  styleUrls: ['./wineitem.component.scss'],
})
export class WineitemComponent implements OnInit {
  @Input()
  wineitem!: WineDTO;
  @Output() quantityCambiada = new EventEmitter<number>();
  public foodPairing!: string;
  public alavenda!: string;
  public quantityNot!: boolean;
  public quantity!: number;
  public quantities: any;
  constructor() {
    this.quantities = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
  }

  ngOnInit() {
    if (this.wineitem.isOnSale) {
      this.alavenda = 'EN STOCK!';
    } else {
      this.alavenda = 'AGOTADO';
    }
    this.empty();
    this.quantity = this.wineitem.quantityInCart;
  }

  empty() {
    this.quantityCambiada.emit(this.wineitem.quantityInCart);
    if (this.wineitem.quantityInCart < 1) {
      this.quantityNot = false;
    } else {
      this.quantityNot = true;
    }
  }

  toggleDown() {
    this.wineitem.quantityInCart = this.wineitem.quantityInCart - 1;
    this.empty();
  }

  toggleUp() {
    this.wineitem.quantityInCart = this.wineitem.quantityInCart + 1;
    this.empty();
  }

  onSelect(quantity: number) {
    this.wineitem.quantityInCart = quantity;
    this.empty();
  }
}
