import { RecipeService } from './../../service/recipe.service';
import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe;
 // @Output() recipeItemClicked:EventEmitter<Recipe>=new EventEmitter();
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }
  onRecipeClick()
  {
  this.recipeService.recipeSelected.emit(this.recipe);
   // this.recipeItemClicked.emit(this.recipe);
  }
}
