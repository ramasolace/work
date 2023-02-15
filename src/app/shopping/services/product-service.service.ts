import { Injectable } from '@angular/core';
import {products} from '../product-item';
import { Product } from '../types/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  constructor() { }

  getAll():Product[] {
    return products;
  }

  getCategoryItems(id:number): Product [] {
    return products.filter(item => item.categoryId == id );
  }
}
