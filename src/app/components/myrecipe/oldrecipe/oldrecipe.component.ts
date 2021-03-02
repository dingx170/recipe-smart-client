import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../services/recipe.service'

@Component({
  selector: 'app-oldrecipe',
  templateUrl: './oldrecipe.component.html',
  styleUrls: ['./oldrecipe.component.css']
})
export class OldrecipeComponent implements OnInit {

  public myrecipes: any;
  public memberId = "1";

  constructor(public recipeService: RecipeService) { }

  ngOnInit(): void {
    this.getMyRecipes();
  }

  getMyRecipes() {
  
    var rxjsData = this.recipeService.getRecipesByMemberID(this.memberId);

    rxjsData.subscribe((data) => {
      this.myrecipes = data;
    })    
  }

}
