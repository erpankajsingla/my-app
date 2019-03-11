import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Oranges', 3)
  ];

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(ingredient:Ingredient) {
    let ingredientExists:Boolean = false;
    this.ingredients.forEach(ing =>{
      if(ing.name === ingredient.name) {
        ing.amount += ingredient.amount;
        ingredientExists = true;
      }
    });
    if(!ingredientExists) {
      this.ingredients.push(ingredient);
    }
  }

  onDelete(ingredient:Ingredient) {
    for(let index =0; index<this.ingredients.length; index++) {
      let ing = this.ingredients[index];
      if(ing.name === ingredient.name) {
        if(ing.amount <= ingredient.amount) {
          this.ingredients.splice(index,1);
        } else{
          ing.amount -=  ingredient.amount;
        }
        break;
      }
    }
  }

}
