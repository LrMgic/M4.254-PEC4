export interface Food {
  name: string;
  kcal: number;
  vegan: boolean;
  gluten: boolean;
}

export class FoodDTO {
  name: string;
  kcal: number;
  vegan: boolean;
  gluten: boolean;

  constructor(
    name: string,
    kcal: number,
    vegan: boolean,
    gluten: boolean,
  ) {
    this.name = name;
    this.kcal = kcal;
    this.vegan = vegan;
    this.gluten = gluten;
  }
}
