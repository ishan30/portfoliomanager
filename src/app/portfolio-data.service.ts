import { Injectable } from '@angular/core';

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
        currentValuation: 0
      }
    ];
    return currentHoldings;
  }
}
