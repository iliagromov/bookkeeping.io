import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
  styleUrls: ['./currency-card.component.less']
})
export class CurrencyCardComponent {

 
  @Input() currency:any;

  currencies:string[] = ['USD', 'EUR'];

}
