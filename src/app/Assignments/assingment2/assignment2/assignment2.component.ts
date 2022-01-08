import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
  name: any;
  isShowButton = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() =>  this.showMyname(), 1200);
  }

  showMyname(): string{
    this.isShowButton = false
    return this.name = "Rama Gawas"
  }

  onSubmit():void{
    this.name = 'Hi,  Dipesh Chigulkar'
  }
}
