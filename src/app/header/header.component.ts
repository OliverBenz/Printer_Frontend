import { HelpersService } from './../services/helpers.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public admin = false;

  public page = {
    searchInput: "hidden"
  }
  public buttons = {
      login: false,
      account: false
  }
  constructor(
    private authService: AuthService,
    private helpersService: HelpersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.checkLogin();
  }
  public changeSeachInput(){
    if(this.page.searchInput == "hidden"){
      this.page.searchInput = "visible";
    }
    else if(this.page.searchInput == "visible"){
      this.page.searchInput = "hidden";
    }
  }

  public logout(){
    this.authService.removeSessionId();
    this.router.navigate(["/index"]);
    
    this.checkLogin();
    location.reload();
  }
  public handleFiles(event){
    this.helpersService.fileSource.next(<File>event.target.files[0]);
    this.router.navigate(["/add"]);
  }

  public clickFileButton(){
    document.getElementById('selectedFile').click();
  }
  public sendFilter(filter){
    console.log(filter);
  }
  private checkLogin(){
    if (this.authService.checkSessionId()){
      this.buttons.login = false;
      this.buttons.account = true;
    }
    else{
      this.buttons.login = true;
      this.buttons.account = false;
    }
  }
}
