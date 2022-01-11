import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuList = ['Employee List', 'Department List', 'Other']
  asignments = ['assignment1', 'assignment2', 'assignment3',"assignment4", "assignment5"];
  tempateName = 'assignment1'
  active = 1;
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
  onClick(value:string){
    console.log(value);
  }

}
