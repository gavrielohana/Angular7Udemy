import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';


@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Goulash',
            'Hungarian tradition meal',
            'https://img.wcdn.co.il/f_auto,w_700,t_54/1/6/1/2/1612361-46.jpg',
            [new Ingredient("Meat", 1), new Ingredient("salt", 3)]
        ),
        new Recipe(
            'Roasted Chicken',
            'A great meal',
            'http://www.badatz.biz/wp-content/uploads/2013/02/%D7%A2%D7%95%D7%A3-%D7%91%D7%92%D7%A8%D7%99%D7%9C.jpg',
            [new Ingredient("Chicken", 1),
            new Ingredient("paprika", 5)]),
        new Recipe(
            'Si-Si',
            'Hatul Bizot Matzui',
            'https://upload.wikimedia.org/wikipedia/commons/d/d5/CAT2007_05_16.jpg',
            [new Ingredient("Hatul", 1),
            new Ingredient("Kotzetzim", 1),
            new Ingredient("Metagnim", 1),
            new Ingredient("Memalim Beorez", 5)
            ])
    ];

    constructor(private slService: ShoppingListService) {
        console.log("RecipeServer Created");
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        //return this.recipes.find(item => item.ID==id);
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }
}