import { AuthService } from './../../services/auth.service';
import { PrintsService } from './../../services/prints.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accprints',
  templateUrl: './accprints.component.html',
  styleUrls: ['./accprints.component.css']
})
export class AccprintsComponent implements OnInit {

  public history: Array<History> = [];
  public historyExists = true;

  public selections = [
    ["To Do", "to-do"],
    ["Removed", "removed"],
    ["Invalid", "invalid"],
    ["Failed", "failed"],
    ["Done", "done"]
  ];

  constructor(
    private printsService: PrintsService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    // TODO: Init value
    this.getData("to-do");
    this.printsService.prints.subscribe(data => {
      if(data){
        this.history = data;
        this.historyExists = true;
      }
      else{
        this.historyExists = false;
      }
    });
  }

  public popup(id){
    document.getElementById(id).classList.toggle("show");
  }

  public getData(value){
    this.printsService.getUserPrints(value, this.authService.getSessionId());
  }
}
