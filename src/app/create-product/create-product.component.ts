import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { BlankService } from '../blank.service';
import { FormsModule } from '@angular/forms';

interface create_prod{
  title:string;
  image: string;
  price:number;
}



@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  create_prod: FormGroup;
  constructor(private blankService: BlankService)
  {
    this.create_prod=new FormGroup({
  'title': new FormControl(),
  'image': new FormControl(),
  'price': new FormControl(),
  
    })
  }


  CreateProduct(){
    console.log(this.create_prod.value)
    this.blankService.createProducts(this.create_prod.value)

  }
}
