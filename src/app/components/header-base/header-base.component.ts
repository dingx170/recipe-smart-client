import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header-base',
  templateUrl: './header-base.component.html',
  styleUrls: ['./header-base.component.css']
})
export class HeaderBaseComponent implements OnInit {

  isLoggedIn: boolean = false;
  private userId: number;

  constructor(public authService: AuthService) {
    console.log("app.component.ts: " + this.isLoggedIn); 
    this.authService.getStatus().subscribe(res => {
      console.log("/status:" + res); 
      console.log("/status type:" + typeof(res));
      if(res){
        this.authService.getSession().subscribe(data => {
          if(data.user_id){
            this.isLoggedIn = true; 
          }
        })
      }
    }) 
    
  }

  ngOnInit(): void {
  }

  static setLoginStatus(loginStatus: boolean) {
    //this.isLoggedIn = loginStatus;
  }


}
