import { Component,Input } from '@angular/core';
interface cardDetails{
  title:string;
  value:string;
  below_val:string;
  icon:string;
  text:string;
}



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
@Input() cardData: cardDetails|undefined;





}
