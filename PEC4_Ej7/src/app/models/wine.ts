import { Food, FoodDTO } from './food';

export interface Wine {
  name: string;
  imageUrl: string;
  price: number;
  isOnSale: boolean;
  quantityInCart: number;
  foodPairing: Food[];
}

export class WineDTO {
  name: string;
  imageUrl: string;
  price: number;
  isOnSale: boolean;
  quantityInCart: number;
  foodPairing?: FoodDTO[];

  constructor(
    name: string,
    imageUrl: string,
    price: number,
    isOnSale: boolean,
    quantityInCart: number,
    foodPairing?: FoodDTO[]
  ) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.price = price;
    this.isOnSale = isOnSale;
    this.quantityInCart = quantityInCart;
    this.foodPairing = foodPairing;
  }
}
