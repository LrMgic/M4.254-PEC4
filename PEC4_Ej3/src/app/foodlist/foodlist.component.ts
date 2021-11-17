import { Component, Input, OnInit } from '@angular/core';
import { Food } from '../models/food';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.scss'],
})
export class FoodlistComponent implements OnInit {
  @Input()
  food!: Food;

  constructor() {}

  ngOnInit() {}
}
