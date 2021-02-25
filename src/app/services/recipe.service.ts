import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

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

    let api = "http://localhost:8080/recipes";

    return new Observable((observer) => {
        this.http.get(api).subscribe((res:any) => {
        observer.next(res);
      });
    })
  }
}
