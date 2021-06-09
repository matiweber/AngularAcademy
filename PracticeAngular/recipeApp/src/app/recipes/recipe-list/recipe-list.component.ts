import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Recipe desert test', 'Description test Recipe', 
    'https://www.aspicyperspective.com/wp-content/uploads/2020/05/Easy-Waffle-Recipe-11-650x957.jpg'),
    new Recipe ('2nd Recipe test', 'A wonderfull desert', 'https://i.ytimg.com/vi/2sHmcusjg6c/hqdefault.jpg')
  ];

  constructor() {

  }

  ngOnInit() {

  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
