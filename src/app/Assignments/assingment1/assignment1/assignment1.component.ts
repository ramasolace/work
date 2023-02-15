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
    this.findDuplicateIntoString('assignment');
    let dummyArr = [1,4,'2',7,3,3,3,9,1,8,8,0,2,4,4,6,2];
      let res = dummyArr.filter((value,index)=>dummyArr.indexOf(value) !== index);
      console.log(res);
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

  findDuplicateIntoString(value:string):void{
    let res = value.split('');
    let res2 =  res.filter((value,index)=> res.indexOf(value) !== index);
    console.log(res2);
    var arr = [1,100];
    var arr1 = [];
     for(let i = 1; i<=arr[arr.length - 1] - 1 ; i++){
       console.log(i);
       if( arr.indexOf(i) == -1){
        arr1.push(i)
       }
     }

let name = "apple"
let check = name.split('').reverse().join('');
if(name === check){
console.log('hi');
}
console.log(arr1);
var a=3;
var b=a++;
var c=++a;
console.log(a)

}
}
