import {Component, OnDestroy, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpInterceptor} from '../../services/http/http-interceprot.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginInfo: any = {
    name: '',
    password: ''
  };
  isShow = false;
  subscriptionArr: Subscription[] = [];

  constructor (private router: Router,
               private http: Http,
               private httpOpt: HttpInterceptor) {
  }

  ngOnInit () {

  }

  onSubmit () {
    localStorage.clear();
    this.isShow = true;
    const sub: Subscription = this.http.post(environment.baseUrl + 'api/echo/v1/login/name-password',
      this.loginInfo, this.httpOpt.initRequestOptions())
      .map((response: Response) => response.json())
      .subscribe(
        (res: any) => {
          this.isShow = false;
          if (res.result.success) {
            localStorage.setItem('userInfo', JSON.stringify(res.data));
            localStorage.setItem('token', res.data.token);
            if (res.data.products) {
              location.href = '/portrait/' + res.data.products[0].name + '/portrait-manage';
            } else {
              location.href = '';
            }
          } else {
            swal('登录失败', res.result.displayMsg, 'warning');
          }
        },
        (error: any) => {
          this.isShow = false;
          swal('请求失败', error, 'error');
        }
      );
    this.subscriptionArr.push(sub);
  }

  ngOnDestroy () {
    for (const sub of this.subscriptionArr) {
      try {
        sub.unsubscribe();
      } catch (e) {}
    }
  }
}
