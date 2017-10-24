import {Location} from '@angular/common';
import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-index-side',
  templateUrl: './index-side.component.html',
  styleUrls: ['./index-side.component.scss']
})
export class IndexSideComponent implements OnInit, AfterViewInit, OnDestroy {

  subscription: Subscription;
  imgSubscription: Subscription;
  sideRouting: Array<any>= [];
  sidePath: string;

  constructor (private router: Router,
               private location: Location) {
  }

  ngOnInit () {
    const pathArr = this.location.path().toString().split('/');
    pathArr.splice(0, 1);
    this.sidePath = pathArr.join('/');
    this.sideRouting.forEach((item) => {
      item.subRouting.forEach((subItem, idx) => {
        subItem.sideColor = '';
        if (subItem.path === this.sidePath) {
          subItem.sideColor = 'color-white';
        }
      });
    });
  }

  onSignOut () {
    localStorage.clear();
  }

  onUpdatePassword () {
    localStorage.clear();
  }

  ngAfterViewInit () {

  }

  onClickSide (itemIdx: number, index: number) {
   this.sideRouting.forEach((item) => {
     item.subRouting.map((subItem) =>
       subItem.sideColor = '');
   });
   this.sideRouting[itemIdx].subRouting[index].sideColor = 'color-white';
  }

  ngOnDestroy () {
    try {
      this.subscription.unsubscribe();
      this.imgSubscription.unsubscribe();
    } catch (e) {}
  }
}
