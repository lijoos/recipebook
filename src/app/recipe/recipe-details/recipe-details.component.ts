import { ShoppingService } from './../../shopping-list/service/shopping.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
@Input() recipe:Recipe;
  constructor(private shoppingService:ShoppingService) {
  
   }

  ngOnInit() {
      this.shoppingService.addIngredients(this.recipe.ingredients);
  }
  addToShoppingList()
  {

  }

}
