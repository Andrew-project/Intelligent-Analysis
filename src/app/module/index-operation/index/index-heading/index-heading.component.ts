import {Location} from '@angular/common';
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {RoutingCenterService} from '../../../../services/routing-center/routing-center.service';

@Component({
  selector: 'app-index-heading',
  templateUrl: './index-heading.component.html',
  styleUrls: ['./index-heading.component.scss']
})
export class IndexHeadingComponent implements OnInit, OnDestroy {
  subscribe: Subscription;
  routing: Array<any> = [];

  constructor (private router: Router, private location: Location, private routingCenter: RoutingCenterService) {
    this.subscribe = this.router.events.subscribe(event => {
      this.routing = routingCenter.getHeadingRouting(decodeURI(location.path()));
      this.routing.forEach((item, idx) => {
        if (item.notLink && item.path === item.name) {
          this.routing.splice(idx, 1);
        }
      });
    });
  }


  ngOnInit () {
  }

  ngOnDestroy (): void {
    try {
      this.subscribe.unsubscribe();
    } catch (e) {
    }
  }

}
