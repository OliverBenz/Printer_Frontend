import { History } from './../classes/history';
import { HistoryService } from './../services/history.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public history: Array<History> = [];

  constructor(
    private historyService: HistoryService
  ) { }

  ngOnInit() {
    this.historyService.getHistory();

    this.historyService.history.subscribe(data => {
      this.history = data;
    })
  }

}
