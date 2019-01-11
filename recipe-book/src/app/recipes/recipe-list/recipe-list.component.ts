import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] =[
    new Recipe('A Test Recipre','This is simply a test','https://img.wcdn.co.il/f_auto,w_700,t_54/1/6/1/2/1612361-46.jpg'),
    new Recipe('Roasted Chicken','A great meal','http://www.badatz.biz/wp-content/uploads/2013/02/%D7%A2%D7%95%D7%A3-%D7%91%D7%92%D7%A8%D7%99%D7%9C.jpg')

  ];
  constructor() { }

  ngOnInit() {
  }

  onNewRecipe(){
    console.log("Adding new recipe....");
  }

}
