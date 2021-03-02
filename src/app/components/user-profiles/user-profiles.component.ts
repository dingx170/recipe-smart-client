import { Component, Input, OnInit } from '@angular/core';
import { FoodAllergy } from 'src/app/enums/food-allergy.enum';
import { IUser } from 'src/app/interfaces/IUser';
import { UserService} from '../../services/user.service'
import { UserTag} from '../../enums/user-tag.enum'

@Component({
  selector: 'app-user-profiles',
  templateUrl: './user-profiles.component.html',
  styleUrls: ['./user-profiles.component.css']
})
export class UserProfilesComponent implements OnInit {

  user: IUser = {
    user_name: "zhangsan",
    password: "123",
    email: "1234@gmail.com",
    restrictions: [FoodAllergy.Corn, FoodAllergy.Egg],
    userTags: [UserTag.Expert, UserTag.Chef]

  };

  allergy_list = Object.keys(FoodAllergy) as FoodAllergy[];
  current_userid: number;


  constructor(
    private user_service: UserService
  ){ }

  ngOnInit(): void {
    this.current_userid = this.user_service.getMyUserId();
    this.user_service.getUserById(this.current_userid)
    .subscribe(user => this.user = user);

  }

  update():void{
    this.user_service.updateUser(this.user, this.current_userid)
    .subscribe();
  }

  createUser(user: IUser){
    this.user_service.addUser(user).subscribe();
  }





}
