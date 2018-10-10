import {Component, OnInit} from '@angular/core';
import {AccessTokenService} from "../../core/access-token.service";
import {Router} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Recipe} from "../../models/recipe";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  constructor(private accessTokenService: AccessTokenService,
              private router: Router,
              private recipeService: RecipeService) {
  }

  recipes: Recipe[] = [];

  ngOnInit() {
    this.recipeService.listAll().subscribe(recipes => {
      this.recipes = recipes;
    }, err => {
      console.error('cant load recipes', err);
      this.recipes = [];
    })
  }

  goToRecipe(recipe: Recipe) {

  }

  logout() {
    this.accessTokenService.clear();
    this.router.navigateByUrl('/login');
  }
}
