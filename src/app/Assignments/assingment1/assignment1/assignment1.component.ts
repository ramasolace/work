import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {
  dateObj: any
  interval: any;
  hours: any;
  startDate = (new Date()).setHours(10, 0, 0, 0);
  endDate = (new Date()).setHours(20, 0, 0, 0);
  totalHours = [
    {
      id: 1,
      value: '10',
      status: 'false'
    },
    {
      id: 2,
      value: '9',
      status: 'false'
    },
    {
      id: 3,
      value: '8',
      status: 'false'
    },
    {
      id: 4,
      value: '7',
      status: 'false'
    },
    {
      id: 5,
      value: '6',
      status: 'false'
    },
    {
      id: 6,
      value: '5',
      status: 'false'
    },
    {
      id: 7,
      value: '4',
      status: 'false'
    },
    {
      id: 8,
      value: '3',
      status: 'false'
    },
    {
      id: 9,
      value: '2',
      status: 'false'
    },
    {
      id: 10,
      value: '1',
      status: 'false'
    },
  ];
  constructor(  ) { }

  ngOnInit(): void {
    this.showTime();
  }

  showTime() {
    setInterval(() => {
      const d = new Date();
      this.dateObj = d.getTime();
    }, 1000);
    const d = new Date();
    this.dateObj = d.getTime();
    this.hours = Math.abs(this.startDate - this.dateObj) / 36e5;
    let hour = parseInt(this.hours);
    this.totalHours.reverse();
      this.totalHours.forEach(ele => {
        if(ele.id <= hour){
          ele.status = 'true';
         var res = hour +1 ;
        }else if(ele.id === hour +1){
          ele.status = 'pending';
        }
      })
  }
}
