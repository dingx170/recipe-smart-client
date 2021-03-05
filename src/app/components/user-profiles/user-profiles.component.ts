import { Component, Input, OnInit } from '@angular/core';
import { FoodAllergy } from 'src/app/enums/food-allergy.enum';
import { IUser } from 'src/app/interfaces/IUser';
import { UserService} from '../../services/user.service'
import { ShareDataService} from '../../services/share-data.service'

@Component({
  selector: 'app-user-profiles',
  templateUrl: './user-profiles.component.html',
  styleUrls: ['./user-profiles.component.css']
})
export class UserProfilesComponent implements OnInit {

  @Input()
  user: IUser;

  private userid: number;

  logged_in: boolean = false;
  updated_profile: boolean = false;
  update_fail: boolean = false;

  allergy_list = Object.keys(FoodAllergy) as FoodAllergy[];



  constructor(
    private user_service: UserService,
    private share_service: ShareDataService
  ){ }

  ngOnInit(): void {
    this.userid  = this.share_service.getData("userid");
    console.log("userid " + this.userid)

    //every time initializing this component default logged in as false;
    this.logged_in = false;
    this.updated_profile = false;
    this.update_fail = false;
    // Will only display profiles after logged in. Otherwise display default content html.
    if(this.userid){
      this.user_service.getUserById(this.userid).subscribe(res => {
        if(res.ret_code == 0){
          this.user = res.user_obj;
          this.logged_in = true;
        }
      });
    }

  }
  /**
   * update user with the user object held within this component
   */
  update():void{
    if(this.userid){
      // response from the backend needs to be structured as loginRes
      this.user_service.updateUser(this.user, this.userid)
        .subscribe(res => {
            if(res.ret_code == 0){
              this.updated_profile = true;
            }
            else if(res.ret_code == -1){
              this.update_fail = true;
            }

        });
    }

  }

  /**
   * create user with the IUser object and update local cache in sharedata service
   */
  createUser(): void{
    this.user_service.addUser(this.user).subscribe(res => {
      if(res.ret_code == 1){
        this.share_service.setData("userid", res.userid);
      }
      else if(res.ret_code == 0){
        console.log(res.ret_msg);
      }
    });
  }

}
