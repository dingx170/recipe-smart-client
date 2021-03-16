import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/IUser'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private base_url:string = "http://localhost:8080/auth/user";

  private base_url:string = "/auth/user";

  constructor(private http: HttpClient) {
  }

  getSession(): Observable<IUser> {
    return this.http.get<IUser>(this.base_url);
  }
}
