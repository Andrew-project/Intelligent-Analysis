import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DatatablePluginsComponent} from '../../../components/datatable-plugins/datatable-plugins.component';
import {SweetAlertService} from '../../../services/sweet-alert/sweet-alert.service';
import {LoadingService} from '../../../services/loading/loading.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Http, Response} from '@angular/http';
import {HttpInterceptor} from '../../../services/http/http-interceprot.service';
import {environment} from '../../../../environments/environment';
import {formatDate} from '../../../services/functions/date';

@Component({
  selector: 'app-portrait-manage',
  templateUrl: './portrait-manage.component.html',
  styleUrls: ['./portrait-manage.component.scss']
})
export class PortraitManageComponent implements OnInit, AfterViewInit {
  @ViewChild('listRef') listRef: DatatablePluginsComponent;
  listOpt: any = {
    options: {}
  };
  overview: any = {
    totalUser: 0,
    templateNum: 0
  };

  constructor(private elementRef: ElementRef,
              private sweetAlertService: SweetAlertService,
              private loadingService: LoadingService,
              private router: Router,
              private route: ActivatedRoute,
              private http: Http,
              private httpOpt: HttpInterceptor) {
  }

  ngOnInit() {
    this.listOpt.options = {
      pageLength: 10,
      searching: true,
      titleColumns: ['名称', '描述', '创建人', '状态', '最新分析时间', '操作'],
      searchData: '',
      initSort: [
        [4, 'desc']
      ],
      columns: [
        {
          'data': 'name',
          'searchable': true,
          'sortable': false
        },
        {
          'data': 'desc',
          'searchable': true,
          'sortable': false
        },
        {
          'data': 'creator',
          'searchable': true,
          'sortable': false
        },
        {
          'data': 'status',
          'searchable': true,
          'sortable': false
        },
        {
          'data': 'analysisTime',
          'searchable': false,
          'sortable': true,
          'render': (analysisTime) =>
            formatDate(analysisTime, 'yyyy-MM-dd hh:mm')
        },
        {
          'data': 'id',
          'searchable': false,
          'sortable': false,
          'render': function (id, type, full, meta) {
            return `<button class="btn btn-sm m-l-xs btn-danger button-del" data-id="${id}">删除</button>
                    <button class="btn btn-sm m-l-xs btn-default button-info" data-id="${id}">详情</button>`;
          }
        }
      ],
      isServer: false,
      ajaxOpt: {},
      localData: [
        {
          "id": 1,
          "name": "签到用户分析",
          "desc": "是对签到用户的分析",
          "creator": "张三",
          "status": "分析完成",
          "analysisTime": 1508644737
        }
      ]
    };
    // this.loadingService.show();
    // this.http.get(environment.baseUrl, this.httpOpt.initRequestOptions())
    //   .map((response: Response) => {
    //     return response.json();
    //   })
    //   .subscribe(
    //     (res: any) => {
    // this.loadingService.hide();
    //       if (res.result.success) {
    //         this.overview = res.data.overview;
    //         this.listOpt.options['localData'] = res.data.templateList;
    //       } else {
    //         swal('请求失败', res.result.displayMsg, 'warning');
    //       }
    //       console.log(res)
    //     }
    //   );
    this.listRef.initDatatable(this.listOpt.options);

  }

  ngAfterViewInit() {
    const vm = this;
    $(this.elementRef.nativeElement.querySelector('.ibox-content')).on('click', '.button-del', function () {
      const id = parseInt($(this)[0].getAttribute('data-id'), 0);
      vm.sweetAlertService.showALert({
        title: '请确定是否删除此条分析',
        text: '',
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }, (confirm: any) => {
        if (confirm) {
          vm.sweetAlertService.hide();
        } else {
          vm.sweetAlertService.hide();
        }
      })
    });

    $(this.elementRef.nativeElement.querySelector('.ibox-content')).on('click', '.button-info', function () {
      const id = parseInt($(this)[0].getAttribute('data-id'), 0);
      vm.router.navigate(['./update/' + id], {relativeTo: vm.route});
    })
  }

}
