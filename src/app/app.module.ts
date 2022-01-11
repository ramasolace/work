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
import {NgbActiveModal, NgbAlertModule,  NgbModule,  NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { NewEmployeeComponent } from './new-employee/new-employee.component';

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
    NewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule ,
    NgbPaginationModule, 
    NgbAlertModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
