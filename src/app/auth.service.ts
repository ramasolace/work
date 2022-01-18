import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, tap } from "rxjs";

import { UserData } from "./sign-in/user.model";
export interface User {
    userName: string;
    password: string;
  }

  export interface UserRes{
  idToken:	string	
  email:	string	
  expiresIn:	string	
  localId:	string	
  registered?:	boolean
  }
  @Injectable()
export class AuthService {
    constructor(
        private router: Router,
        private http:HttpClient
      ) {}
    get isLoggedIn() {
        return this.loggedIn.asObservable();
      }
    timeExpire :any;
    user = new BehaviorSubject<UserData>(null);
    private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
    login(user:User) {
        console.log(user)
         this.http.post<UserRes>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDTBlD_w5i814tBQmw2Tf6CrlMzT3vo7V0',
        {
          email: user.userName,
          password: user.password,
          returnSecureToken: true
        })
        .pipe(tap(resData=>{
          this.checkAuth(resData.email,resData.localId,resData.idToken,+resData.expiresIn,)
         }))
        .subscribe(res=>{
          console.log(res);
          if(res){
            this.loggedIn.next(true);
            this.router.navigate(['/assignment']);
          }
          else{
            this.router.navigate(['']);
          }
        })
      }

      signUp(user:User){
       return this.http.post<UserRes>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDTBlD_w5i814tBQmw2Tf6CrlMzT3vo7V0',
        {
          email: user.userName,
          password: user.password,
          returnSecureToken: true
        })
        .pipe(tap(resData=>{
         this.checkAuth(resData.email,resData.localId,resData.idToken,+resData.expiresIn,)
        }))
      }
    
      logout() {
        this.user.next(null);
        this.loggedIn.next(false);
        localStorage.removeItem('userData');
        this.router.navigate(['/login']);
        if(this.timeExpire){
          clearTimeout(this.timeExpire);
        }
        this.timeExpire = null;
      }


      checkAuth(email:string, userId:string, token:string, expiresIn:number){
        const expiredDate = new Date(new Date().getTime() + +expiresIn * 100);
        const user = new UserData(email,userId, token, expiredDate);
        this.user.next(user);
        //this.autoLogOut(expiresIn + 1000)
        localStorage.setItem('userData',JSON.stringify(user));
      }


      autoLogin(){
        const userData:{
          email: string,
          id: string,
           token: string,
          tokenExpirationDate: string
        } = JSON.parse(localStorage.getItem('userData'));
        if(!userData){
          return
        }
         const loadedUser = new UserData(userData.email,userData.id,userData.token,new Date(userData.tokenExpirationDate));
         if(loadedUser.token){
           this.user.next(loadedUser);
           const time = new Date(userData.tokenExpirationDate).getTime() - new Date().getTime()
           this.autoLogOut(time);
         }
      }

      autoLogOut(time:number){
       this.timeExpire = setTimeout(()=>{
          this.logout();
        }, time)
      }
}