import { Component, OnInit } from '@angular/core';
import { FoodAllergy } from '../../../enums/food-allergy.enum'
import { Cuisine } from '../../../enums/cuisine.enum'
import { Feature } from '../../../enums/feature.enum'
import { MealType } from '../../../enums/meal-type.enum'

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

  public allergies = Object.values(FoodAllergy).filter(e => typeof(e) == "string");
  public cuisines = Object.values(Cuisine).filter(e => typeof(e) == "string");
  public features = Object.values(Feature).filter(e => typeof(e) == "string");
  public mealTypes = Object.values(MealType).filter(e => typeof(e) == "string");


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

}
