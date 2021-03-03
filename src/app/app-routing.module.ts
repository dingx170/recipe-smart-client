import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './components/recipes/recipes.component'
import { RecipeContentComponent } from './components/recipe-content/recipe-content.component'

import { MealplanComponent } from './components/mealplan/mealplan.component'
import { NewplanComponent } from './components/mealplan/newplan/newplan.component'
import { OldplanComponent } from './components/mealplan/oldplan/oldplan.component'
import { RecipelistComponent } from './components/mealplan/recipelist/recipelist.component'
import { ShoppinglistComponent } from './components/mealplan/shoppinglist/shoppinglist.component'

import { UserProfilesComponent } from './components/user-profiles/user-profiles.component'
import { SignupComponent } from './components/signup/signup.component'
import { LoginComponent } from './components/login/login.component'

import { MyrecipeComponent } from './components/myrecipe/myrecipe.component'
import { NewrecipeComponent } from './components/myrecipe/newrecipe/newrecipe.component'
import { OldrecipeComponent } from './components/myrecipe/oldrecipe/oldrecipe.component'


const routes: Routes = [
  {path: 'recipes', component: RecipesComponent},
  {path: 'recipes/:recipeId', component: RecipeContentComponent, data: {isMember: false}},
  {path: 'myprofile', component: UserProfilesComponent},
  {path: 'sign-up', component:SignupComponent},
  {path: 'login', component:LoginComponent},
  {
    path: 'mealplan', component: MealplanComponent,
    children: [
      {path: 'newplan', component: NewplanComponent},
      {path: 'history', component: OldplanComponent},
      {path: ':id/shoppinglist', component: ShoppinglistComponent},
      {path: ':id/recipelist', component: RecipelistComponent},
      {path: '**', redirectTo: 'newplan'}
    ]  
  },
  {
    path: 'myrecipe/:userId', component: MyrecipeComponent,
    children: [
      {path: 'newrecipe', component: NewrecipeComponent, data: {isUpdate: false}},
      {path: 'recipes', component: OldrecipeComponent},
      {path: 'recipes/:recipeId', component: RecipeContentComponent, data: {isMember: true}},
      {path: 'recipes/:recipeId/edit', component: NewrecipeComponent, data: {isUpdate: true}},
      {path: '**', redirectTo: 'recipes'}
    ]  
  },
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
