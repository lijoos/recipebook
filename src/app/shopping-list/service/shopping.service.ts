import { Ingredient } from './../../shared/ingredient.model';
export class ShoppingService{
    private ingredients:Ingredient[] =[
               new Ingredient("Apples",4),
               new Ingredient("Tommatos",10)
               ];

getIngredient()
{
    return this.ingredients;
}
addIngredient(ingredient:Ingredient)
{
  this.ingredients.push(ingredient);
}
addIngredients(ingredients:Ingredient[])
{
this.ingredients.push(...ingredients);
}
}