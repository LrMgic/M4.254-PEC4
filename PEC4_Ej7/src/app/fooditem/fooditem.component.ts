import { Component, Input, OnInit } from '@angular/core';
import { Food, FoodDTO } from '../models/food';

@Component({
  selector: 'app-fooditem',
  templateUrl: './fooditem.component.html',
  styleUrls: ['./fooditem.component.scss'],
})
export class FooditemComponent implements OnInit {

  @Input()
  food!: Food;

  constructor() {}

  ngOnInit() {

  }
}
