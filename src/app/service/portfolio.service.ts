import { Injectable } from '@angular/core';
import {Money} from "../model/money";
import {Portfolio} from "../model/portfolio";

@Injectable({
  providedIn: 'root'
})
export class portfolioService implements Portfolio{

  constructor() { }

  money : Money[] = [];

  add(money:Money[]) {
    this.money = this.money.concat(money)
  }
  evaluate(currency:string){
    let total = 0;
    this.money.forEach(money => {
      if(money.currency === currency){
        total += money.amount;
      }
    });
    return new Money(total, currency);
  }
  getMoney() {
    return this.money.slice();
  }


}
