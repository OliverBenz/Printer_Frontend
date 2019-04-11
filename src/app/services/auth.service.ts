import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private cookieService: CookieService,
  ) { }

  public storeSessionId(sessionId: string){
    if(!this.checkSessionId()){
      this.cookieService.set('sessionId', sessionId);
      // location.reload();
    }
    else{
      return;
    }
  }

  public getSessionId(){
    if(this.checkSessionId()){
      return this.cookieService.get('sessionId');
    }
    else{
      return;
    }
  }

  public checkSessionId(){
    return this.cookieService.check('sessionId');
  }

  public removeSessionId(){
    this.cookieService.delete('sessionId');
    // location.reload();
  }

}
