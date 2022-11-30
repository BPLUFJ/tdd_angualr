import { Component } from '@angular/core';
import { Portfolio } from './model/portfolio';
import { Money } from './model/money';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'currency-app';
  portfolio: Portfolio = new Portfolio();

  currency: string = '';
  amount: number = 0;

  
  addMoney() {
    const newMoney = new Money(this.amount, this.currency);
    this.portfolio.add([newMoney]);
  }

}
