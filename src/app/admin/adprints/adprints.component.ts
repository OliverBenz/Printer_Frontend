import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adprints',
  templateUrl: './adprints.component.html',
  styleUrls: ['./adprints.component.css']
})
export class AdprintsComponent implements OnInit {
  public jobs = [];

  constructor() { }

  ngOnInit() {
  }
}
