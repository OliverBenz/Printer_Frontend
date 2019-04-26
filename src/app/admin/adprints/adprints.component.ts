// import { CommonModule } from '@angular/common';
import { Job } from './../../classes/job';
import { PrintsService } from './../../services/prints.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-adprints',
  templateUrl: './adprints.component.html',
  styleUrls: ['./adprints.component.css']
})
export class AdprintsComponent implements OnInit {
  public jobs: Array<Job> = [];
  public show = [];

  public value: string = "";

  constructor(
    private printsService: PrintsService
  ) { }

  ngOnInit() {
    this.printsService.getAdminPrints("to-do");

    this.printsService.adPrints.subscribe(data => {
      if(data){
        this.jobs = data;
        for(let i = 0; i < this.jobs.length; i++){
          this.show.push([this.jobs[i].getId(), false]);
        }
      }
    });
  }

  public getPrints(val){
    this.printsService.getAdminPrints(val);
  }

  public toggleCollapse(id){
    for(let i = 0; i < this.show.length; i++){
      if(this.show[i][0] == id){
        this.show[i][1] = !this.show[i][1];

        if(this.show[i][1] == true){
          // FIXME: Race condition??
          // (<HTMLSelectElement>document.getElementById("printStatus")).value = (<HTMLSelectElement>document.getElementById("status")).value;
          this.value = (<HTMLSelectElement>document.getElementById("status")).value;
          console.log(this.value);
        }
      }
    }
  }

  public checkShow(id){
    for(let i = 0; i < this.show.length; i++){
      if(this.show[i][0] == id){
        return this.show[i][1];
      }
    }
    return false;
  }

  public changeStatus(id){
    let value = (<HTMLSelectElement>document.getElementById("printStatus")).value;
    // TODO: Check if if still needed
    if(value == "To Do"){
      value = "to-do";
    }

    for(let i = 0; i < this.jobs.length; i++){
      if(this.jobs[i].getId() == id){
        this.jobs.splice(i, 1);
      }
    }
    
    this.printsService.changeStatus(value, id);
  }
}