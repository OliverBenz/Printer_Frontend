import { Component, OnInit } from '@angular/core';
import { PrintsService } from './../../services/prints.service';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-acchistory',
  templateUrl: './acchistory.component.html',
  styleUrls: ['./acchistory.component.css']
})
export class AcchistoryComponent implements OnInit {

  public history: Array<History> = [];
  public historyExists = true;

  constructor(
    private printsService: PrintsService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.printsService.getUserHistory(this.authService.getSessionId());

    this.printsService.history.subscribe(data => {
      if(data){
        this.history = data;
        this.historyExists = true;
      }
      else{
        this.historyExists = false;
      }
    })
  }

}
