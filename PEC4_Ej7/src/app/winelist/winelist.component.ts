import { Component, OnInit } from '@angular/core';
import { FoodDTO } from '../models/food';
import { WineDTO } from '../models/wine';

@Component({
  selector: 'app-winelist',
  templateUrl: './winelist.component.html',
  styleUrls: ['./winelist.component.scss'],
})
export class WinelistComponent implements OnInit {
  public wines: WineDTO[] = [];
  public foods: FoodDTO[] = [];
  constructor() {}

  ngOnInit() {
    this.foods.push(new FoodDTO('Queso', 150, false, false));
    this.foods.push(new FoodDTO('Pescado', 80, false, false));
    this.foods.push(new FoodDTO('Pan', 180, true, true));
    this.wines.push(
      new WineDTO(
        'Viña esmeralda',
        'assets/img/Vina_esmeralda_2019.png',
        6.15,
        false,
        7,
        [this.foods[0], this.foods[1], this.foods[2]]
      )
    );
    this.wines.push(
      new WineDTO('Orange Lion', 'assets/img/orange-lion.jpg', 25, true, 1, [
        this.foods[0],
      ])
    );
  }
}
