import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartServiceService } from 'src/app/shopping/services/cart-service.service';
import { ProductServiceService } from 'src/app/shopping/services/product-service.service';
import { Product } from 'src/app/shopping/types/Products';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent implements OnInit {
   selectedCatList :Product[];


  constructor( private route: ActivatedRoute,
  private router: Router,
  private productService: ProductServiceService,
  private cartService:CartServiceService) {

  }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.selectedCatList = this.productService.getCategoryItems(parseInt(id));
  }

   addToCart(product:Product) : void{
     this.cartService.add(product);
  }

}
