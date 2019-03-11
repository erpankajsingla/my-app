import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-edit-shopping-list',
  templateUrl: './edit-shopping-list.component.html',
  styleUrls: ['./edit-shopping-list.component.css']
})
export class EditShoppingListComponent implements OnInit {

  @ViewChild('nameInput') nameInput:ElementRef;
  @ViewChild('amountInput') amountInput:ElementRef;

  @Output() addIngredientEvent = new EventEmitter<Ingredient>();
  @Output() deleteIngredientEvent = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  addIngredient() {
    let name:string = this.nameInput.nativeElement.value;
    let amount:number = this.amountInput.nativeElement.valueAsNumber;
    let ingredient:Ingredient = new Ingredient(name,amount);
    this.addIngredientEvent.emit(ingredient);
  }

  deleteIngredient() {
    this.deleteIngredientEvent.emit(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.valueAsNumber));
  }
}
