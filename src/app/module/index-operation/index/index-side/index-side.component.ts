import {Location} from '@angular/common';
import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
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
               private location: Location,
               private elementRef: ElementRef) {
  }

  ngOnInit () {
    const pathArr = this.location.path().toString().split('/');
    pathArr.splice(0, 1);
    if (pathArr.filter(item => item === 'portrait-manage').length > 0) {
      this.elementRef.nativeElement.querySelectorAll('.side_color')[0].style.color = '#ffffff';
    }
  }

  onSignOut () {
    localStorage.clear();
  }


  ngAfterViewInit () {

  }

  onClickSide (index: number) {
    console.log(index)
   this.elementRef.nativeElement.querySelectorAll('.side_color').forEach((item, idx) => {
      console.log(idx)
     item.style['color'] = '';
     if (idx === index) {
       item.style['color'] = '#ffffff';
     }
   })
  }

  ngOnDestroy () {
    try {
      this.subscription.unsubscribe();
      this.imgSubscription.unsubscribe();
    } catch (e) {}
  }
}
