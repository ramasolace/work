import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupAssignmentComponent } from './Assignments/group-assignment/group-assignment.component';
import { AuthGuard } from './auth-gaurd.service';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employeeList/employee-list/employee-list.component';
import { HelpDeskComponent } from './help-desk/help-desk.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

 const routes: Routes = [
  { path: 'emp-list', canActivate:[AuthGuard], component: EmployeeListComponent },
  { path: 'dep-list', canActivate:[AuthGuard], component: DepartmentListComponent },
  { path:'assignment', component: GroupAssignmentComponent},
  { path: 'help', component: HelpDeskComponent },
  { path: 'not-found', component: PageNotFoundComponent, data: {msg:'Page not found!'} },
  { path: '**', redirectTo:'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
