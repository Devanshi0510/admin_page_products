import { Component,Input } from '@angular/core';
import { BlankService} from '../blank.service';
import { ActivatedRoute } from '@angular/router';
import { AddToCartService } from '../add-to-cart.service';
// interface productDetails{
//   id: number;
//     title: string;
//     image:string;
//     price:number;
// }
interface prod_detail{
  id?:number;
  title:string;
  image: string;
  price:number
}


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
@Input() productData: prod_detail|undefined



constructor(
  private cartService: AddToCartService,
) {}

addToCart(product: any): void {
  console.log(product)
  this.cartService.addToCart(product);
  alert('Product added to cart.');
}

}