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

  private _url = "http://127.0.0.1:5000";

  constructor(
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
  ) { }

  public login(email, password){
    let url = this._url + "/user/login";
    let body = JSON.parse('{"email": "' + email + '", "password": "' + password + '"}');

    this.http.post<any>(url, body, httpOptions).subscribe(result => {
      this.authService.storeSessionId(result.data);
      this.router.navigate(['account']);
      window.location.reload();
    }, error => {
      alert(error.error.data);
    });
  }

  public register(name, email, password){
    let url = this._url + "/user/register";
    let body = JSON.parse('{"username": "' + name + '", "email": "' + email + '", "password": "' + password + '"}');

    this.http.post(url, body, httpOptions).subscribe(res => {
      console.log(res);
    }, error => {
      console.log(error);
    })
  }

  public changePassword(pwOld, pwNew){
    let body = JSON.parse('{"passwordOld": "' + pwOld + '", "passwordNew": "' + pwNew + '", "sessionId": "' + this.authService.getSessionId() + '"}');
    this.http.post<any>(this._url + "/user/changepw", body, httpOptions).subscribe(res => {
      this.authService.storeSessionId(res.data);
      this.router.navigate(['account']);
      window.location.reload();
    }, error => {
      console.log(error.error.data);
    });
  }
}
