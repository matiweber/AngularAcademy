import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 
  recipes: Recipe[] = [
    new Recipe('Recipe test', 'Simple test Recipe', 'https://www.aspicyperspective.com/wp-content/uploads/2020/05/Easy-Waffle-Recipe-11-650x957.jpg')
  ];

  constructor() {

   }

  ngOnInit(): void {

  }

}
