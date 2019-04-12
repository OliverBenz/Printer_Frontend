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
  public status = [
    [0, "To Do"],
    [1, "Printing"],
    [2, "Invalid"],
    [3, "Removed"],
    [4, "Failed"],
    [6, "Done"]
  ];

  constructor(
    private printsService: PrintsService
  ) { }

  ngOnInit() {
    this.printsService.getAdminPrints("to-do");
    
    this.printsService.adPrints.subscribe(data => {
      if(data){
        this.jobs = data;
        console.log(this.jobs);
        for(let i = 0; i < this.jobs.length; i++){
          this.show.push([this.jobs[i].getId(), false]);
        }
      }
    });
  }
  public getPrints(val){
    for(let i = 0; i < this.status.length; i++){
      if(this.status[i][0] == val){
        val = this.status[i][1];
      }
    }
    if(val == "To Do"){
      val = "to-do";
    }
    this.printsService.getAdminPrints(val);
  }

  public toggleCollapse(id){
    for(let i = 0; i < this.show.length; i++){
      if(this.show[i][0] == id){
        this.show[i][1] = !this.show[i][1];
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
}
