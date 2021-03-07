import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IAuth } from '../interfaces/auth';
import { NormalResponse } from '../interfaces/INormalResponse';
import { ShareDataService } from './share-data.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private base_api:string = "http://localhost:8080";

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient,
              private shareDataService: ShareDataService) { }

  /**
   * Login service returns the user id as a temporarty token
   * @param auth username password combination
   *
   */
  login(auth: IAuth): Observable<NormalResponse>{
    let url = this.base_api + "/login";
    return this.http.post<NormalResponse>(url, auth, this.httpOptions).pipe(
      catchError(this.handleError<NormalResponse>('user login failed')
    ));
  }

  logOut():void{
    this.shareDataService.clearData();
  }

  /**
   * Handle the error and return a human readable message to delegating component
   * Return an empty IUser object to keep the app running.
   * @param operation
   * @param result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



}
