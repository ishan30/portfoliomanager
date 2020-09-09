import { Component, OnInit } from '@angular/core';
import { State } from '@progress/kendo-data-query';
import { GridDataResult, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { Observable } from 'rxjs';
import { PortfolioDataService } from '../portfolio-data.service';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {

  public columns: any[] = [{field: 'stockId'}, {field: 'stockName'},
  {field: 'purchasePrice'}, {field: 'quantity'}, {field: 'purchaseDate'},
  {field: 'currentPrice'}, {field: 'initialValuation'}, {field: 'currentValuation'}];
    public bindingType = 'array';
    public view: Observable<GridDataResult>;
    public gridData;
    // public gridDataResult: GridDataResult = {data: holdings, total: holdings.length};
    holdingSummaryData;
    constructor(private portfolioDataService: PortfolioDataService) {}

    ngOnInit() {
      this.loadHoldingSummary();
    }

    loadHoldingSummary(): any {
      this.holdingSummaryData = this.portfolioDataService.getStockHoldingData();

      this.columns = [{field: 'stockId'}, {field: 'stockName'},
      {field: 'purchasePrice'}, {field: 'quantity'}, {field: 'purchaseDate'},
      {field: 'currentPrice'}, {field: 'initialValuation'}, {field: 'currentValuation'}];
      this.gridData = this.holdingSummaryData;
    }

}
