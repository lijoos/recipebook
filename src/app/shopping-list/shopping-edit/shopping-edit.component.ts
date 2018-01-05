import { Subscription } from 'rxjs/Subscription';
import { ShoppingService } from './../service/shopping.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef, Output, OnDestroy } from '@angular/core';
import { Subject } from "rxjs/Subject";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
 
  editSubscription: Subscription;
  editMode:boolean=false;
  editedIndex:number;
  ingredient:Ingredient;
  //@ViewChild('fc') slform:NgForm;
  @ViewChild('f') slform:NgForm;
 //  @ViewChild('inputName') inputName:ElementRef;
   //@Output() ingredientAdd :Subject<Ingredient>=new Subject()
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
   this.editSubscription= this.shoppingService.editingStarted.subscribe((index:number)=>{
   this.editMode=true;
   this.editedIndex=index;
   this.ingredient=this.shoppingService.getIngredientByIndex(this.editedIndex);
     this.slform.setValue({
       amount:this.ingredient.amount,
       name:this.ingredient.name
     })
    })
  }
AddClick(form:NgForm)
{
  console.log(form);
  const value=form.value;
  if(!this.editMode)
  {
  this.shoppingService.addIngredient( new Ingredient(value.name,value.amount));
}
else
{
  this.shoppingService.editIngredient(new Ingredient(value.name,value.amount),this.editedIndex);
}
form.reset();
this.editMode=false;
//this.shoppingService.addIngredient(new Ingredient(this.inputName.nativeElement.value,this.inputAmount.nativeElement.value));
}
 ngOnDestroy(): void {
    this.editSubscription.unsubscribe();
  }
  onClear()
  {
this.slform.reset();
this.editMode=false;
  }
  onDelete()
  {
    this.slform.reset();
    this.editMode=false;
    this.shoppingService.deleteIngredient(this.editedIndex);
  }
}
