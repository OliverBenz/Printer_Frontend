import { Job } from './../../classes/job';
import { AuthService } from './../../services/auth.service';
import { PrintsService } from './../../services/prints.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accprints',
  templateUrl: './accprints.component.html',
  styleUrls: ['./accprints.component.css']
})
export class AccprintsComponent implements OnInit {

  public history: Array<Job> = [];
  public historyExists = true;

  public selections = [
    ["To Do", "to-do"],
    ["Removed", "removed"],
    ["Invalid", "invalid"],
    ["Failed", "failed"],
    ["Done", "done"]
  ];

  public button = {
    "value": "Remove",
    "show": true
  }
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
    
    // Show Button
    if(value != "removed" && value != "to-do"){
      this.button.show = false;
    }
    else{
      this.button.show = true;
    }
    // Button Value
    if(value == "removed"){
      this.button.value = "Add Print"
    }
    if(value == "to-do"){
      this.button.value = "Remove"
    }
  }

  public changePrint(value, id){
    if(value == "Add Print"){
      value = "To Do";
    }
    else if(value == "Remove"){
      value = "Removed";
    }

    for(let i = 0; i < this.history.length; i++){
      if(this.history[i].getId() == id){
        this.history.splice(i, 1);
      }
    }

    console.log(id);
    this.printsService.changeStatus(value, id)
  }
}
