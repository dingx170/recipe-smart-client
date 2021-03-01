import { FoodAllergy } from '../enums/food-allergy.enum'
import { Cuisine } from '../enums/cuisine.enum'
import { Feature } from '../enums/feature.enum'
import { MealType } from '../enums/meal-type.enum'
import { RecipeTag } from '../enums/recipe-tag.enum'

export interface IRecipe {
    recipeId: number;
    name: string;
    memberId: number;
    date: Date;
    steps: [{step: string}],
    ingredients: [{name: string, unit: string, count: number}],
    group: number;
    cost: number;
    unitCost: number;
    photo: any;
    likes: number;
    mealType: MealType;
    cuisineType: Cuisine;
    featureType: Feature;
    foodAllergies: [FoodAllergy];
    recipeTags: [RecipeTag]
}
