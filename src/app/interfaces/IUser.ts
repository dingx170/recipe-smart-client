import { FoodAllergy } from '../enums/food-allergy.enum'
import { UserTag } from '../enums/user-tag.enum'

export interface IUser{

  user_name: string,
  password:string,
  email: string,
  photo?: any,
  restrictions: FoodAllergy[],
  userTags: UserTag[]

}
