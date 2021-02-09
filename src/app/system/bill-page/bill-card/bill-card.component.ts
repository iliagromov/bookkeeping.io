import { Component, OnInit, Input } from '@angular/core';
import { Bill } from '../../shared/models/bill.model';

@Component({
  selector: 'app-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.less']
})
export class BillCardComponent implements OnInit {

  @Input() bill: Bill;
  @Input() currency: any;

  dollar: number;
  ruble: number;
  euro: number;
  RUB: number;

  constructor() { }

  ngOnInit() {
    const { rates } = this.currency;
    this.RUB = rates['RUB'];
    this.ruble = rates['RUB'] / rates['RUB'] * this.bill.value;
    this.dollar = rates['USD'] / rates['RUB'] * this.bill.value;
    this.euro = rates['EUR'] / rates['RUB'] * this.bill.value;
    // console.log(this.currency);
  }

}
