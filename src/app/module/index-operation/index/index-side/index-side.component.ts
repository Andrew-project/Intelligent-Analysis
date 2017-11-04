import {Location} from '@angular/common';
import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RoutingCenterService} from '../../../../services/routing-center/routing-center.service';


@Component({
  selector: 'app-index-side',
  templateUrl: './index-side.component.html',
  styleUrls: ['./index-side.component.scss']
})
export class IndexSideComponent implements OnInit {
  userInfo: any;
  routing = [];

  constructor (private router: Router,
               private location: Location,
               private routingCenter: RoutingCenterService) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
    this.routing = routingCenter.getRouting();
  }

  ngOnInit () {
    const pathArr = this.location.path().toString().split('/');
    const path = pathArr.slice(0, 4).join('/');
    this.routing.forEach((item) => {
        item.sideColor = '';
        if (item.path === path) {
          item.sideColor = 'color-white';
        }
      });
  }

  onSignOut () {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  onClickSide (index: number) {
    this.routing.forEach((item) => {
      item.sideColor = '';
    });
    this.routing[index].sideColor = 'color-white';
  }
}
