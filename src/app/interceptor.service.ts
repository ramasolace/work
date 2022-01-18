import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, Observable, take } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private authService:AuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.authService.user.pipe(take(1),
        exhaustMap(res => {
            if(!res){
                return next.handle(req);
            }
            const mofifyReq =  req.clone(
                {
                    params: new HttpParams().set('auth', res.token)
                }
            )
            return next.handle(mofifyReq);
        }))
    }
}