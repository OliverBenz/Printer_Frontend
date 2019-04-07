import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accsettings',
  templateUrl: './accsettings.component.html',
  styleUrls: ['./accsettings.component.css']
})
export class AccsettingsComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }
  public changePassword(pwOld, pwNew, pwNew1){
    if(pwNew == pwNew1){
      this.loginService.changePassword(pwOld, pwNew);
    }
    else{
      alert("New Passwords don't match");
    }
  }

}
