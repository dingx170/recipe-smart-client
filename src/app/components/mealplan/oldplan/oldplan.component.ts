import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oldplan',
  templateUrl: './oldplan.component.html',
  styleUrls: ['./oldplan.component.css']
})
export class OldplanComponent implements OnInit {

  public recipe_list:any[] = [
    {time: "02/15/2021 05:00pm"},
    {time: "01/21/2021 03:21pm"},
    {time: "01/15/2021 10:05am"},
    {time: "12/20/2021 07:10pm"},
    {time: "12/11/2021 06:16pm"},
    {time: "11/07/2021 03:00pm"},
    {time: "10/05/2021 05:00pm"},
    {time: "10/01/2021 06:16pm"},
    {time: "09/15/2021 05:00pm"},
    {time: "09/21/2021 03:21pm"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
