import {Location} from '@angular/common';
import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-index-side',
  templateUrl: './index-side.component.html',
  styleUrls: ['./index-side.component.scss']
})
export class IndexSideComponent implements OnInit {
  userInfo: any;

  constructor (private router: Router,
               private location: Location,
               private elementRef: ElementRef) {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
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
    this.router.navigateByUrl('/login');
  }

  onClickSide (index: number) {
    this.elementRef.nativeElement.querySelectorAll('.side_color').forEach((item, idx) => {
      item.style['color'] = '';
      if (idx === index) {
       item.style['color'] = '#ffffff';
     }
   })
  }
}
