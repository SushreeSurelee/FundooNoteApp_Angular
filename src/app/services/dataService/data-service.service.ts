import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private info = new Subject<any>();
  public store = this.info.asObservable();

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  sendMessage(message: string) {
    this.messageSource.next(message)
  }

  nextDataUpdate(text:any){
    this.info.next(text);
  }
}
