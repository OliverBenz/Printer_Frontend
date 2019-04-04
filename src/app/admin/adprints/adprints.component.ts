import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adprints',
  templateUrl: './adprints.component.html',
  styleUrls: ['./adprints.component.css']
})
export class AdprintsComponent implements OnInit {
  public jobs = [];
  public show = false;
  public status = [
    [0, "To Do"],
    [1, "Printing"],
    [2, "Invalid"],
    [3, "Removed"],
    [4, "Failed"],
    [6, "Done"]
  ]
  constructor() {
    
  }

  ngOnInit() {
  }

  public toggleCollapse(id){
    this.show = !this.show;
  }

}
