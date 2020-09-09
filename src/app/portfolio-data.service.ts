import { Injectable } from '@angular/core';
import { Holdings } from './holdings';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDataService {

  constructor() { }
  getStockHoldingData() {
    const currentHoldings = [
      {
        stockId : 1,
        stockName: 'Yes Bank',
        purchasePrice: 14,
        quantity: 50,
        purchaseDate: '',
        currentPrice: 20,
        initialValuation: 0,
        currentValuation: 0
      }
    ];
    const holdingResult = this.calculateCurrentValuation(currentHoldings);
    return holdingResult;
  }

  calculateCurrentValuation(holdingData): any {
    holdingData.forEach(element => {
      element.initialValuation = element.purchasePrice * element.quantity;
      element.currentValuation = element.currentPrice * element.quantity;
    });
    return holdingData;
  }
}
