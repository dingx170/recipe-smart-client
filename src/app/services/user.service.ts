import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { IUser } from '../interfaces/IUser'
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private base_api:string = "http://localhost:8080"
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private userId: number= 1001;


  constructor(private http:HttpClient ) {}

  /**
   * Take the id from the delegating component
   * create a http get request with the id as param
   * send it to the backend and wait for the response in a async way
   * @param id
   */
  getUserById(id: number): Observable<IUser>{
    const url = `${this.base_api}/${id}`;
    return this.http.get<IUser>(url).pipe(
      catchError(this.handleError<IUser>(`getUserById id = ${id}`))
    );
  }

  /**
   * Update User by given id
   * @param user
   * @param id
   */
  updateUser(user: IUser, id: number): Observable<any>{
    let url:string = `${this.base_api}/${id}`;
    return this.http.put(url, user, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /**
   * Add user with the given User object from the delegating component
   * @param user
   */
  addUser(user: IUser): Observable<IUser>{
    return this.http.post<IUser>(this.base_api, user, this.httpOptions).pipe(
      catchError(this.handleError<any>('add Hero'))
    );
  }

  /**
   * getter for the hard coded user id
   */
  getMyUserId():number{
    return this.userId;
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

