import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealplanService } from '../../../../services/mealplan.service';
import { IIngredientList } from '../../../../interfaces/iingredientlist'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {

  public ingredient_list: IIngredientList[];

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
        console.log("user " + this.userId + " getting shoppinglist");
        this.mealplanId = this.route.snapshot.params['mealplanId'];
        this.getShoppingList();
      }

    );

    
  }

  getShoppingList() {
    var rxjsData = this.recipeService.getShoppingListByMealplanID(this.mealplanId, this.userId);
    rxjsData.subscribe((data: any) => {
      this.ingredient_list = <IIngredientList[]>(data.shopping_list);
    })
  }

  removeItem(i: number) {
    this.ingredient_list.splice(i, 1);
  }

  addItem() {
    this.ingredient_list.push({ name: '', unit: '', count: 0 });
  }

}
