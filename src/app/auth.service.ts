import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
export interface User {
    userName: string;
    password: string;
  }
  @Injectable()
export class AuthService {
    constructor(
        private router: Router
      ) {}
    get isLoggedIn() {
        return this.loggedIn.asObservable();
      }
    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    login(user:User) {
        console.log(user)
        if (user.userName === 'admin' && user.password === 'admin008' ) {
          this.loggedIn.next(true);
          this.router.navigate(['/assignment']);
        }
      }
    
      logout() {
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
      }
}