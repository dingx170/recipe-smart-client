import { Component, OnInit } from '@angular/core';

import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  public allergies: string[] = [
    "Corn", "Egg", "Fish", "Meat", "Milk", "Peanut", "Shellfish", "Soy", "TreeNut", "Wheat", "FPIES"
  ]
  public cuisines: string[] = [
    "Chinese", "Mexican", "Italian", "Japanese", "Greek", "French", "Thai", "Spanish", "Indian", "Mediterranean"
  ]
  public features: string[] = [
    "MeatLover", "Vegetarian", "LowCarb", "Vegan"
  ]

  public recipes: any[] = [];

  public list: any; // test

  constructor(public recipe:RecipeService) { }

  ngOnInit(): void {

    this.recipes = this.recipe.getAllRecipes();
  }

  getRecipesTest() {

    var rxjsData = this.recipe.getRecipesTest();

    rxjsData.subscribe((data) => {
      
      this.list = data;
      console.log(this.list);
    })    
    
  }

  postNewRecipe() {

    var rxjsData = this.recipe.postNewRecipe();

    rxjsData.subscribe((data) => {
      console.log("--------posted--------")
      console.log(data);
    }) 
  }


}
