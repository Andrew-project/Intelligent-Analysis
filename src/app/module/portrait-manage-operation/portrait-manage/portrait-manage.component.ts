import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DatatablePluginsComponent} from '../../../components/datatable-plugins/datatable-plugins.component';
import {SweetAlertService} from '../../../services/sweet-alert/sweet-alert.service';
import {LoadingService} from '../../../services/loading/loading.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Http} from '@angular/http';
import {HttpInterceptor} from '../../../services/http/http-interceprot.service';
import {environment} from '../../../../environments/environment';

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
      titleColumns: ['名称', '创建人', '状态', '最新分析时间', '操作'],
      searchData: '',
      initSort: [
        [3, 'desc']
      ],
      columns: [
        {
          'data': 'title',
          'searchable': true,
          'sortable': false
        },
        {
          'data': 'name',
          'searchable': true,
          'sortable': false
        },
        {
          'data': 'type',
          'searchable': true,
          'sortable': false,
          'render': (type) =>
            type === 1 ? '分析完成' : '带完善配置'
        },
        {
          'data': 'updatedAt',
          'searchable': false,
          'sortable': true,
          'render': (type) =>
            type === 1 ? '分析完成' : '带完善配置'
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
          id: 1,
          title: '签到用户分析',
          name: '左云龙',
          type: 1,
          updatedAt: 1508837818270
        }
      ]
    };
    this.http.get(environment.baseUrl, this.httpOpt.initRequestOptions())
      .subscribe((res) => {
        console.log(res)
      });
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
