import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Http, Response} from '@angular/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {environment} from '../../../../environments/environment';
import {JstreePluginsComponent} from '../../../components/jstree-plugins/jstree-plugins.component';
import {HttpInterceptor} from '../../../services/http/http-interceprot.service';

@Component({
  selector: 'app-update-portrait',
  templateUrl: './update-portrait.component.html',
  styleUrls: ['./update-portrait.component.scss']
})
export class UpdatePortraitComponent implements OnInit, OnDestroy {
  @ViewChild('jsTreeRef') jsTreeRef: JstreePluginsComponent;
  isEchart = false;
  jsTreeData: any = {
    data: []
  };
  dataInfo: any;
  jsTreeDetail: any = {};
  treeInfo: any = {};
  echartOpt: any;
  isShowLoading = false;
  subArr: Subscription[] = [];
  id = -1;
  colors: Array<any> = ['#84BEF0', '#ED8A58', '#FEC24B', '#77d7bb', '#97c5ff',
    '#b9b9f1', '#f4b99b', '#feda93', '#feda93', '#15a078', '#4180d1',
    '#55aefa', '#7373c4', '#f6702c', '#db9e27', '#bbebdd', '#c1eed3', '#cbe2ff', '#daebfa',
    '#dcdcf8', '#fadccd', '#ffedc9', '#93d4ad', '#a0bfe8', '#aad6fc', '#b9b9e1', '#fab795',
    '#edce93', '#ef9191', '#7fe0e0', '#ffbfbf', '#b1e0ea', '#7fafbe', '#ccf3f3', '#ffe6e6', '#e0f3f7',
    '#ccdfe5'];

  constructor (private route: ActivatedRoute,
               private router: Router,
               private http: Http,
               private httpOpt: HttpInterceptor) {
  }

  ngOnInit () {
    this.id = parseInt(this.route.snapshot.params['id'], 0);
    this.isShowLoading = true;
    const sub: Subscription = this.http.get(environment.baseUrl + 'api/echo/portrait/v1/template/' +
      this.id + '/analysis/basic', this.httpOpt)
      .map((response: Response) => response.json())
      .subscribe(
        (res: any) => {
          this.isShowLoading = false;
          if (res.result.success) {
            this.dataInfo = res.data;
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

  changeTab (idx: number) {
    this.isEchart = idx === 4;
    if (idx === 4) {
      this.echartOpt = this.dataInfo.distribution;
    } else if (idx === 5) {
      if (this.jsTreeData.data.length === 0) {
        this.initTree();
      }
    }
  }

  initTree () {
    this.isShowLoading = true;
    const sub: Subscription = this.http.get(environment.baseUrl + 'api/echo/portrait/v1/template/' +
      this.id + '/algo/tree', this.httpOpt.initRequestOptions())
      .map((response: Response) => response.json())
      .subscribe(
        (res: any) => {
          this.isShowLoading = false;
          if (res.result.success) {
            this.jsTreeDetail = res.data.tree_detail;
            res.data.tree_node.forEach(item => {
              if (item.id === 'ROOT') {
                item.state['selected'] = true;
                this.treeInfo = this.jsTreeDetail['ROOT'];
              }
            });
            this.jsTreeData.data = res.data.tree_node;
            this.jsTreeRef.initJsTree(this.jsTreeData);
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

  getTreeInfo (e) {
    const id = JSON.parse(e).ids[0];
    this.treeInfo = this.jsTreeDetail[id];
  }

  searchTree (value) {
    this.jsTreeRef.searchTree(value);
  }

  ngOnDestroy () {
    for (const sub of this.subArr) {
      try {
        sub.unsubscribe();
      } catch (e) {}
    }
  }

}
