import { RecipeService } from './../service/recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[];
  constructor(private recipeService:RecipeService){
  }
  @Output() recipeListClicked:EventEmitter<Recipe>=new EventEmitter();
 

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();
  }
  onRecipeItemClick(clickedRecipe:Recipe)
   {
     this.recipeListClicked.emit(clickedRecipe);
  // this.recipe=clickedRecipe;
  }
}
