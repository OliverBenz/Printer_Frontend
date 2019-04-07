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
    this.http.get<any>("http://127.0.0.1:5000/user/group/" + this.authService.getSessionId(), httpOptions).subscribe(data => {
      if(data.data == "Administrator"){
        this.admin = true;
      }
    });
  }
}
