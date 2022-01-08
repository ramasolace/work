import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuList = ['Employee List', 'Department List', 'Other']
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
