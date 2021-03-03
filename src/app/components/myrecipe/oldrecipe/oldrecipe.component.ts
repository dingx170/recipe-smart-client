import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../services/recipe.service'

@Component({
  selector: 'app-oldrecipe',
  templateUrl: './oldrecipe.component.html',
  styleUrls: ['./oldrecipe.component.css']
})
export class OldrecipeComponent implements OnInit {

  public myrecipes: any;
  public userId: string;
  public hostUrl: string;

  constructor(public recipeService: RecipeService) { }

  ngOnInit(): void {
    this.userId = this.recipeService.userId;
    this.hostUrl = this.recipeService.hostUrl;
    this.getMyRecipes();
  }

  getMyRecipes() {
  
    var rxjsData = this.recipeService.getRecipesByMemberID(this.userId);

    rxjsData.subscribe((data) => {
      this.myrecipes = data;
    })    
  }

}
