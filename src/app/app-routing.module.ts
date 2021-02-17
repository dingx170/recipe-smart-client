import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './components/recipes/recipes.component'
import { MealplanComponent } from './components/mealplan/mealplan.component'
import { NewplanComponent } from './components/mealplan/newplan/newplan.component'
import { OldplanComponent } from './components/mealplan/oldplan/oldplan.component'
import { UserProfilesComponent } from './components/user-profiles/user-profiles.component'
import { SignupComponent } from './components/signup/signup.component'
import { LoginComponent } from './components/login/login.component'

const routes: Routes = [
  {path: 'home', component: RecipesComponent},
  {
    path: 'mealplan', component: MealplanComponent,
    children: [
      {path: 'newplan', component: NewplanComponent},
      {path: 'history', component: OldplanComponent},
      {path: '**', redirectTo: 'newplan'}
    ]  
  },
  { path: 'user-profile', component: UserProfilesComponent},
  { path: 'sign-up', component:SignupComponent},
  { path: 'login', component:LoginComponent},
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
