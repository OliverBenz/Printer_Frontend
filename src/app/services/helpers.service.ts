import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelpersService {
  public fileSource = new BehaviorSubject<any>(null);
  file = this.fileSource.asObservable();

  constructor() { }
}
