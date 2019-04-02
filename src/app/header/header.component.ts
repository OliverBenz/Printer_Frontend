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
  public buttons = {
    login: true,
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

  public logout(){
    this.authService.removeSessionId();
    window.location.reload();
  }

  public handleFiles(){
    let path = (<HTMLInputElement>document.getElementById("selectedFile")).value;
    this.helpersService.fileSource.next(path);
    this.router.navigate(["/add"]);
  }

  public clickFileButton(){
    document.getElementById('selectedFile').click();
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
