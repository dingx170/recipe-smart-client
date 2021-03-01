import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IRecipe } from '../interfaces/irecipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  hostUrl: string = 'http://localhost:8080/';
  userId: string = '123';
  
  constructor(public http:HttpClient) { }

  getAllRecipes() {
    return new Observable((observer) => {
      this.http.get<IRecipe[]>(this.hostUrl + 'recipes').subscribe((res:any) => {
        observer.next(res);
      });
    })
  }

  postNewRecipe(testdata: any ) {
    const httpOptions = {headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

    return new Observable((observer) => {
      this.http.post(this.hostUrl + `myrecipes/${this.userId}`, testdata, httpOptions).subscribe((res) => {
        observer.next(res);
      });
    })

  }
}
