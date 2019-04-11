import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HelpersService } from './../services/helpers.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

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
      login: true,
      account: false
  }
  constructor(
    private authService: AuthService,
    private helpersService: HelpersService,
    private router: Router,
    private http: HttpClient
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
    window.location.reload();
  }

  public handleFiles(event){
    this.helpersService.fileSource.next(<File>event.target.files[0]);
    this.router.navigate(["/add"]);
  }

  public clickFileButton(){
    document.getElementById('selectedFile').click();
  }
  private checkLogin(){
    if (this.authService.checkSessionId()){
      this.buttons.login = false;
      this.buttons.account = true;
      this.checkGroup();
    }
    else{
      this.buttons.login = true;
      this.buttons.account = false;
    }
  }

  private checkGroup(){
    let url = "http://134.209.224.110:3004/user/group";
    // let url = "http://127.0.0.1:3004/user/group/";
    this.http.get<any>(url + this.authService.getSessionId(), httpOptions).subscribe(data => {
      if(data.data == "Administrator"){
        this.admin = true;
      }
    });
  }
}
