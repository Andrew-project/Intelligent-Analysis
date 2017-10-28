import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Http, Response} from '@angular/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {environment} from '../../../../environments/environment';
import {JstreePluginsComponent} from '../../../components/jstree-plugins/jstree-plugins.component';
import {HttpInterceptor} from '../../../services/http/http-interceprot.service';

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
  filterIds: Array<any> = [];
  featureIds: Array<any> = [];
  isShowLoading = false;
  subArr: Subscription[] = [];

  constructor (private http: Http,
               private router: Router,
               private route: ActivatedRoute,
               private httpOpt: HttpInterceptor) {
  }

  ngOnInit () {
    this.isShowLoading = true;
    const sub: Subscription = this.http.get(environment.baseUrl, this.httpOpt.initRequestOptions())
      .map((response: Response) => response.json())
      .subscribe(
        (res: any) => {
          this.isShowLoading = false;
          if (res.result.success) {
            const filterOpt = {
              isCheckbox: true,
              data: res.data.filter
            };
            const featureOpt = {
              isCheckbox: true,
              data: res.data.feature
            };
            this.filterTreeRef.initJsTree(filterOpt);
            this.featureTreeRef.initJsTree(featureOpt);
            this.filterIds = res.data.filterDB;
            this.featureIds = res.data.featureDB;
          } else {
            if (res.result.code === 401 || res.result.code === 403) {
              this.router.navigateByUrl('/login');
              swal('请求失败', res.result.msg, 'warning');
            } else if (res.result.code === 500) {
              swal('服务器错误', res.result.msg, 'error');
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

  getFeature (e) {
    this.info.feature = [];
    const ids = JSON.parse(e).ids;
    ids.forEach(id => {
      if (this.featureIds.filter(ID => ID === id).length !== 0) {
        this.info.feature.push(id);
      }
    });
  }

  getFilter (e) {
    this.info.filter = [];
    const ids = JSON.parse(e).ids;
    ids.forEach(id => {
      if (this.filterIds.filter(ID => ID === id).length !== 0) {
        this.info.filter.push(id);
      }
    });
  }

  onAdd () {
    console.log(this.info);
    this.isShowLoading = true;
    const sub: Subscription = this.http.post(environment.baseUrl, this.info, this.httpOpt.initRequestOptions())
      .map((response: Response) => response.json())
      .subscribe(
        (res: any) => {
          this.isShowLoading = false;
          if (res.result.success) {
            swal('新建成功', '', 'success');
            this.router.navigate(['../'], {relativeTo: this.route});
          } else {
            if (res.result.code === 401 || res.result.code === 403) {
              this.router.navigateByUrl('/login');
              swal('请求失败', res.result.msg, 'warning');
            } else if (res.result.code === 500) {
              swal('服务器错误', res.result.msg, 'error');
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
