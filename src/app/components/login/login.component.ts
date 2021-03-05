import { Component, Input, OnInit } from '@angular/core';
import { IAuth } from 'src/app/interfaces/auth';
import { SimpleResponse } from 'src/app/interfaces/ISimpleResponse';
import { LoginService } from '../../services/login.service'
import { ShareDataService } from '../../services/share-data.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

/**
 * This service send login request to backend and calls for storeage service
 * storage service is exposed for other component to use
 */
export class LoginComponent implements OnInit {

  @Input()
  auth: IAuth = {
    name: "test username",
    password: "test password"
  };

  login_response: SimpleResponse;

  constructor(private login_service: LoginService,
              private shared_service: ShareDataService) { }

  ngOnInit(): void {
  }

  login():void{

    this.login_service.login(this.auth).subscribe(
      res => {

        if(res.ret_code == 0){
          this.shared_service.setData("userid", res.userid);
          console.log(res.ret_msg);
        }
        this.login_response = res;
      }

    );
  }

}
