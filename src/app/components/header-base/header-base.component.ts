import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-base',
  templateUrl: './header-base.component.html',
  styleUrls: ['./header-base.component.css']
})
export class HeaderBaseComponent implements OnInit {

  public static isLoggedIn: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  static setLoginStatus(loginStatus: boolean) {
    this.isLoggedIn = loginStatus;
  }


}
