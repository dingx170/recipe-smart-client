import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oldrecipe',
  templateUrl: './oldrecipe.component.html',
  styleUrls: ['./oldrecipe.component.css']
})
export class OldrecipeComponent implements OnInit {

  public myrecipes: any[] = [
    { name: "Hot Pepper and Onion Pizza",
      image: "recipe_9.jpg"
    },
    { name: "Pancakes",
      image: "recipe_10.jpg"
    },
    { name: "Healthy Breakfast",
    image: "recipe_7.jpg"
    },
    { name: "Beef Gyros",
      image: "recipe_12.jpg"
    },
    { name: "Broccoli & Beef Stirfry",
     image: "recipe_13.jpg"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
