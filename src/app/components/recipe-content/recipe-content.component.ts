import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-content',
  templateUrl: './recipe-content.component.html',
  styleUrls: ['./recipe-content.component.css']
})
export class RecipeContentComponent implements OnInit {

  public recipe: any = {
    name: "Fantastic Fish Tacos",
    username: "Taste of Home",
    image: "recipe_11.jpg",
    likes: 5,
    group: 4,
    meal_type: "Lunch",
    cuisine_type: "Mexican",
    feature_type: "Healthy",
    allergy: "Fish",
    cost: 20,
    ingredients: [
      ["mayonnaise", "1/2 cup"],
      ["lime juice", "1 tablespoon"],
      ["milk", "2 teaspoons"],
      ["egg", "1"],
      ["water", "1 teaspoon"],
      ["dry bread crumbs", "1/3 cup"],
      ["salt-free lemon-pepper seasoning", "2 tablespoons"],
      ["cod fillet", "1 pound"],
      ["corn tortillas", "4"],
      ["coleslaw mix", "1 cup"],
      ["tomatoes", "2"],
      ["shredded cheese", "1 cup"],
      ["cilantro", "1 tablespoon"]
    ],
    steps: [
      "For sauce, in a small bowl, mix mayonnaise, lime juice and milk; refrigerate until serving.", 
      "In a shallow bowl, whisk together egg and water. In another shallow bowl, toss bread crumbs with lemon pepper. Dip fish in egg mixture, then in crumb mixture, patting to help coating adhere.",
      "Place a large nonstick skillet over medium-high heat. Add fish; cook 2-4 minutes per side or until golden brown and fish just begins to flake easily with a fork. Serve in tortillas with toppings and sauce."
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
