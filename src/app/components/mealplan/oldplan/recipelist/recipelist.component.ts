import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealplanService } from '../../../../services/mealplan.service';
import { IRecipe } from '../../../../interfaces/irecipe'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {

  public myrecipes: any[];

  public mealplanId: string;

  public userId: number;

  constructor(public recipeService: MealplanService, 
              public route: ActivatedRoute,
              public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getSession().subscribe(
      data =>{
        this.userId = data.user_id;
        console.log("Get response: " + JSON.stringify(data));
      }

    );
    this.mealplanId = this.route.snapshot.params['mealplanId'];
    this.getRecipeList();

  }

  getRecipeList() {
    var rxjsData = this.recipeService.getRecipeListByMealplanID(this.mealplanId, this.userId);
    rxjsData.subscribe((data) => {
      console.log(data);
      this.myrecipes = <any[]>data;
    })
  }

}
