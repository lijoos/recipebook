import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  isRecipeLoad:boolean=true;
  isShoppingListLoad:boolean=false;
  LoadComponent(value:boolean)
  {
    console.log("sdsdsd");
    if(value)
    {
  this.isRecipeLoad=true;
  this.isShoppingListLoad=false;
    }
    else
    {
  this.isRecipeLoad=false;
  this.isShoppingListLoad=true;
    }
  }
}
