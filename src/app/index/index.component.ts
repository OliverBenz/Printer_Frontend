import { History } from './../classes/history';
import { PrintsService } from './../services/prints.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public prints = true;

  public history: Array<History> = [];

  constructor(
    private printsService: PrintsService
  ) { }

  ngOnInit() {
    this.printsService.getHistory();

    this.printsService.history.subscribe(data => {
      if(data){
        this.history = data;
        this.prints = true;
      }
      else{
        this.prints = false;
      }
    });
  }

}
