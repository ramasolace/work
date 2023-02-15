import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Product,CartProduct} from './../types/Products';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

   cartUpdates = new Subject<any>();
  public cartUpdates$ = this.cartUpdates.asObservable();

  public cartItmes:CartProduct[] =[];
  public get count():number{
    return this.cartItmes.reduce((c,t1) => t1.qty+c,0);
    
  };
  

  constructor() { 

  }

  add(product:Product){

   let item:CartProduct = this.cartItmes.find(item => item.id == product.id) as CartProduct ;

   if(item){ item.qty ++ } else {
     (product as CartProduct).qty = 1;
     this.cartItmes.push(product)
   }

   this.cartUpdates.next(true);
   //test
   
  }
}
