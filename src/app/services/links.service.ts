import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  // private _url = "http://68.183.218.98:3004";
  private _url = "http://127.0.0.1:3004";

  constructor() { }

  public getUrl(){
    return this._url;
  }
}