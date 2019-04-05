import { Component, Input } from '@angular/core';
import { StockChart } from 'angular-highcharts';
import {DataserviceService} from './dataservice.service';

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
 Apple
 fb
 goog
  clicked: boolean = false;

  use(a){
    this.clicked = true;
    this.stockx = a
    this.getAppleNews()
    this.getGoogNews()
    this.getFBNews()
    console.log(this.stockx)
    return this.stockx;
  } 

  getAppleNews(){
    this.dataService.AAPLnews().subscribe(data=>{this.data = data;
     this.Apple = data['Content']['result']
    console.log(data['Content'])
    })
  }
  getGoogNews(){
    this.dataService.GOOGnews().subscribe(data=>{this.data = data;
     this.goog = data['Content']['result']
    console.log(data['Content'])
    })
  }
  getFBNews(){
    this.dataService.fbnews().subscribe(data=>{this.data = data;
     this.fb = data['Content']['result']
    console.log(data['Content'])
    })
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