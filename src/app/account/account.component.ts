import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { LinksService } from './../services/links.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  public admin = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private linksService: LinksService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    if(!this.authService.checkSessionId()){
      this.router.navigate(['/login']);
    }
    this.checkGroup();
  }

  private checkGroup(){
    let url = this.linksService.getUrl() + "/user/group/";

    this.http.get<any>(url + this.authService.getSessionId(), httpOptions).subscribe(data => {
      if(data.data == "Administrator"){
        this.admin = true;
      }
    });
  }
}
