import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-base',
  templateUrl: './header-base.component.html',
  styleUrls: ['./header-base.component.css']
})
export class HeaderBaseComponent implements OnInit {

  public isLogined: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  setLoginStatus(isLogined: boolean) {
    this.isLogined = isLogined;
  }


}
