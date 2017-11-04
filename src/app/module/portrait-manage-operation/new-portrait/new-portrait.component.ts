import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Http, Response} from '@angular/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {environment} from '../../../../environments/environment';
import {JstreePluginsComponent} from '../../../components/jstree-plugins/jstree-plugins.component';
import {HttpInterceptor} from '../../../services/http/http-interceprot.service';
import {isNullOrUndefined} from 'util';
import {Observable} from 'rxjs/Observable';
import {Location} from '@angular/common';

@Component({
  selector: 'app-new-portrait',
  templateUrl: './new-portrait.component.html',
  styleUrls: ['./new-portrait.component.scss']
})
export class NewPortraitComponent implements OnInit, OnDestroy {
  @ViewChild('filterTreeRef') filterTreeRef: JstreePluginsComponent;
  @ViewChild('featureTreeRef') featureTreeRef: JstreePluginsComponent;
  info: any = {
    name: '',
    desc: '',
    filter: [],
    feature: [],
    support: 20
  };
  type = '';
  filterIds: Array<any> = [];
  featureIds: Array<any> = [];
  isShowLoading = false;
  editId = -1;
  subArr: Subscription[] = [];

  constructor(private http: Http,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location,
              private httpOpt: HttpInterceptor) {
    const urlArray = location.path().split('/');
    this.type = urlArray[2];
  }

  getEditReq(id): Observable<any> {
    return this.http.get(environment.baseUrl + 'api/echo/portrait/v1/template/' + id +
      '/setting', this.httpOpt.initRequestOptions())
      .map((response: Response) => response.json())
  }

  getTreeReq(): Observable<any> {
    return this.http.get(environment.baseUrl + 'api/echo/portrait/v1/product/' + this.type + '/template/candidate', this.httpOpt.initRequestOptions())
      .map((response: Response) => response.json());
  }

  ngOnInit () {
    let services;
    if (!isNullOrUndefined(this.route.queryParams['value'].editId)) {
      this.editId = parseInt(this.route.queryParams['value'].editId, 0);
      services = Observable.combineLatest(this.getEditReq(this.editId), this.getTreeReq());
    } else {
      services = Observable.combineLatest(this.getTreeReq());
    }
    services.subscribe(
      (res: any) => {
        if (this.editId > 0) {
          if (res[0].result.success) {
            this.info = Object.assign(res[0].data);
          } else {
            if (res[0].result.code === 401 || res[0].result.code === 403) {
              this.router.navigateByUrl('/login');
              swal('请求失败', res[0].result.displayMsg, 'warning');
            } else if (res[0].result.code === 500) {
              swal('服务器错误', res[0].result.displayMsg, 'error');
            } else {
              swal('请求失败', res[0].result.displayMsg, 'warning');
            }
          }
          if (res[1].result.success) {
            this.filterIds = res[1].data.filterDB;
            this.featureIds = res[1].data.featureDB;
            res[1].data.filter.forEach(item => {
              if (this.info.filter.filter(fItem => fItem === item.id).length > 0) {
                item['state']['selected'] = true;
              }
            });
            res[1].data.feature.forEach(item => {
              if (this.info.feature.filter(fItem => fItem === item.id).length > 0) {
                item['state']['selected'] = true;
              }
            });
            const filterOpt = {
              isCheckbox: true,
              data: res[1].data.filter
            };
            const featureOpt = {
              isCheckbox: true,
              data: res[1].data.feature
            };
            this.filterTreeRef.initJsTree(filterOpt);
            this.featureTreeRef.initJsTree(featureOpt);
          } else {
            if (res[1].result.code === 401 || res[1].result.code === 403) {
              this.router.navigateByUrl('/login');
              swal('请求失败', res[1].result.displayMsg, 'warning');
            } else if (res[1].result.code === 500) {
              swal('服务器错误', res[1].result.displayMsg, 'error');
            } else {
              swal('请求失败', res[1].result.displayMsg, 'warning');
            }
          }
        } else {
          if (res[0].result.success) {
            this.filterIds = res[0].data.filterDB;
            this.featureIds = res[0].data.featureDB;
            const filterOpt = {
              isCheckbox: true,
              data: res[0].data.filter
            };
            const featureOpt = {
              isCheckbox: true,
              data: res[0].data.feature
            };
            this.filterTreeRef.initJsTree(filterOpt);
            this.featureTreeRef.initJsTree(featureOpt);
          } else {
            if (res[0].result.code === 401 || res[0].result.code === 403) {
              this.router.navigateByUrl('/login');
              swal('请求失败', res[0].result.displayMsg, 'warning');
            } else if (res[0].result.code === 500) {
              swal('服务器错误', res[0].result.displayMsg, 'error');
            } else {
              swal('请求失败', res[0].result.displayMsg, 'warning');
            }
          }
        }
      },
      (error: any) => {
        swal('请求失败', error, 'warning');
      }
    );
    // this.isShowLoading = true;
    // const sub1: Subscription = this.http.get(environment.baseUrl + 'api/echo/portrait/v1/template/' + this.editId +
    //   '/setting', this.httpOpt.initRequestOptions())
    //   .map((response: Response) => response.json())
    //   .subscribe(
    //     (res: any) => {
    //       this.isShowLoading = false;
    //       if (res.result.success) {
    //         this.info = Object.assign(res.data);
    //       } else {
    //         if (res.result.code === 401 || res.result.code === 403) {
    //           this.router.navigateByUrl('/login');
    //           swal('请求失败', res.result.msg, 'warning');
    //         } else if (res.result.code === 500) {
    //           swal('服务器错误', res.result.msg, 'error');
    //         } else {
    //           swal('请求失败', res.result.displayMsg, 'warning');
    //         }
    //       }
    //     },
    //     (error: any) => {
    //       this.isShowLoading = false;
    //       swal('请求错误', error, 'error');
    //     }
    //   );
    // this.subArr.push(sub1);
    // }
    // this.isShowLoading = true;
    // const sub: Subscription = this.http.get(environment.baseUrl + 'api/echo/portrait/v1/template/candidate', this.httpOpt.initRequestOptions())
    //   .map((response: Response) => response.json())
    //   .subscribe(
    //     (res: any) => {
    //       this.isShowLoading = false;
    //       if (res.result.success) {
    //         this.filterIds = res.data.filterDB;
    //         this.featureIds = res.data.featureDB;
    //         res.data.filter.forEach(item => {
    //           if (this.info.filter.filter(fItem => fItem === item.id).length > 0) {
    //             item['state']['selected'] = true;
    //           }
    //         });
    //         res.data.feature.forEach(item => {
    //           if (this.info.feature.filter(fItem => fItem === item.id).length > 0) {
    //             item['state']['selected'] = true;
    //           }
    //         });
    //         const filterOpt = {
    //           isCheckbox: true,
    //           data: res.data.filter
    //         };
    //         const featureOpt = {
    //           isCheckbox: true,
    //           data: res.data.feature
    //         };
    //         this.filterTreeRef.initJsTree(filterOpt);
    //         this.featureTreeRef.initJsTree(featureOpt);
    //       } else {
    //         if (res.result.code === 401 || res.result.code === 403) {
    //           this.router.navigateByUrl('/login');
    //           swal('请求失败', res.result.msg, 'warning');
    //         } else if (res.result.code === 500) {
    //           swal('服务器错误', res.result.msg, 'error');
    //         } else {
    //           swal('请求失败', res.result.displayMsg, 'warning');
    //         }
    //       }
    //     },
    //     (error: any) => {
    //       this.isShowLoading = false;
    //       swal('请求错误', error, 'error');
    //     }
    //   );
    // this.subArr.push(sub);
  }

  getFeature (e) {
    this.info.feature = [];
    const ids = JSON.parse(e).ids;
    ids.forEach(id => {
      if (this.featureIds.filter(ID => ID === id).length !== 0) {
        this.info.feature.push(id);
      }
    });
  }

  getFilter(e) {
    this.info.filter = [];
    const ids = JSON.parse(e).ids;
    ids.forEach(id => {
      if (this.filterIds.filter(ID => ID === id).length !== 0) {
        this.info.filter.push(id);
      }
    });
  }

  onAdd() {
    console.log(this.info);
    this.isShowLoading = true;
    let httpReq;
    if (this.editId > 0) {
      httpReq = this.http.patch(environment.baseUrl + 'api/echo/portrait/v1/product/' + this.type + '/template/' + this.editId, this.info, this.httpOpt.initRequestOptions());
    } else {
      httpReq = this.http.post(environment.baseUrl + 'api/echo/portrait/v1/product/' + this.type + '/template', this.info, this.httpOpt.initRequestOptions());
    }
    const sub: Subscription = httpReq
      .map((response: Response) => response.json())
      .subscribe(
        (res: any) => {
          this.isShowLoading = false;
          if (res.result.success) {
            if (this.editId > 0) {
              swal('修改成功', '', 'success');
            } else {
              swal('新建成功', '', 'success');
            }
            this.router.navigate(['../'], {relativeTo: this.route});
          } else {
            if (res.result.code === 401 || res.result.code === 403) {
              this.router.navigateByUrl('/login');
              swal('请求失败', res.result.displayMsg, 'warning');
            } else if (res.result.code === 500) {
              swal('服务器错误', res.result.displayMsg, 'error');
            } else {
              swal('请求失败', res.result.displayMsg, 'warning');
            }
          }
        },
        (error: any) => {
          this.isShowLoading = false;
          swal('请求错误', error, 'error');
        }
      );
    this.subArr.push(sub);
  }

  ngOnDestroy () {
    for (const sub of this.subArr) {
      try {
        sub.unsubscribe();
      } catch (e) {
      }
    }
  }
}
