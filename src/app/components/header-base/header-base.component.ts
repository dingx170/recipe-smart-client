import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-base',
  templateUrl: './header-base.component.html',
  styleUrls: ['./header-base.component.css']
})
export class HeaderBaseComponent implements OnInit {

  public userId = '123';
  
  constructor() { }

  ngOnInit(): void {
  }

}
