import { Ingredient } from './../../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Recipe } from './../recipe.model';
export class RecipeService{
   recipeSelected:EventEmitter<Recipe>=new EventEmitter();
  private  recipes:Recipe[]=[
    new Recipe(1,'Chicken Burger',
    'Chicken Burger with saucage',
    'https://www.edwards-sandwiches.ch/103-large_default/le-monsieur-seguin-la-chevre.jpg',
    [new Ingredient("meat",4),
     new Ingredient("Fresnch fry",4)]
    ),
     new Recipe(2,'Hot Dog',
     'Delicious Hot Dog',
     'https://chompies.com/wp-content/uploads/2017/03/HotDog.png',
     [new Ingredient("bread",4),
     new Ingredient("Fresnch fry",4)])
  ];
  getRecipes(){
      return this.recipes.slice();
  }
   getRecipe(id:number){
      return this.recipes[id];
  }
  
  
}