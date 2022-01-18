import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { EmployeeData } from './employyee.model';

@Injectable()
export class EmployeesService {

  Employees = [];
  constructor(private http:HttpClient) { }

  getEmp(){
    this.http.get('https://my-app-project-6a9e7-default-rtdb.firebaseio.com/emp-list.json')
    .pipe(map(resData=>{
      const list =[];
      for(const key in resData){
        if(resData.hasOwnProperty(key)){
          list.push({...resData[key], id:key});
        }
      }
      console.log(list);
      return list;
    }))
    .subscribe((res)=>{
     this.Employees = res;
    })
    return this.Employees;
  }
  addEmp(obj:EmployeeData):void{
    this.Employees.push(obj);
    console.log(this.Employees);
    this.http.post('https://my-app-project-6a9e7-default-rtdb.firebaseio.com/emp-list.json', obj)
    .subscribe((res)=>{
      console.log(res);
    })

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
