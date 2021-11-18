import { Component, Input, OnInit } from '@angular/core';
import { FoodDTO } from '../models/food';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.scss'],
})
export class FoodlistComponent implements OnInit {
  @Input()
  food!: FoodDTO;

  constructor() {}

  ngOnInit() {}
}
