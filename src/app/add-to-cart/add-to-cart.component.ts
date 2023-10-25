import { Component } from '@angular/core';
import { AddToCartService } from '../add-to-cart.service';
@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent {
 cartItems = this.cartService.getItems();

  constructor(private cartService: AddToCartService) {}

  

  clearCart(): void {
    this.cartService.clearCart();

  }

  getTotal(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.quantity * item.product.price,
      0
    );
  }

  addToCart(product: any): void {
    console.log(product)
    this.cartService.addToCart(product);
    alert('Product added to cart.');
  }
  
  removeFromCart(productId: any): void {
    console.log(productId)
    this.cartService.removeFromCart(productId);
    alert('Product removed to cart.');
  }
}
