import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {JstreePluginsComponent} from '../../../components/jstree-plugins/jstree-plugins.component';
import jstree_json from '../../../../assets/jstree_json';
import jstree_json_detail from '../../../../assets/jstree_json_detail';
import {LoadingService} from '../../../services/loading/loading.service';
import {ActivatedRoute} from '@angular/router';
import {HttpInterceptor} from '../../../services/http/http-interceprot.service';
import {Http, Response} from '@angular/http';
import {environment} from '../../../../environments/environment';
import detailInfo from '../../../../assets/detail_json';

@Component({
  selector: 'app-update-portrait',
  templateUrl: './update-portrait.component.html',
  styleUrls: ['./update-portrait.component.scss']
})
export class UpdatePortraitComponent implements OnInit {
  @ViewChild('jsTreeRef') jsTreeRef: JstreePluginsComponent;
  isEchart: boolean = false;
  jsTreeData: any = {
    data: []
  };
  dataInfo: any;
  jsTreeDetail: any = {};
  treeInfo: any = {};
  echartOpt: any;
  colors: Array<any> = ['#84BEF0', '#ED8A58', '#FEC24B', '#77d7bb', '#97c5ff',
    '#b9b9f1', '#f4b99b', '#feda93', '#feda93', '#15a078', '#4180d1',
    '#55aefa', '#7373c4', '#f6702c', '#db9e27', '#bbebdd', '#c1eed3', '#cbe2ff', '#daebfa',
    '#dcdcf8', '#fadccd', '#ffedc9', '#93d4ad', '#a0bfe8', '#aad6fc', '#b9b9e1', '#fab795',
    '#edce93', '#ef9191', '#7fe0e0', '#ffbfbf', '#b1e0ea', '#7fafbe', '#ccf3f3', '#ffe6e6', '#e0f3f7',
    '#ccdfe5'];

  constructor(private elementRef: ElementRef,
              private loadingService: LoadingService,
              private route: ActivatedRoute,
              private http: Http,
              private httpOpt: HttpInterceptor) {
    this.jsTreeData.data = jstree_json;
    this.jsTreeDetail = jstree_json_detail;
  }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.params['id'], 0);
    this.dataInfo = detailInfo;
    this.jsTreeRef.initJsTree(this.jsTreeData);
    // this.loadingService.show();
    // this.http.get(environment + 'api/xxx/' + id, this.httpOpt)
    //   .map((response: Response) => response.json())
    //   .subscribe(
    //     (res: any) => {
    //       this.loadingService.hide();
    //       if (res.result.success) {
    //         this.dataInfo = res.data;
    //         this.arrList = res.data;
    //       } else {
    //         swal('请求失败', res.result.displayMsg, 'warning');
    //       }
    //     }
    //   );
  }

  changeTab(isEchart: boolean) {
    this.isEchart = isEchart;
    if (isEchart) {
      this.echartOpt = this.dataInfo.distribution;
    }
  }

  getTreeInfo(e) {
    const id = JSON.parse(e).ids[0];
    this.treeInfo = this.jsTreeDetail[id];
  }

  searchTree(value) {
    this.jsTreeRef.searchTree(value);
  }

}
