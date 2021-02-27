import { Component, OnInit } from '@angular/core';
import { FoodAllergy } from '../../../enums/food-allergy.enum'
import { Cuisine } from '../../../enums/cuisine.enum'
import { Feature } from '../../../enums/feature.enum'
import { MealType } from '../../../enums/meal-type.enum'
import { RecipeTag } from '../../../enums/recipe-tag.enum'
import { IRecipe } from '../../../interfaces/irecipe'

@Component({
  selector: 'app-newrecipe',
  templateUrl: './newrecipe.component.html',
  styleUrls: ['./newrecipe.component.css']
})

export class NewrecipeComponent implements OnInit {

  public step_list:any[] = [
    {step: "weight 300g flour"},
    {step: "prepare one cup oil"},
    {step: "crack 2 eggs"},
  ];
  
  public ingredient_list:any[] = [
    {name: "flour", unit: "gram", count:300},
    {name: "oil", unit: "cup", count:1},
    {name: "egg", unit: "gram", count:150},
  ];

  public allergies = Object.keys(FoodAllergy);
  public cuisineTypes = Object.keys(Cuisine);
  public featureTypes = Object.keys(Feature);
  public mealTypes = Object.keys(MealType);



  public dateTime = new Date();

  public recipe: IRecipe = {
    recipeId: 0,
    name: '', 
    memberId: 1, 
    date: this.dateTime,
    steps: [''],
    ingredients: [[0, 0]],
    group: 0,
    cost: 0,
    unitCost: 0,
    photo: '',
    likes: 0,
    mealType: MealType.None,
    cuisineType: Cuisine.None,
    featureType: Feature.None,
    foodAllergies: [FoodAllergy.None],
    recipeTags: [RecipeTag.None]
  };

  

  public imagePath: string ="";
  public imgURL: any = "";
  public message: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  preview(files: any) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
    this.imgURL = reader.result; 
    }
  }

  onUpload() {
    // upload code goes here
  }

  createRecipe(info: any){
    console.log(info);
  }

  // addHoby() {
  //   var compiledeHTML = $compile("<div my-hobby></div>")($scope);
  //   $("#showHobbyfield").append(compiledeHTML);
  // }

}
