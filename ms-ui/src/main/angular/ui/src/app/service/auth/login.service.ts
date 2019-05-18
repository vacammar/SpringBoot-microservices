import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../model/User";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  cachedUser: User;

  constructor(private http: HttpClient) { }

  /**
   * Login function, return user if
   * authentication is ok else null.
   *
   * @param user
   * @return User
   */
  login(user: User): Observable<User> {
    const url = 'http://localhost:8084/recipe-security/api/v1/security/auth';
    return this.http.post<User>(url, user);
  }

  /**
   * Check if user is logged.
   *
   * @return boolean
   */
  isLogged(): boolean {
    if(localStorage.getItem('user')) {
      return true;
    }
    return false;
  }

  /**
   * Remove logged user from
   * local storage.
   *
   * @return void
   */
  removeLoggedUser(): void{
    localStorage.removeItem('user');
    this.cachedUser = undefined;
  }

  /**
   * Evict user cache.
   *
   * @param user
   */
  cacheLoggedUser(user: User): void {
    this.cachedUser = user;
  }

  /**
   * Get cached user.
   *
   * @return User
   */
  getCahcedUser(): User {
    return this.cachedUser;
  }

}
