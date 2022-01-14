import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Assignment1Component } from '../../assingment1/assignment1/assignment1.component';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
 dataList: any;
 closeModal: any;
 constructor(public modalService: NgbModal) { }

  ngOnInit(): void {
    setTimeout(() =>  this.showData(), 5000);
  }

  getColor(){
     return 'green';
  }

  showData(){
  this.dataList = ['Cras justo odio','Dapibus ac facilisis in','Morbi leo risus','Porta ac consectetur ac','Vestibulum at eros']
  }
  openModal() {
    this.modalService.open(Assignment1Component, {backdrop: 'static',size: 'lg', keyboard: false, centered: true});
  }
}
