import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesService } from '../employees.service';
import { AuthService } from '../auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from '../interceptor.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ AuthService,EmployeesService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
})
export class CoreModule { }
