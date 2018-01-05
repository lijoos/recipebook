import { RecipeService } from './../../service/recipe.service';
import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Route, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe:Recipe;
   @Input() index: number;
  //@Output() recipeItemClicked:EventEmitter<Recipe>=new EventEmitter();
  constructor(private recipeService:RecipeService,
                private route:Router,
                private routeParam: ActivatedRoute,
              ) { }

  ngOnInit() {
   
  // console.log(f);
  }
  onRecipeClick()
  {
    //this.recipeService.recipeSelected.emit(this.recipe);
  //  this.route.navigate(["recipes/"+this.recipe.id]);
  }
}
