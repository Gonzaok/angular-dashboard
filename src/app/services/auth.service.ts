import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

import { User } from 'app/models/user';


/**
 * Angular service to handle the authentication of the user
 * 
 * @export
 * @class AuthService
 */
@Injectable()
export class AuthService {

  // -------------------------------------------------------------------------
  // Properties
  // -------------------------------------------------------------------------

  private user: User;
  private storageUser: string = 'user';
  private _loggedUser: BehaviorSubject<any> = new BehaviorSubject<any>({});
  public loggedUser$: Observable<any> = this._loggedUser.asObservable();

  // -------------------------------------------------------------------------
  // Constructor
  // -------------------------------------------------------------------------

  constructor() { 
    this.user = new User({name: 'admin', password: 'admin'});
  }

  // -------------------------------------------------------------------------
  // Private Methods
  // -------------------------------------------------------------------------

  private authenticate(username: string, password: string){
     return (this.user.name === username) && (this.user.password === password)
  }

  // -------------------------------------------------------------------------
  // Public Methods
  // -------------------------------------------------------------------------

  public login(username: string) : Observable<any>{
    localStorage.setItem(this.storageUser, JSON.stringify({name: username}));
    this._loggedUser.next(true);
    return this.loggedUser$;
  }

  public islogged(){
    return JSON.parse(localStorage.getItem(this.storageUser))
  }

  public logout() {
      localStorage.removeItem(this.storageUser);
  }
  
}
