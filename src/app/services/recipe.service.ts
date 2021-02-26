import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IRecipe } from '../interfaces/irecipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  hostUrl: string = 'http://localhost:8080/';
  
  constructor(public http:HttpClient) { }

  getAllRecipes() {

    return [
      {name: "Supreme Steak", image: "recipe_1.jpg"},
      {name: "Potato Beef Tender", image: "recipe_2.jpg"},
      {name: "Avacado Gimbap", image: "recipe_5.jpg"},
      {name: "Garden Salad", image: "recipe_4.jpg"},
      {name: "Roast Salmon", image: "recipe_6.jpg"},
      {name: "Berry Sandwich", image: "recipe_7.jpg"},
      {name: "Avacado Gimbap", image: "recipe_5.jpg"},
      {name: "Supreme Steak", image: "recipe_1.jpg"},
      {name: "Potato Beef Tender", image: "recipe_2.jpg"}
    ];
  }

  getRecipesTest() {

    return new Observable((observer) => {
        this.http.get<IRecipe[]>(this.hostUrl + 'recipes').subscribe((res:any) => {
        observer.next(res);
      });
    })

  }

  postNewRecipe() {

    let testdata: any = []
    const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

    return new Observable((observer) => {
      this.http.post(this.hostUrl + 'myrecipes/456', testdata, httpOptions).subscribe((res) => {
        observer.next(res);
      });
    })

  }
}
