import { HelpersService } from './../services/helpers.service';
import { Print } from './../classes/prints';
import { PrintsService } from './../services/prints.service';
import { Component, OnInit, AfterContentInit } from '@angular/core';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit, AfterContentInit{
  // usrid, amount, date, date_until, filename, name, time, length, weight, price
  public inputList = [
    ["Amount", "amount", "number"],
    ["Date Until", "date_until", "Date"],
    ["Name", "name", "string"],
    ["Time", "time", "number"],
    ["Length", "length", "number"],
    ["Weight", "weight", "number"],
    ["Price", "price", "number"],
    ["Notes", "notes", "string"]
  ];

  constructor(
    private printsService: PrintsService,
    private authService: AuthService,
    private helpersService: HelpersService
  ) { }

  ngOnInit() {
    
  }

  ngAfterContentInit(){
    this.helpersService.file.subscribe(path => {
      if(path){
        this.checkFilename(path);
      }
    });
  }

  public checkFilename(path){
    let temp = path.split("\\");
    let filename = temp[temp.length - 1].split(".gcode")[0];

    if((filename.split("_").length - 1) == 4){
      let obj = filename.split("_");

      (<HTMLInputElement>document.getElementById("filename")).value = filename;
      (<HTMLInputElement>document.getElementById("name")).value = obj[0].replace(/-/g, " ");
      (<HTMLInputElement>document.getElementById("time")).value = this.formatTime(obj[1]);
      (<HTMLInputElement>document.getElementById("length")).value = obj[2].replace(",", ".");
      (<HTMLInputElement>document.getElementById("weight")).value = obj[3].replace(",", ".");
      (<HTMLInputElement>document.getElementById("price")).value = obj[4].replace(",", ".");
    }
  }

  // TODO: Add file upload
  // TODO: Only allow file upload if logged in

  public submit(){
    if(this.authService.checkSessionId()){
      // Filename:     usrid-amount-date-date_until-filename-name-time-length-weight-price
      var amount = (<HTMLInputElement>document.getElementById("amount")).value;
      var date = new Date().toISOString().split("T")[0];
      var date_until = (<HTMLInputElement>document.getElementById("date_until")).value;
      var filename = (<HTMLInputElement>document.getElementById("filename")).value;
      var name = (<HTMLInputElement>document.getElementById("name")).value;
      var time = (<HTMLInputElement>document.getElementById("time")).value;
      var length = (<HTMLInputElement>document.getElementById("length")).value;
      var weight = (<HTMLInputElement>document.getElementById("weight")).value;
      var price = (<HTMLInputElement>document.getElementById("price")).value;
      var notes = (<HTMLInputElement>document.getElementById("notes")).value;

      let usrid: number = 0;

      // "+" is to cast string to number
      let print: Print = new Print(this.authService.getSessionId(), +amount, date, date_until, filename, name, Math.round(+time * 100) / 100, Math.round(+length * 100) / 100, Math.round(+weight * 100) / 100, Math.round(+price * 100) / 100, notes);
 
      this.printsService.postPrint(print);
      this.clearInput();
    }
    else{
      alert("Login Needed");
    }

  }

  public test(file){
    console.log(file);
  }

  private formatTime(str){
      var time = str.split("h");
      time[1] = (time[1].split("min"))[0];
      time =  +time[0] + (((time[1] / 100) / 60) * 100);

    return time;
  }

  private clearInput(){
    (<HTMLFormElement>document.getElementById('printForm')).reset();
  }
}
