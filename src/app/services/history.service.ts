import { History } from './../classes/history';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  // Article Normal
  private historySource = new BehaviorSubject<any>("");
  history = this.historySource.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  public getHistory(){
    let url = "http://127.0.0.1:5000/prints";
    this.http.get<any>(url, httpOptions).subscribe(data => {
      var historyList: Array<History> = [];
      console.log(data);
      for(let i = 0; i < data.data.length; i++){
        let a = data.data[i];
        historyList.push(new History(a))
      
      }
      this.historySource.next(historyList);
    })

    return;
  }
}
