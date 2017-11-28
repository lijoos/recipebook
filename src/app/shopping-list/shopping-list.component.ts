import { ShoppingService } from './service/shopping.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients:Ingredient[] ;
  constructor(private shoppingService:ShoppingService) { }

  ngOnInit() {
   this.ingredients= this.shoppingService.getIngredient();
  }

}
