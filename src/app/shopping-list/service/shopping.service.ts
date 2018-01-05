import { Subject } from 'rxjs/Subject';
import { Ingredient } from './../../shared/ingredient.model';
export class ShoppingService{
    editingStarted= new Subject<number>();
    private ingredients:Ingredient[] =[
               new Ingredient("Apples",4),
               new Ingredient("Tommatos",10)
               ];

getIngredient()
{
    return this.ingredients;
}
getIngredientByIndex(index:number)
{
    return this.ingredients[index];
}
editIngredient(ingredient:Ingredient,index:number)
{
this.ingredients[index]=ingredient;
this.ingredients.slice();
console.log(this.ingredients);
console.log("vcvcv"+ingredient.name);
}
addIngredient(ingredient:Ingredient)
{
  this.ingredients.push(ingredient);
}
addIngredients(ingredients:Ingredient[])
{
this.ingredients.push(...ingredients);
}
deleteIngredient(index:number)
{
    console.log(index);
   
    this.ingredients.splice(index,1);
    this.ingredients.slice();
     console.log(this.ingredients);
}
}