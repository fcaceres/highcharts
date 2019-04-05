import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { ISeries } from './iseries'



@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http: HttpClient) { }

  getdata1(){
    return this.http.get('/assets/data.json').map(data => { return data;})
  }

  AAPLnews(){
    return this.http.get('/assets/json/news/AAPL.json').map(data => { return data;})
  }
 fbnews(){
    return this.http.get('/assets/json/news/FB.json').map(data => { return data;})
  }
  GOOGnews(){
    return this.http.get('/assets/json/news/GOOG.json').map(data => { return data;})
  }

}
