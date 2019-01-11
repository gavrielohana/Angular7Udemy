import { Component, OnInit } from '@angular/core';
import { Ingrediemt } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingrediemt[] = [
    new Ingrediemt('Apples',5),
    new Ingrediemt('Tomatoes',10)
  ];

  constructor() { }

  ngOnInit() {
  }

}
