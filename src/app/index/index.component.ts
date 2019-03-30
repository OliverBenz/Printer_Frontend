import { Queue } from '../classes/queue';
import { PrintsService } from './../services/prints.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public prints = true;

  public queue: Array<Queue> = [];

  constructor(
    private printsService: PrintsService
  ) { }

  ngOnInit() {
    this.printsService.getQueue();

    this.printsService.queue.subscribe(data => {
      if(data.length > 0){
        this.queue = data;
        this.prints = true;
      }
      else{
        this.prints = false;
      }
    });
  }

}
