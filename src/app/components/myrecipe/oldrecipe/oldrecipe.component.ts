import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RecipeService } from '../../../services/recipe.service'

@Component({
  selector: 'app-oldrecipe',
  templateUrl: './oldrecipe.component.html',
  styleUrls: ['./oldrecipe.component.css']
})
export class OldrecipeComponent implements OnInit {

  public myrecipes: any;
  public hostUrl: string;
  public userId: number;

  constructor(public recipeService: RecipeService,
              public authService: AuthService) { }

  ngOnInit(): void {
    this.hostUrl = this.recipeService.hostUrl;
    this.authService.getSession().subscribe(
      data =>{
          this.userId = data.user_id;
          console.log(JSON.stringify(data));
          this.getMyRecipes();
      }
    );
    
  }

  getMyRecipes() {
  
    var rxjsData = this.recipeService.getRecipesByMemberID(this.userId);

    rxjsData.subscribe((data) => {
      this.myrecipes = data;
    })    
  }

}
