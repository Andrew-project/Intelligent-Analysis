import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {isNullOrUndefined} from 'util';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit, AfterViewInit {
  constructor (private router: Router) {
  }

  ngOnInit () {
    // if (isNullOrUndefined(localStorage.getItem('userInfo'))) {
    //     this.router.navigate(['admin/login']);
    //
    //     swal('您没有权限访问', '请重新登录', 'warning');
    // }
  }

  ngAfterViewInit (): void {
    setTimeout(() => {
      require('assets/js/bootstrap.min.js');
      require('assets/js/plugins/metisMenu/jquery.metisMenu.js');
      require('assets/js/plugins/slimscroll/jquery.slimscroll.min.js');
      require('assets/js/inspinia.js');
      // require('assets/js/plugins/pace/pace.js');
      require('assets/js/plugins/sweetalert/sweetalert.min.js');
    }, 1000);
  }
}
