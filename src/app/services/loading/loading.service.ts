import { Injectable } from '@angular/core';
import {Observable, Observer} from 'rxjs/Rx';

@Injectable()
export class LoadingService {
  engineStatus: Observable<boolean>;
  private observer: Observer<boolean>;

  constructor () {
    this.engineStatus = new Observable<boolean>(observer => this.observer = observer).share();
  }

  show () {
    this.observer.next(true);
    return true;
  }

  hide () {
    this.observer.next(false);
    return false;
  }

}
