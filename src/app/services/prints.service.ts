import { Queue } from '../classes/queue';
import { History } from '../classes/history';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class PrintsService {
  // Article Normal
  private queueSource = new BehaviorSubject<any>("");
  queue = this.queueSource.asObservable();

  // Article Normal
  private historySource = new BehaviorSubject<any>("");
  history = this.historySource.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  public getQueue(){
    let url = "http://127.0.0.1:5000/queue/To-Do";

    this.http.get<any>(url, httpOptions).subscribe(data => {
      var queueList: Array<Queue> = [];
      
      for(let i = 0; i < data.data.length; i++){
        queueList.push(new Queue(data.data[i]))
      }
      this.queueSource.next(queueList);
    })
  }

  public getUserHistory(sessionId: string){
    let url = "http://127.0.0.1:5000/user/history/" + sessionId;

    this.http.get<any>(url, httpOptions).subscribe(data => {
      var historyList: Array<History> = [];

      for(let i = 0; i < data.data.length; i++){
        historyList.push(new History(data.data[i]));
      }

      this.historySource.next(historyList);
    });
  }

  public postPrint(obj){
    let url = "http://127.0.0.1:5000/add";

    // Filename:     sessionId-amount-date-date_till-filename-name-time-length-weight-price

    let body = JSON.parse('{"sessionId": "' + obj.getSessionId() + '", "amount": "' + obj.getAmount() + '", "date": "' + obj.getDate() + '", "date_until": "' + obj.getDateUntil() + '", "filename": "' + obj.getFilename() + '", "name": "' + obj.getName() + '", "time": "' + obj.getTime() + '", "length": "' + obj.getLength() + '", "weight": "' + obj.getWeight() + '", "price": "' + obj.getPrice() + '"}');
    
    this.http.post<any>(url, body, httpOptions).subscribe(resp => {
      console.log("Success");
      console.log(resp);
    }), error => {
      console.log("Error");
      console.log(error);
    };
  }
}
