import { Print } from './../classes/prints';
import { PrintsService } from './../services/prints.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  // TODO: Get users from database;
  // usrid, amount, date, date_until, filename, name, time, length, weight, price
  public inputList = [
    ["Filename", "filename", "string"],
    ["Amount", "amount", "number"],
    ["Date", "date", "Date"],
    ["Date Until", "date_until", "Date"],
    ["Name", "name", "string"],
    ["Time", "time", "number"],
    ["Length", "length", "number"],
    ["Weight", "weight", "number"],
    ["Price", "price", "number"]
  ];

  constructor(
    private printsService: PrintsService
  ) { }

  ngOnInit() {
    // TODO: If filename is right format: Auto fill out other fields
  }

  public submit(){
    // Filename:     usrid-amount-date-date_until-filename-name-time-length-weight-price
    var amount = (<HTMLInputElement>document.getElementById("amount")).value;
    var date = (<HTMLInputElement>document.getElementById("date")).value;
    var date_until = (<HTMLInputElement>document.getElementById("date_until")).value;
    var filename = (<HTMLInputElement>document.getElementById("filename")).value;
    var name = (<HTMLInputElement>document.getElementById("name")).value;
    var time = (<HTMLInputElement>document.getElementById("time")).value;
    var length = (<HTMLInputElement>document.getElementById("length")).value;
    var weight = (<HTMLInputElement>document.getElementById("weight")).value;
    var price = (<HTMLInputElement>document.getElementById("price")).value;

    // TODO: Get user-id from cookie
    let usrid: number = 0;

    // "+" is to cast string to number
    // 
    let print: Print = new Print(usrid, +amount, new Date(date), new Date(date_until), filename, name, +time, +length, +weight, +price);
    console.log(print);
    // this.printsService.postPrint(print);
  }

}
