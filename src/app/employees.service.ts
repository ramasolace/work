import { Injectable } from '@angular/core';
import { EmployeeData } from './employyee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  Employees = [
    {
      designation :"Developer",
      firstName:"Romin",
      lastName:"Irani",
      employeeCode:"E1",
      phone:"408-1234567",
      email:"romin.k.irani@gmail.com"
    },
    {
      designation :"Developer",
      firstName:"Romin",
      lastName:"Irani",
      employeeCode:"E2",
      phone:"408-1234567",
      email:"romin.k.irani@gmail.com"
    },
    {
      designation :"Developer",
      firstName:"Romin",
      lastName:"Irani",
      employeeCode:"E3",
      phone:"408-1234567",
      email:"romin.k.irani@gmail.com"
    }
    ];
  constructor() { }

  getEmp(){
    return this.Employees;
  }
  addEmp(obj:EmployeeData):void{
    this.Employees.push(obj);
    console.log(this.Employees);

  }
  editEmp(index,obj:EmployeeData):void{
    console.log(obj);
    console.log(index);
    this.Employees[index] = obj;
  }

  delete(i):void{
    console.log(i);
  this.Employees.splice(i,1);
  console.log(this.Employees);
  }
}
