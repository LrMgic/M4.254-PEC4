import { Food, FoodDTO } from './food';

export interface Wine {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  isOnSale: boolean;
  quantityInCart: number;
  foodPairing: Food[];
}

export class WineDTO {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  isOnSale: boolean;
  quantityInCart: number;
  foodPairing?: FoodDTO[];

  constructor(
    id: number,
    name: string,
    imageUrl: string,
    price: number,
    isOnSale: boolean,
    quantityInCart: number,
    foodPairing?: FoodDTO[]
  ) {
    this.id = id
    this.name = name;
    this.imageUrl = imageUrl;
    this.price = price;
    this.isOnSale = isOnSale;
    this.quantityInCart = quantityInCart;
    this.foodPairing = foodPairing;
  }
}
