import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import{RouterModule,Routes} from '@angular/router';
const APP_ROUTES :Routes=[
     {path:'',redirectTo:'/recipes',pathMatch:'full'},
    {path:'recipes',component:RecipeComponent},
    {path:'shopping',component:ShoppingListComponent}
    
];
@NgModule({
    declarations:[],
    imports:[RouterModule.forRoot(APP_ROUTES)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}