import { RecipeService } from './../service/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ShoppingService } from './../../shopping-list/service/shopping.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
 recipe:Recipe;
 id:number;
  constructor(private shoppingService:ShoppingService,
              private routes:ActivatedRoute,
              private recipeService:RecipeService) {
  
   }

  ngOnInit() {
    
    this.routes.params.subscribe((params:Params)=>{
       this.id=+params["id"];
       this.recipe=this.recipeService.getRecipe(this.id);
    })
    console.log(this.recipe+"FFF"+this.id)
   
  }
  addToShoppingList()
  {
 this.shoppingService.addIngredients(this.recipe.ingredients);
  }

}
