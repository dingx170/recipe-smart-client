import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

  public myrecipes: any[] = [
    { name: "Hot Pepper and Onion Pizza",
      image: "recipe_9.jpg"
    },
    { name: "Beef Gyros",
      image: "recipe_12.jpg"
    },
    { name: "Pancakes",
      image: "recipe_10.jpg"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
