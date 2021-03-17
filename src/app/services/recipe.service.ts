import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IRecipe } from '../interfaces/irecipe';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  // hostUrl: string = 'http://localhost:8080/api/';
  hostUrl: string = '/api/';
  
  
  constructor(public http: HttpClient) { }

  getAllRecipes() {
    return new Observable((observer) => {
      this.http.get<IRecipe[]>(this.hostUrl + 'recipes').subscribe((res:any) => {
        observer.next(res);
      });
    })
  }

  getRecipeByID(recipeId: string) {
    return new Observable((observer) => {
      this.http.get<IRecipe>(this.hostUrl + 'recipes/' + recipeId).subscribe((res:any) => {
        observer.next(res);
      });
    })
  }

  getRecipesByMemberID(userId: number) {

    return new Observable((observer) => {
      this.http.get<IRecipe[]>(this.hostUrl + 'myrecipes/' + userId).subscribe((res:any) => {
        observer.next(res);
      });
    })
  }

  getRecipesByFilter(filter: any) {
    return new Observable((observer) => {
      this.http.get<IRecipe[]>(this.hostUrl + 'recipes', {params: filter}).subscribe((res:any) => {
        observer.next(res);
      });
    })
  }

  postNewRecipe(recipe: any, userId: number) {
    const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

    return new Observable((observer) => {
      
      recipe.member_id = userId;
      this.http.post(this.hostUrl + 'myrecipes/' + userId, recipe, httpOptions).subscribe((res) => {
        observer.next(res);
      });
    })
  }

  updateOneRecipe(recipe: any, userId: number) {
    const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

    return new Observable((observer) => {
      
      this.http.put(this.hostUrl + 'myrecipes/' + userId + '/' + recipe.recipe_id, recipe, httpOptions).subscribe((res) => {
        observer.next(res);
      });
    })
  }

  deleteOneRecipe(recipe: any, userId: number) {
    const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

    return new Observable((observer) => {
      
      this.http.delete(this.hostUrl + 'myrecipes/' + userId + '/' + recipe.recipe_id, httpOptions).subscribe((res) => {
        observer.next(res);
      });
    })
  }

}
