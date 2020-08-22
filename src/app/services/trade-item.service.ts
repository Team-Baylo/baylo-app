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
  private getDefaultListUrl = "";

  //-- HTTP Calls

  // Get All - Home Page
  public getDefaultList() {
    return this.http.get(this.getDefaultListUrl + "/userid");
  }

  // Search

  // Get Item

  // POST: Create Item
}
