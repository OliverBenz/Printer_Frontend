import { Component, OnInit } from '@angular/core';
import { LoginService } from './../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  public Login(email: string, password: string){
    this.loginService.login(email, password);
  }

}
