import { User } from './../classes/user';
import { Job } from './../classes/job';
import { Print } from './../classes/print';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';
import { HelpersService } from './helpers.service';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class PrintsService {
  private _url = "http://46.101.150.204:3004"

  // Article Normal
  private queueSource = new BehaviorSubject<any>("");
  queue = this.queueSource.asObservable();

  // Article Normal
  private printsSource = new BehaviorSubject<any>("");
  prints = this.printsSource.asObservable();

  // Admin Prints
  private adPrintsSource = new BehaviorSubject<any>("");
  adPrints = this.adPrintsSource.asObservable();

  // Admin Users
  private adUserSource = new BehaviorSubject<any>("");
  adUsers = this.adUserSource.asObservable();


  constructor(
    private http: HttpClient,
    private helpersService: HelpersService,
    private authService: AuthService
  ) { }

  public getQueue(){
    let url = this._url + "/print/to-do";

    this.http.get<any>(url, httpOptions).subscribe(data => {
      var printList: Array<Print> = [];
      
      for(let i = 0; i < data.data.length; i++){
        let a = data.data[i];
        let print: Print = new Print(a.id, a.filename, a.name, a.time, a.length, a.weight, a.price);
        printList.push(print);
      }
      this.queueSource.next(printList);
    });
  }

  public getUserPrints(value: string, sessionId: string){
    let url = this._url + "/job/" + value + "/" + sessionId;

    this.http.get<any>(url, httpOptions).subscribe(data => {
      var jobList: Array<Job> = [];
      console.log(data);
      for(let i = 0; i < data.data.length; i++){
        let a = data.data[i];
        let job: Job = new Job(a.id, a.amount, a.date, a.notes, a.filename, a.name, a.time, a.length, a.weight, a.price);
        job.setTimeReal(a.timeReal);
        job.setDateUntil(a.dateUntil);
        job.setDateDone(a.dateDone);

        jobList.push(job);
      }

      this.printsSource.next(jobList);
    });
  }

  public postPrint(obj, file){
    // Filename:     sessionId-amount-date-date_till-filename-name-time-length-weight-price

    let body = JSON.parse('{"sessionId": "' + this.authService.getSessionId() + '", "amount": "' + obj.getAmount() + '", "date": "' + obj.getDate() + '", "date_until": "' + obj.getDateUntil() + '", "filename": "' + obj.getFilename() + '", "name": "' + obj.getName() + '", "time": "' + obj.getTime() + '", "length": "' + obj.getLength() + '", "weight": "' + obj.getWeight() + '", "price": "' + obj.getPrice() + '", "notes": "' + obj.getNotes() + '"}');
    
    this.http.post<any>(this._url + "/job", body, httpOptions).subscribe(resp => {
      console.log("Post Success");
      console.log(resp);
      alert(resp.data);
      
      // Start file upload if successful
      var fd = new FormData();
      fd.append('file', file, file.name);
      
      // httpOptions.headers = httpOptions.headers.set('Content-Type', 'multipart/form-data');

      this.http.post<any>(this._url + "/file", fd).subscribe(res => {
        console.log(res);
      }, error => {
        console.log("File Error");
        console.log(error);
      });
    }), error => {
      console.log("Error");
      console.log(error);
    };
  }

  public getAdminPrints(status){
    this.http.get<any>(this._url + "/admin/jobs/" + status + "/" + this.authService.getSessionId(), httpOptions).subscribe(data => {
      console.log("Successful");
      
      var jobList: Array<Job> = [];
      for(let i = 0; i < data.data.length; i++){
        let a = data.data[i];
        let job: Job = new Job(a.id, a.amount, a.date, a.notes, a.filename, a.name, a.time, a.length, a.weight, a.price);
        job.setDateDone(a.dateDone);
        job.setDateUntil(a.dateUntil);
        job.setTimeReal(a.timeReal);
        job.setStatus(a.status);
        job.setUser(a.user);
        
        jobList.push(job);
      }

      this.adPrintsSource.next(jobList);
    }, error => {
      console.log("Get Prints failed");
      console.log(error);
    })
  }

  public getAdminUsers(status){
    this.http.get<any>(this._url + "/admin/user/" + status + "/" + this.authService.getSessionId(), httpOptions).subscribe(data => {
      console.log("Successful");
      var userList: Array<User> = [];

      for(let i = 0; i < data.data.length; i++){
        let a = data.data[i];
        userList.push(new User(a.id, a.name, a.email, a.group))
      }

      this.adUserSource.next(userList);
    }, error => {
      console.log("Get users failed");
      console.log(error);
    })
  }
}
