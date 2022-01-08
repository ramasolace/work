import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter(); 
  interval: any;
  lastNumber = 0;
  isClick = true;
  constructor() { }

  ngOnInit(): void {
  }

  startGame(){
  this.interval = setInterval(()=>{
  this.intervalFired.emit(this.lastNumber + 1);
  this.lastNumber++;
},1000);
  this.isClick = false;
  }

  pauseGame(){
  this.isClick = true;
  clearInterval(this.interval);
  console.log(this.interval);
  }

  resetGame(){
    this.isClick = true;
    clearInterval(this.interval);
    this.lastNumber = 0;
    this.intervalFired.emit(this.lastNumber);
  }
}
