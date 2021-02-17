import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {

  public ingredient_list:any[] = [
    {name: "flour", unit: "gram", count:300},
    {name: "oil", unit: "cup", count:1},
    {name: "egg", unit: "gram", count:150},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
