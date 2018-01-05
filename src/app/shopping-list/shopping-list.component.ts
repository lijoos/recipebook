import { Subject } from 'rxjs/Subject';
import { ShoppingService } from './service/shopping.service';
import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

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
onClick(index:number)
{
  console.log(index);
  this.shoppingService.editingStarted.next(index);
}
}
