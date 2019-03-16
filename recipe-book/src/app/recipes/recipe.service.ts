import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Goulash',
            'Hungarian tradition meal',
            'https://img.wcdn.co.il/f_auto,w_700,t_54/1/6/1/2/1612361-46.jpg',
            [new Ingredient("Meat", 1),
            new Ingredient("salt", 3)]),
        new Recipe(
            'Roasted Chicken',
            'A great meal',
            'http://www.badatz.biz/wp-content/uploads/2013/02/%D7%A2%D7%95%D7%A3-%D7%91%D7%92%D7%A8%D7%99%D7%9C.jpg',
            [new Ingredient("Chicken", 1),
            new Ingredient("paprika", 5)])
    ];
    
    constructor(private slService:ShoppingListService){

    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}