import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
    constructor(private http: HttpClient, private recipesService: RecipeService, private authService: AuthService) { }

    // storeRecipes() {
    //     const recipes: Recipe[] = this.recipesService.getRecipes();

    //     this.http.put<any>("https://recipe-book-f8bc9.firebaseio.com/recipes.json", recipes).subscribe(response => {
    //         console.log(response);
    //     });
    // }
    storeRecipes() {
        const recipes = this.recipesService.getRecipes();
        this.http
          .put(
            'https://recipe-book-f8bc9.firebaseio.com/recipes.json',
            recipes
          )
          .subscribe(response => {
            console.log(response);
          });
      }


      fetchRecipes() {
        return this.http
          .get<Recipe[]>(
            'https://recipe-book-f8bc9.firebaseio.com/recipes.json'
          )
          .pipe(
            map(recipes => {
              return recipes.map(recipe => {
                return {
                  ...recipe,
                  ingredients: recipe.ingredients ? recipe.ingredients : []
                };
              });
            }),
            tap(recipes => {
              this.recipesService.setRecipes(recipes);
            })
          );
      }

    // fetchRecipes() {
    //     return this.authService.user.pipe(
    //         take(1),
    //         exhaustMap(
    //             user => {
    //                 return this.http
    //                     .get<Recipe[]>("https://recipe-book-f8bc9.firebaseio.com/recipes.json",
    //                         {
    //                             params: new HttpParams().set('auth', user.token)
    //                         }
    //                     );
    //             }), map(recipes => {
    //                 return recipes.map(recipe => {
    //                     return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
    //                 })
    //             }),
    //         tap(recipes => {
    //             this.recipesService.setRecipes(recipes);
    //         })
    //     );

    // }// fetchRecipes()
}