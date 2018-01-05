import { RecipeEditComponent } from './../recipe/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from '../recipe/recipe-start/recipe-start.component';
import { RecipeDetailsComponent } from '../recipe/recipe-details/recipe-details.component';
import { RecipeListComponent } from '../recipe/recipe-list/recipe-list.component';
import { NgModule } from '@angular/core';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { RecipeComponent } from '../recipe/recipe.component';
import{RouterModule,Routes} from '@angular/router';
const APP_ROUTES :Routes=[
     {path:'',redirectTo:'/recipes',pathMatch:'full'},
     {path:'recipes',component:RecipeComponent,children:[
        {path:'',component:RecipeStartComponent},
        {path:'new',component:RecipeEditComponent},
        {path:':id',component:RecipeDetailsComponent},
        {path:':id/edit',component:RecipeEditComponent}
    ]},
    {path:'shopping',component:ShoppingListComponent}
    
];
@NgModule({
    declarations:[],
    imports:[RouterModule.forRoot(APP_ROUTES)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}