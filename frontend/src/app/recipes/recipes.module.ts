import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RecipesRoutingModule} from './recipes-routing.module';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import {RecipeService} from "./recipe.service";
import { TickComponent } from './recipe-detail/tick/tick.component';

@NgModule({
  imports: [
    CommonModule,
    RecipesRoutingModule
  ],
  declarations: [RecipeListComponent, RecipeDetailComponent, TickComponent],
  providers: [RecipeService]
})
export class RecipesModule {
}
