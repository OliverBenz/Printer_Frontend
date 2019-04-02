import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) { }

  public login(username, password){
    let url = "http://127.0.0.1:5000/user/login";
    let body = JSON.parse('{"username": "' + username + '", "password": "' + password + '"}');

    this.http.post(url, body, httpOptions).subscribe(result => {
      console.log(result);
    }, error => {
      let val = error.error.text
      if (val && val != "Error"){
        this.authService.storeSessionId(error.error.text);
        this.router.navigate(['account']);
        window.location.reload();  
      }
    });
  }
}
