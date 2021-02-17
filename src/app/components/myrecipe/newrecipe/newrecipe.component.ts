import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newrecipe',
  templateUrl: './newrecipe.component.html',
  styleUrls: ['./newrecipe.component.css']
})
export class NewrecipeComponent implements OnInit {

  public step_list:any[] = [
    {step: "weight 300g flour"},
    {step: "prepare one cup oil"},
    {step: "crack 2 eggs"},
  ];

  public ingredient_list:any[] = [
    {name: "flour", unit: "gram", count:300},
    {name: "oil", unit: "cup", count:1},
    {name: "egg", unit: "gram", count:150},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
