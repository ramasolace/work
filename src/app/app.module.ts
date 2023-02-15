import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { Assignment1Component } from './Assignments/assingment1/assignment1/assignment1.component';
import { Assignment2Component } from './Assignments/assingment2/assignment2/assignment2.component';
import { Assignment3Component } from './Assignments/assingment3/assignment3/assignment3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { EmployeeListComponent } from './employeeList/employee-list/employee-list.component';
import { GameControlComponent } from './game-control/game-control.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { NgbAlertModule,  NgbModule,  NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { HelpDeskComponent } from './help-desk/help-desk.component';
import { GroupAssignmentComponent } from './Assignments/group-assignment/group-assignment.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { IconsModule } from './icons/icons.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule, } from '@angular/common/http';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { AlertComponent } from './alert/alert.component';
import { CoreModule } from './core/core.module';
import { CommonModule } from '@angular/common';
import { HomeLayoutComponent } from './header/home-layout/home-layout.component';
import { CartListComponentComponent } from './shopping/cart-list/cart-list-component/cart-list-component.component';
import { CategoryComponentComponent } from './shopping/cart-list/cart-list-component/category/category-component/category-component.component';
import { ProductListComponentComponent } from './shopping/cart-list/cart-list-component/product-lis/product-list-component/product-list-component.component';
import { CartServiceService } from './shopping/services/cart-service.service';
import { ProductServiceService } from './shopping/services/product-service.service';
import { MainViewComponent } from './shopping/main/main-view/main-view.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    Assignment1Component,
    Assignment2Component,
    Assignment3Component,
    SidebarComponent,
    EmployeeListComponent,
    GameControlComponent,
    EvenComponent,
    OddComponent,
    NewEmployeeComponent,
    DepartmentListComponent,
    AddDepartmentComponent,
    HelpDeskComponent,
    GroupAssignmentComponent,
    PageNotFoundComponent,
    HeaderComponent,
    SignInComponent,
    HomeLayoutComponent,
    LoginLayoutComponent,
    RegisterComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    CartListComponentComponent,
    CategoryComponentComponent,
    ProductListComponentComponent,
    MainViewComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
    IconsModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [ CartServiceService,
    ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
