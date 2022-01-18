import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs/internal/Observable";
import { map, take } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate{
    constructor(private authService: AuthService, private router:Router){}
   
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean|UrlTree| Promise<boolean|UrlTree>| Observable<boolean|UrlTree>{
    return this.authService.user.pipe(take(1),map( user =>{
      const auth = !!user;
      if(auth){
        return true;
      }
      return this.router.createUrlTree(['/login']);
    }))
  }
}