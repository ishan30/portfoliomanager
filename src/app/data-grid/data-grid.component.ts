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

  public columns: any[] = [{field: 'ProductID'}, {field: 'ProductName'}, {field: 'QuantityPerUnit'}];
    public bindingType = 'array';
    public view: Observable<GridDataResult>;
    public gridData;
    // public gridDataResult: GridDataResult = {data: holdings, total: holdings.length};
    holdingSummaryData;
    constructor(private portfolioDataService: PortfolioDataService) {}
    ngOnInit(): {
      this.loadHoldingSummary();
    }

loadHoldingSummary() : {
      this.holdingSummaryData = this.portfolioDataService.getStockHoldingData();
    }
changeBindingType(e): {
      switch (this.bindingType) {
        case 'array' : {
          this.columns = [{field: 'ProductID'}, {field: 'ProductName'}, {field: 'QuantityPerUnit'}];
          this.gridData = holdings;
          break;
        }
        case 'gridDataResult' : {
          this.columns = [{field: 'ProductID'}, {field: 'ProductName'}, {field: 'QuantityPerUnit'}];
          this.gridData = this.gridDataResult;
          break;
        }
        case 'async' : {
          const state: State = {skip: 0, take: 100};
          this.columns = [{field: 'CategoryID'}, {field: 'CategoryName'}, {field: 'Description'}];
          this.service.query(state);
          this.view.subscribe(res => {
            this.gridData = res;
            });
          break;
        }
      }
    }

}
