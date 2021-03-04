import { FoodAllergy } from '../enums/food-allergy.enum'

export interface IUser{

  user_name: string,
  password:string,
  email: string,
  photo?: any,
  restrictions: FoodAllergy[]

}
