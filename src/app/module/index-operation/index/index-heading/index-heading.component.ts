import {Location} from '@angular/common';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-index-heading',
  templateUrl: './index-heading.component.html',
  styleUrls: ['./index-heading.component.scss']
})
export class IndexHeadingComponent implements OnInit, OnDestroy {
  subscribe: Subscription;
  routing: Array<any> = [];

  constructor () {

  }

  ngOnInit () {
  }

  ngOnDestroy (): void {
    try {
      this.subscribe.unsubscribe();
    } catch (e) {}
  }

}
