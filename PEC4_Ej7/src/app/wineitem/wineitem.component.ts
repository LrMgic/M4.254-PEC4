import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { WineDTO } from '../models/wine';

@Component({
  selector: 'app-wineitem',
  templateUrl: './wineitem.component.html',
  styleUrls: ['./wineitem.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WineitemComponent implements OnInit {
  @Input() public Wine!: WineDTO;
  @Output() private WineQuantityChange: EventEmitter<[string, number]>;
  @Output() private downChangeDetection: EventEmitter<[string, number]>;
  @Output() private upChangeDetection: EventEmitter<[string, number]>;
  public wineitem!: WineDTO;
  public foodPairing!: string;
  public alavenda!: string;
  public quantityNot!: boolean;
  public quantity!: number;
  public quantities: any;
  constructor() {
    this.WineQuantityChange = new EventEmitter<[string, number]>();
    this.downChangeDetection = new EventEmitter<[string, number]>();
    this.upChangeDetection = new EventEmitter<[string, number]>();
    this.quantities = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    ];
  }

  ngOnInit() {
    this.wineitem = this.Wine;
    this.WineQuantityChange.emit([
      this.wineitem.name,
      this.wineitem.quantityInCart,
    ]);
    if (this.wineitem.isOnSale) {
      this.alavenda = 'EN STOCK!';
    } else {
      this.alavenda = 'AGOTADO';
    }
    this.empty();
    this.quantity = this.wineitem.quantityInCart;
  }

  empty() {
    if (this.wineitem.quantityInCart < 1) {
      this.quantityNot = false;
    } else {
      this.quantityNot = true;
    }
  }

  toggleDown(event: any) {
    this.downChangeDetection.emit([
      this.wineitem.name,
      this.wineitem.quantityInCart,
    ]);
    this.empty();
  }

  toggleUp(event: any) {
    this.upChangeDetection.emit([
      this.wineitem.name,
      this.wineitem.quantityInCart,
    ]);
    this.empty();
  }
}
