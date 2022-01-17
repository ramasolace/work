import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupAssignmentComponent } from './Assignments/group-assignment/group-assignment.component';
import { AuthGuard } from './auth-gaurd.service';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employeeList/employee-list/employee-list.component';
import { HelpDeskComponent } from './help-desk/help-desk.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';

//  const routes: Routes = [
//   { path: 'emp-list', component: EmployeeListComponent },
//   { path: 'dep-list', component: DepartmentListComponent },
//   { path:'assignment', component: GroupAssignmentComponent},
//   { path: 'help', component: HelpDeskComponent },
//   { path:'login', component:SignInComponent},
//   { path:'main', component:HomeLayoutComponent},
//   {path:'', component: SignInComponent,},
//   { path: 'not-found', component: PageNotFoundComponent, data: {msg:'Page not found!'} },
//   { path: '**', redirectTo:'not-found'}
// ];
const routes: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: HelpDeskComponent
      },
      { path: 'emp-list', component: EmployeeListComponent },
        { path: 'dep-list', component: DepartmentListComponent },
        { path:'assignment', component: GroupAssignmentComponent},
        { path: 'help', component: HelpDeskComponent },
    ]
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: SignInComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
