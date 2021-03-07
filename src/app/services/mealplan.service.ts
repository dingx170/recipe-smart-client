import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IMealplan } from '../interfaces/imealplan';
import { IRecipe } from '../interfaces/irecipe';

@Injectable({
  providedIn: 'root'
})
export class MealplanService {
  hostUrl: string = 'http://localhost:8080/';
  userId: string = '123';

  constructor(public http:HttpClient) { }

  getAllMealPlansForUserTest(){
    return [
      {date: "02/15/2021 05:00pm"},
      {date: "01/21/2021 03:21pm"},
      {date: "01/15/2021 10:05am"},
      {date: "12/20/2021 07:10pm"},
      {date: "12/11/2021 06:16pm"},
      {date: "11/07/2021 03:00pm"},
      {date: "10/05/2021 05:00pm"},
      {date: "10/01/2021 06:16pm"},
      {date: "09/15/2021 05:00pm"},
      {date: "09/21/2021 03:21pm"}
    ];
  }

  getAllMealPlansForUser(member_id: number){

    return new Observable((observer) => {
      this.http.get<IMealplan[]>(this.hostUrl + 'mealplan/' + member_id).subscribe((res:any) =>{
      observer.next(res);
      });

    })

  }
  getRecipesByFilter(budget: number, group: number){
    //const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

    return new Observable((observer) => {
      this.http.get<IRecipe[]>(this.hostUrl + 'mealplan/' + this.userId + `/customization/getrecipelist?budget=${budget}&group=${group}`).subscribe((res:any) => {
        observer.next(res);
      });
    })
  }

  getRecipeListByMealplanID(mealplanId: string) {
    return new Observable((observer) => {
      this.http.get<IRecipe[]>(this.hostUrl + 'mealplan/' + this.userId + '/plans/' + mealplanId + '/recipelist').subscribe((res:any) => {
        observer.next(res);
      });
    })
  }

  getShoppingListByMealplanID(mealplanId: string) {
    return new Observable((observer) => {
      this.http.get<any[]>(this.hostUrl + 'mealplan/' + this.userId + '/plans/' + mealplanId + '/shoppinglist').subscribe((res:any) => {
        observer.next(res);
      });
    })
  }

}
