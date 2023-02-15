import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../../services/cart-service.service';

@Component({
  selector: 'app-cart-list-component',
  templateUrl: './cart-list-component.component.html',
  styleUrls: ['./cart-list-component.component.css']
})
export class CartListComponentComponent implements OnInit {
   count:number = 0;
   isOpen:boolean =false;
   previewFlag:boolean = false;
   inVoiceNo :number;
   displayStyle = "none";
  constructor(private cartService:CartServiceService) { 

  }

  ngOnInit() {

    this.cartService.cartUpdates$.subscribe(()=>{
      this.count= this.cartService.count;
    });
  }
   openCart():void{
    this.isOpen = true;
    this.displayStyle = "block";
  }
   closeCart():void{
    this.isOpen = false;
    this.previewFlag = false;
    this.displayStyle = "none";
  }
   removeProduct(item) :void{
    console.log(this.cartService)
    this.cartService.cartItmes.splice(this.cartService.cartItmes.findIndex(element=>item.id === element.id),1);
    this.count= this.cartService.count;
  }
   chngQuantity():void{
    this.count= this.cartService.count;     
  }
   preview() :void{
    this.previewFlag = true;
    this.inVoiceNo = this.getRandomInt(23443, 23432555);
  }
 
   getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


}
