import { FoodAllergy } from '../enums/food-allergy.enum'

export interface IUser{

  user_id:number,
  name: string,
  password:string,
  email: string,
  photo?: any,
  ssoId: string,
  restrictions: FoodAllergy[]

}
