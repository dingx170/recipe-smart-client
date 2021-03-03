import { Component, Input, OnInit } from '@angular/core';
import { FoodAllergy } from 'src/app/enums/food-allergy.enum';
import { IUser } from 'src/app/interfaces/IUser';
import { UserService} from '../../services/user.service'
import { UserTag} from '../../enums/user-tag.enum'
import { ShareDataService} from '../../services/share-data.service'

@Component({
  selector: 'app-user-profiles',
  templateUrl: './user-profiles.component.html',
  styleUrls: ['./user-profiles.component.css']
})
export class UserProfilesComponent implements OnInit {

  @Input()
  user: IUser = {
    user_name: "zhangsan",
    password: "123",
    email: "1234@gmail.com",
    restrictions: [FoodAllergy.Corn, FoodAllergy.Egg],
    userTags: [UserTag.Expert, UserTag.Chef]

  };

  userid: number;

  allergy_list = Object.keys(FoodAllergy) as FoodAllergy[];


  constructor(
    private user_service: UserService,
    private share_service: ShareDataService
  ){ }

  ngOnInit(): void {
    this.userid  = this.share_service.getData("userid");
    // There might be issues when the data structure does not match the front end
    if(this.userid){
      this.user_service.getUserById(this.userid).subscribe(res => {
        this.user = res;
      });
    }

  }

  update():void{
    if(this.userid){
      // response from the backend needs to be structured as loginRes
      this.user_service.updateUser(this.user, this.userid)
        .subscribe(res => {
            console.log(res.ret_code)
            console.log(res.ret_msg);
        });
    }

  }

  createUser(user: IUser){
    this.user_service.addUser(user).subscribe();
  }





}
