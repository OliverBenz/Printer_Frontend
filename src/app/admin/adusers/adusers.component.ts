import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adusers',
  templateUrl: './adusers.component.html',
  styleUrls: ['./adusers.component.css']
})
export class AdusersComponent implements OnInit {
  // TODO: Get Groups from backend
  public show = false;
  public groups = [
    [0, "Admin"],
    [1, "Maintainer"],
    [2, "User"],
    [3, "Registered"]
  ];
  constructor() { }

  ngOnInit() {
  }
  
  public toggleCollapse(id){
    this.show = !this.show;
  }
}
