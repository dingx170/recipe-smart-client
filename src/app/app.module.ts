import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdsComponent } from './components/ads/ads.component';
import { HeaderBaseComponent } from './components/header-base/header-base.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    AdsComponent,
    HeaderBaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
