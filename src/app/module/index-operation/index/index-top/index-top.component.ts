import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';


@Component({
  selector: 'app-index-top',
  templateUrl: './index-top.component.html',
  styleUrls: ['./index-top.component.scss']
})
export class IndexTopComponent implements OnInit, OnDestroy {
  constructor () { }

  ngOnInit () {
  }

  onSignOut () {
    // this.router.navigate([this.userInfo.userInfo.authority+'/login']);
    localStorage.clear();
  }

  ngOnDestroy () {

  }
}
