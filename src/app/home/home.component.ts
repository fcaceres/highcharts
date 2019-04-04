import { Component, Input } from '@angular/core';
import { StockChart } from 'angular-highcharts';
import {DataserviceService} from './dataservice.service';
import { useAnimation } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent {

  @Input() stockx: string;
  chart: StockChart;
  APPL: StockChart;
  GOOG: StockChart;
  FB: StockChart;
  data: any = []
  results
  clicked: boolean = false;

  use(a){
    this.clicked = true;
    this.stockx = a
    console.log(this.stockx)
    return this.stockx;
  } 

  constructor(public dataService: DataserviceService) {



    this.dataService.getdata1().subscribe(data=>{
      this.results = data

    this.APPL = new StockChart( {
      rangeSelector: {
        selected: 1
      },
      chart: {
        height: 700,
        type: 'line'
    },
      title: {
        text: 'AAPL Stock Price'
      },
      series: [{
        tooltip: {
          valueDecimals: 2
        },
        name: 'APPL',
        data: data['appl']
      }]
    })   
    this.GOOG = new StockChart( {
      rangeSelector: {
        selected: 1
      },
      chart: {
        height: 700,
        type: 'line'
    },
      title: {
        text: 'GOOG Stock Price'
      },
      series: [{
        tooltip: {
          valueDecimals: 2
        },
        name: 'GOOG',
        data: data['goog']
      }]
    })
    this.FB = new StockChart( {
      rangeSelector: {
        selected: 1
      },
      chart: {
        height: 700,
        type: 'line'
    },
      title: {
        text: 'FB Stock Price'
      },
      series: [{
        tooltip: {
          valueDecimals: 2
        },
        name: 'FB',
        data: data['fb']
      }]
    })
  })
   }

 
  
}