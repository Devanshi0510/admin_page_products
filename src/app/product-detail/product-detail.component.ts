import { Component } from '@angular/core';
import { BlankService } from '../blank.service';
import { ActivatedRoute } from '@angular/router';
import { AddToCartService } from '../add-to-cart.service';


interface prod_detail {
  id?: number;
  title: string;
  image: string;
  price: number
}




@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  
  addToCart(product: any): void {
    console.log(product)
    this.cartService.addToCart(product);
    alert('Product added to cart.');
  }


  current_prod_detail: prod_detail | undefined;
  constructor(
    private activeRoute: ActivatedRoute,
    private blankService: BlankService,
    private cartService: AddToCartService,

  ) {

    let prodId = this.activeRoute.snapshot.params['id'];
    let prodIndex = this.blankService.products.findIndex((b) => b.id == prodId);
    this.current_prod_detail = this.blankService.products[prodIndex];
  }
}
