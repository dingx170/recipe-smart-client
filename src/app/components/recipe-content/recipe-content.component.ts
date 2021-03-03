import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-content',
  templateUrl: './recipe-content.component.html',
  styleUrls: ['./recipe-content.component.css']
})
export class RecipeContentComponent implements OnInit {

  public recipe: any = {
    name: "",
    image: "",
    likes: 0,
    group: 0
  }

  constructor(public route: ActivatedRoute, public recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe((value) => {
      this.getRecipeContent(value.recipeId);
    })
  }

  getRecipeContent(recipeId: string) {
    var rxjsData = this.recipeService.getRecipeByID(recipeId);
    rxjsData.subscribe((data) => {
      this.recipe = data;
      console.log(data);
    })    
  }

}
