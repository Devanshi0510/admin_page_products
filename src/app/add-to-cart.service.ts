import { Injectable } from '@angular/core';

interface Product{
  id: number;
    title:string;
    image:string,
    price:number;
  }

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  items: { product: Product, quantity: number }[] = [];

  constructor() { }

  addToCart(product1: Product): void {
    const existingItem = this.items.find(item => item.product.id === product1.id);
    if (existingItem) {
      console.log(existingItem)
      console.log(this.items)
        existingItem.quantity++;
        console.log(this.items)
    } else {
        const newItem = { product: product1, quantity: 1 };
        this.items.push(newItem);
    }
     
  }


  removeFromCart(productId: number): void {
    console.log(productId)
    const existingItem = this.items.find(item => item.product.id === productId);
    if (existingItem) {
       if (existingItem.quantity > 1) {
         existingItem.quantity--;
       } else {
         const index = this.items.findIndex(item => item.product.id === productId);
         if (index !== -1) {
           this.items.splice(index, 1);
         }
       }
    }
  }

  getItems(): { product: Product, quantity: number }[] {
    return this.items;
  }

  clearCart(): void {
    console.log(this.items)
    this.items = [];
    console.log(this.items)
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }
}
