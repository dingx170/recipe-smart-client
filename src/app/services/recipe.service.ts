import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {


  public get_api: string = "http://localhost:8080/recipes";
  public post_api: string ="http://localhost:8080/myrecipes/456";

  public testdata: any =     {
    "steps": [
        "Get all stuffs",
        "Mix them"
    ],
    "ingredients": [
        [
            10,
            1.5
        ],
        [
            2,
            2
        ],
        [
            3,
            90
        ]
    ],
    "restrictions": [
        "Soy"
    ],
    "recipe_tags": [],
    "name": "NEWNEWNEW",
    "member_id": 123,
    "date": "2021-02-06T08:00:00.000Z",
    "group": 2,
    "cost": 10.5,
    "photo": {
        "type": "Buffer",
        "data": []
    },
    "likes": 5,
    "meal_type": "Dinner",
    "feature_type": "MeatLover",
    "recipe_tag": [
        "Popular"
    ],
    "cuisine_type": "Indian",
    "recipe_id": 2,
    "unit_cost": 5.5
}


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
        this.http.get(this.get_api).subscribe((res:any) => {
        observer.next(res);
      });
    })

  }

  postNewRecipe() {

    const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

    return new Observable((observer) => {
      this.http.post(this.post_api, this.testdata, httpOptions).subscribe((res) => {
        observer.next(res);
      });
    })

  }
}
