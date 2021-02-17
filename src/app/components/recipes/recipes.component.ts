import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  public recipes: any[] = [
    {name: "Supreme Steak", image: "recipe_1.jpg"},
    {name: "Potato Beef Tender", image: "recipe_2.jpg"},
    {name: "Avacado Gimbap", image: "recipe_5.jpg"},
    {name: "Garden Salad", image: "recipe_4.jpg"},
    {name: "Roast Salmon", image: "recipe_6.jpg"},
    {name: "Berry Sandwich", image: "recipe_7.jpg"},
    {name: "Avacado Gimbap", image: "recipe_5.jpg"},
    {name: "Supreme Steak", image: "recipe_1.jpg"},
    {name: "Potato Beef Tender", image: "recipe_2.jpg"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
