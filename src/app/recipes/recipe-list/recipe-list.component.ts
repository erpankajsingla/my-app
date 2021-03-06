import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent{
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'My tasty Recipe', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Pankaj\'s Recipe', 'Very tasty Recipe', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe:Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
