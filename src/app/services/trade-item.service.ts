import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from  'rxjs/Observable';

import  'rxjs/add/operator/catch';

import  'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class TradeItemService {

  constructor(private http: HttpClient) { }

  // API URL:
  private getDefaultListUrl = "http://localhost:8080";


  //-- HTTP Calls

  // Get All - Home Page
  public getDefaultList() {
    return this.http.get(this.getDefaultListUrl + "/userid");
  }

  // Search
  public searchItemByTitle(title: string) {
    return this.http.get(this.getDefaultListUrl + '/items/find-by-title=' + title);
  }

  // Get Item
  public getItem(id: number) {
    return this.http.get(this.getDefaultListUrl + '/item/' + id);
  }

  // POST: Create Item
  public createItem(userId: number, categoryId: number, title: string, description: string) {
    const item = { owner: { id : userId }, category : { id : categoryId }, status : 1, title, description };
    return this.http.post(this.getDefaultListUrl + '/item/', item);
  }

  // GET: Category List
  public getCategories() {
    return this.http.get(this.getDefaultListUrl + '/categories');
  }

  public createTradeRequest(tradeItemId: number, wantItemId: number) {
    const tradeRequest = { status : 1, tradeItem : { id : tradeItemId }, wantItem : { id : wantItemId}};
    return this.http.post(this.getDefaultListUrl + '/trade', tradeRequest);
  }

  public getTradeRequest(id: number) {
    return this.http.get(this.getDefaultListUrl + '/trade/' + id);
  }

  public acceptTradeRequest(id: number) {
    return this.http.put(this.getDefaultListUrl + '/trade/' + id + '/accept', {});
  }

}
