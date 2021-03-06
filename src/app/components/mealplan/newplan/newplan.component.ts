import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodAllergy } from '../../../enums/food-allergy.enum'
import { Cuisine } from '../../../enums/cuisine.enum'
import { Feature } from '../../../enums/feature.enum'
import { MealType } from '../../../enums/meal-type.enum'
import { IMealplan } from 'src/app/interfaces/imealplan';
import { IRecipe } from '../../../interfaces/irecipe'
import { MealplanService } from '../../../services/mealplan.service';
@Component({
  selector: 'app-newplan',
  templateUrl: './newplan.component.html',
  styleUrls: ['./newplan.component.css']
})
export class NewplanComponent implements OnInit {

  
  // public allergies: string[] = [
  //   "Corn", "Egg", "Fish", "Meat", "Milk", "Peanut", "Shellfish", "Soy", "TreeNut", "Wheat", "FPIES"
  // ]
  // public cuisines: string[] = [
  //   "-- Options --", "Chinese", "Mexican", "Italian", "Japanese", "Greek", "French", "Thai", "Spanish", "Indian", "Mediterranean"
  // ]
  // public features: string[] = [
  //   "-- Options --", "MeatLover", "Vegetarian", "LowCarb", "Vegan"
  // ]
  public allergies = Object.keys(FoodAllergy);
  public cuisineTypes = Object.keys(Cuisine);
  public featureTypes = Object.keys(Feature);
  public mealTypes = Object.keys(MealType);
  public groupSizes = [1, 2, 3, 4, 5];
  public budgets = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  public filter: any = {
    group: 0,
    budget: 0,
    meal_type: MealType.None,
    cuisine_type: Cuisine.None,
    feature_type: Feature.None,
    restrictions: [FoodAllergy.None]
  }

  public recipelist: any[] = []; 
  public gotrecipes: boolean;

  constructor(public recipeService: MealplanService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.gotrecipes = false;
    // this.recipelist = [{ name: "Hot Pepper and Onion Pizza"},
    //                     { name: "Beef Gyros"},]
  }

  getRecipesForCustomized(){
    var rxjsData = this.recipeService.getRecipesByFilter(this.filter.budget,this.filter.group);
    rxjsData.subscribe((data) => {
      console.log(data);
      this.recipelist = <IRecipe[]>data;
      this.gotrecipes = true;
    }) 
  }
}
