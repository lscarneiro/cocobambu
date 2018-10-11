import {Component, OnInit} from '@angular/core';
import {RecipeService} from "../recipe.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Recipe} from "../../models/recipe";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  recipe: Recipe = null;
  tickedIngredients: number = 0;
  tickedSteps: number = 0;
  recipeCompletion: number = 0;
  canStartRecipe: boolean = false;
  recipeStarted: boolean = false;

  ngOnInit() {
    let recipeId = this.route.snapshot.params['id'];
    this.recipeService.findById(recipeId).subscribe(recipe => {
      this.recipe = recipe;
    });
  }

  goBack() {
    this.router.navigateByUrl('/recipes');
  }

  getBackgroundUrl() {
    return !!this.recipe ? 'url(' + this.recipe.picture.cover + ')' : null;
  }


  onIngredientChanged(ticked: boolean): void {
    if (ticked) {
      this.tickedIngredients++;
    } else {
      this.tickedIngredients--;
    }
    this.canStartRecipe = this.recipe.ingredients.length === this.tickedIngredients;
  }

  onStepChanged(ticked: boolean): void {
    if (ticked) {
      this.tickedSteps++;
    } else {
      this.tickedSteps--;
    }
    this.recipeCompletion = Math.round((this.tickedSteps / this.recipe.steps.length) * 100);
  }

  startRecipe() {
    this.recipeStarted = true;
  }
}
