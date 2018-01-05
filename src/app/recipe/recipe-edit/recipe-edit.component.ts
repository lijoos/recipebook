import { RecipeService } from './../service/recipe.service';
import { Recipe } from './../recipe.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from "@angular/forms";


@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id:number;
 editMode=false;
 editRecipe:Recipe;
 editForm:FormGroup;
  constructor(private route:ActivatedRoute,
              private recipeService:RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe((param:Params)=>{
     this.id=param["id"];
     this.editMode=param["id"]!=null;
     console.log(this.editMode);
     if(this.editMode)
     {
    this.editRecipe=this.recipeService.getRecipe(this.id);
     this.initForm()
     }
    })
  }
  initForm()
  {
this.editForm=new FormGroup({
  'recipeName':new FormControl(this.editRecipe.name)
});
  }

}
