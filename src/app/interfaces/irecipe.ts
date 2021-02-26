import { FoodAllergy } from '../enums/food-allergy.enum'
import { Cuisine } from '../enums/cuisine.enum'
import { Feature } from '../enums/feature.enum'
import { MealType } from '../enums/meal-type.enum'
import { RecipeTag } from '../enums/recipe-tag.enum'

export interface IRecipe {
    recipe_id: Number,
    name: String;
    member_id: Number;
    date: Date;
    steps: [String];
    ingredients: [[Number, Number]];
    group: Number;
    cost: Number;
    unit_cost: Number,
    photo: Buffer;
    likes: Number;
    meal_type: MealType;
    cuisine_type: Cuisine;
    feature_type: Feature;
    restrictions: [FoodAllergy];
    recipe_tags: [RecipeTag];
}
