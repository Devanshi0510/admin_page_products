import { Injectable } from '@angular/core';

interface Prod{
  id?:number;
  title:string;
  image: string;
  price:number;
}


@Injectable({
  providedIn: 'root'
})
export class BlankService {
  products:Array<Prod> = [{
    id: 1,
    title: 'Chocolate',
    image:'../../assets/chocolate.jfif',
    price: 20,
  },
  {
    id: 2,
    title: 'Ice Cream',
    image:'../../assets/ice_cream.jfif',
    price: 50,
  },
  {
    id: 3,
    title: 'cake',
    image:'../../assets/cake.jfif',
    price: 800,
  },
  {
    id: 4,
    title: 'Pizza',
    image:'../../assets/pizza.jfif',
    price: 500,
  },
  {
    id: 5,
    title: 'Burger',
    image:'../../assets/burger.jfif',
    price: 200,
  },

  ]

  constructor() { }

  getItems(): Prod[] {
    return this.products;
  }

  createProducts(product:Prod){
product.id=this.products.length+1;
this.products.push(product);
  }
}
