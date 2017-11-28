import { ShoppingService } from './../service/shopping.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputAmount') inputAmount:ElementRef;
   @ViewChild('inputName') inputName:ElementRef;
   @Output() ingredientAdd :EventEmitter<Ingredient>=new EventEmitter()
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
  }
AddClick()
{
this.shoppingService.addIngredient(new Ingredient(this.inputName.nativeElement.value,this.inputAmount.nativeElement.value));
}
}
