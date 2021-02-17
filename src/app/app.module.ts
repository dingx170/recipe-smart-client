import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdsComponent } from './components/ads/ads.component';
import { HeaderBaseComponent } from './components/header-base/header-base.component';
import { MealplanComponent } from './components/mealplan/mealplan.component';
import { NewplanComponent } from './components/mealplan/newplan/newplan.component';
import { OldplanComponent } from './components/mealplan/oldplan/oldplan.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    AdsComponent,
    HeaderBaseComponent,
    MealplanComponent,
    NewplanComponent,
    OldplanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
