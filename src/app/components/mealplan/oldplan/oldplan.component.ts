import { Component, OnInit } from '@angular/core';
import { IMealplan } from 'src/app/interfaces/imealplan';
import { AuthService } from 'src/app/services/auth.service';

import { MealplanService } from '../../../services/mealplan.service';

@Component({
  selector: 'app-oldplan',
  templateUrl: './oldplan.component.html',
  styleUrls: ['./oldplan.component.css']
})
export class OldplanComponent implements OnInit {

  public mealplans: IMealplan[] = [];
  public userId: number;

  
  constructor(public mealplan:MealplanService, public authService: AuthService){}


  ngOnInit(): void {
    console.log(this.userId + " init history");
    this.authService.getSession().subscribe(
      data =>{
        this.userId = data.user_id;
        console.log("Get response: " + JSON.stringify(data));
        console.log("this is my user id: " + this.userId);

        this.mealplan.getAllMealPlansForUser(this.userId)
          .subscribe((result)=>{
            console.log(result);
            this.mealplans = <IMealplan[]>result;
            console.log(this.mealplans);
        })
      }

    );
  }

}
