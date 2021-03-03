import { Component, Input, OnInit } from '@angular/core';
import { IAuth } from 'src/app/interfaces/auth';
import { LoginRes } from 'src/app/interfaces/loginRes';
import { LoginService } from '../../services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  auth: IAuth = {
    username: "test username",
    password: "test password"
  };

  current_userid: number;
  login_response: LoginRes;

  constructor(private login_service: LoginService) { }

  ngOnInit(): void {
    this.auth.username = "test username";
    this.auth.password = "test password";
  }

  login():void{
    console.log(this.auth.username);
    console.log(this.auth.password);
    this.login_service.login(this.auth).subscribe(
      res => {

        if(res.ret_code == 0){
          this.current_userid = res.userid;
          console.log(res.ret_msg);
        }
        this.login_response = res;
      }

    );
  }

}
