import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IRecipe } from '../interfaces/irecipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  hostUrl: string = 'http://localhost:8080/';
  userId: string = '123';
  
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
      this.http.get<IRecipe[]>(this.hostUrl + 'recipes/' + recipeId).subscribe((res:any) => {
        observer.next(res);
      });
    })
  }

  getRecipesByMemberID(memberId: string) {
    return new Observable((observer) => {
      this.http.get<IRecipe[]>(this.hostUrl + 'myrecipes/' + memberId).subscribe((res:any) => {
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

  postNewRecipe(recipe: any) {
    const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

    return new Observable((observer) => {
      this.http.post(this.hostUrl + `myrecipes/${this.userId}`, recipe, httpOptions).subscribe((res) => {
        observer.next(res);
      });
    })
  }

  updateOneRecipe(recipe: any) {
    const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

    return new Observable((observer) => {
      this.http.put(this.hostUrl + `myrecipes/${this.userId}/${recipe.recipe_id}`, recipe, httpOptions).subscribe((res) => {
        observer.next(res);
      });
    })
  }
}
