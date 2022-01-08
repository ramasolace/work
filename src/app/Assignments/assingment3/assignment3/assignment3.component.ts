import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
 dataList: any;
 constructor() { }

  ngOnInit(): void {
    setTimeout(() =>  this.showData(), 5000);
  }

  getColor(){
     return 'green';
  }

  showData(){
  this.dataList = ['Cras justo odio','Dapibus ac facilisis in','Morbi leo risus','Porta ac consectetur ac','Vestibulum at eros']
  }

}
