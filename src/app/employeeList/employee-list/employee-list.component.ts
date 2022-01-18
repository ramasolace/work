import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeesService } from 'src/app/employees.service';
import { NewEmployeeComponent } from 'src/app/new-employee/new-employee.component';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  [x: string]: any;
  @ViewChild('newEmployee') newEmployee: NewEmployeeComponent;
    Employees;
    formAction = 'add';
    index;
  constructor(private service: EmployeesService) {

   }

  ngOnInit(): void {
    this.Employees = this.service.getEmp();
    console.log(this.Employees);
  }
  displayStyle = "none";
  
  openPopup(data) {
    this.formAction ='add'
     this.newEmployee.profileForm.reset();
    console.log(data);
    this.displayStyle = "block";
  }
  onSubmit(){
    if(this.newEmployee.profileForm.valid){
      const obj =this.newEmployee.profileForm.value;
      const payload = obj;
      payload.employeeCode = "E";
      console.log(payload);
      this.formAction === 'add'?this.service.addEmp(payload):this.service.editEmp(this.index,payload);
      this.newEmployee.profileForm.reset();
      this.displayStyle = "none";

    }
   
  }
  openEdit(i,data){
    this.index = i;
    this.formAction = 'edit'
    this.newEmployee.profileForm.patchValue(data);
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  delete(i){
    this.service.delete(i);
  }
}


