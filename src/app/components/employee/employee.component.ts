import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  actualNumber = 0
  ngOnInit(): void {
  }

  getInterval(number: any){
    console.log(number);
    this.actualNumber = number;
    if(number === 0){
      this.oddNumbers = [];
      this.evenNumbers = []
    }else{
      (number % 2 === 0)? this.evenNumbers.push(number): this.oddNumbers.push(number);
    }
    
  }

}
