import { PrintsService } from './../../services/prints.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adusers',
  templateUrl: './adusers.component.html',
  styleUrls: ['./adusers.component.css']
})
export class AdusersComponent implements OnInit {
  // TODO: Get Groups from backend
  public users = [];
  public show = [];
  public groups = [
    [0, "Registered"],
    [1, "User"],
    [2, "Maintainer"],
    [3, "Admin"]
  ];
  constructor(
    private printsService: PrintsService
  ) { }

  ngOnInit() {
    this.printsService.getAdminUsers("Registered");
    
    this.printsService.adUsers.subscribe(data => {
      if(data){
        this.users = data;
        for(let i = 0; i < this.users.length; i++){
          this.show.push([this.users[i].id, false]);
        }
      }
    });
  }

  public getUsers(val){
    for(let i = 0; i < this.groups.length; i++){
      if(this.groups[i][0] == val){
        val = this.groups[i][1];
      }
    }
    this.printsService.getAdminUsers(val);
  }
  public changeGroup(id, val){
    var groupname = "" 
    for(let i = 0; i < this.groups.length; i++){
      if (this.groups[i][0] == val){
        groupname = this.groups[i][1]
      }
    }
    alert(id + groupname);
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
