import { Component } from '@angular/core';
import { BlankService } from '../blank.service';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent {

  products = this.cartService.getItems();

  constructor(private cartService: BlankService) {}

}

