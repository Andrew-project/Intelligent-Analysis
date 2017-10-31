import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Http, Response} from '@angular/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {environment} from '../../../../environments/environment';
import {DatatablePluginsComponent} from '../../../components/datatable-plugins/datatable-plugins.component';
import {formatDate} from '../../../services/functions/date';
import {HttpInterceptor} from '../../../services/http/http-interceprot.service';
import {SweetAlertService} from '../../../services/sweet-alert/sweet-alert.service';

@Component({
  selector: 'app-portrait-manage',
  templateUrl: './portrait-manage.component.html',
  styleUrls: ['./portrait-manage.component.scss']
})
export class PortraitManageComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('listRef') listRef: DatatablePluginsComponent;
  listOpt: any = {
    options: {}
  };
  overview: any = {
    totalUser: 0,
    templateNum: 0
  };
  isShowLoading = false;
  subArr: Subscription[] = [];

  constructor (private elementRef: ElementRef,
               private sweetAlertService: SweetAlertService,
               private router: Router,
               private route: ActivatedRoute,
               private http: Http,
               private httpOpt: HttpInterceptor) {
  }

  ngOnInit () {
    this.listOpt.options = {
      pageLength: 10,
      searching: true,
      titleColumns: ['ID', '名称', '描述', '创建人', '状态', '最新分析时间', '操作'],
      searchData: '',
      initSort: [
        [0, 'asc']
      ],
      columns: [
        {
          'data': 'id',
          'searchable': false,
          'sortable': true
        },
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
            analysisTime === null ? '未运行' : formatDate(analysisTime, 'yyyy-MM-dd hh:mm')
        },
        {
          'data': 'id',
          'searchable': false,
          'sortable': false,
          'render': function (id, type, full, meta) {
            return `<button class="btn btn-sm m-l-xs btn-danger button-del" data-id="${id}">删除</button>
                    <button class="btn btn-sm m-l-xs btn-primary button-start
                      ${full.analysisTime === null ? '' : 'display-none' }" data-id="${id}">开始分析</button>
                      <button class="btn btn-sm m-l-xs btn-info button-edit" data-id="${id}">修改分析条件</button>
                    <button class="btn btn-sm m-l-xs btn-default button-info
                      ${full.analysisTime === null ? 'display-none' : '' }" data-id="${id}">详情</button>`;
          }
        }
      ],
      isServer: false,
      ajaxOpt: {},
      localData: []
    };
    this.isShowLoading = true;
    const sub: Subscription = this.http.get(environment.baseUrl + 'api/echo/portrait/v1/home', this.httpOpt.initRequestOptions())
      .map((response: Response) => response.json())
      .subscribe(
        (res: any) => {
          this.isShowLoading = false;
          if (res.result.success) {
            this.overview = res.data.overview;
            this.listOpt.options['localData'] = res.data.templateList;
            this.listRef.initDatatable(this.listOpt.options);
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

  ngAfterViewInit () {
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
          vm.isShowLoading = true;
          const sub: Subscription = vm.http.delete(environment.baseUrl + 'api/echo/portrait/v1/template/' + id, vm.httpOpt.initRequestOptions())
            .map((response: Response) => response.json())
            .subscribe(
              (res: any) => {
                vm.isShowLoading = false;
                if (res.result.success) {
                  swal('删除成功', '', 'success');
                  const index = vm.listOpt.options['localData'].findIndex(item => item.id === id);
                  vm.listOpt.options['localData'].splice(index, 1);
                  vm.listRef.initDatatable(vm.listOpt.options);
                  vm.overview.templateNum = vm.listOpt.options['localData'].length;
                } else {
                  if (res.result.code === 401 || res.result.code === 403) {
                    vm.router.navigateByUrl('/login');
                    swal('请求失败', res.result.displayMsg, 'warning');
                  } else if (res.result.code === 500) {
                    swal('服务器错误', res.result.displayMsg, 'error');
                  } else {
                    swal('请求失败', res.result.displayMsg, 'warning');
                  }
                }
              },
              (error: any) => {
                vm.isShowLoading = false;
                swal('请求错误', error, 'error');
              }
            );
          vm.subArr.push(sub);
        } else {
          vm.sweetAlertService.hide();
        }
      })
    });

    $(this.elementRef.nativeElement.querySelector('.ibox-content')).on('click', '.button-start', function () {
      const id = parseInt($(this)[0].getAttribute('data-id'), 0);
      vm.isShowLoading = true;
      const sub: Subscription = vm.http.patch(environment.baseUrl +
          'api/echo/portrait/v1/template/' + id + '/analysis', {}, vm.httpOpt.initRequestOptions())
        .map((response: Response) => response.json())
        .subscribe(
          (res: any) => {
            vm.isShowLoading = false;
            if (res.result.success) {
              swal('分析成功', '', 'success');
              const index = vm.listOpt.options['localData'].findIndex(item => item.id === id);
              vm.listOpt.options['localData'][index] = res.data;
              vm.listRef.initDatatable(vm.listOpt.options);
            } else {
              if (res.result.code === 401 || res.result.code === 403) {
                vm.router.navigateByUrl('/login');
                swal('请求失败', res.result.displayMsg, 'warning');
              } else if (res.result.code === 500) {
                swal('服务器错误', res.result.displayMsg, 'error');
              } else {
                swal('请求失败', res.result.displayMsg, 'warning');
              }
            }
          },
          (error: any) => {
            vm.isShowLoading = false;
            swal('请求错误', error, 'error');
          }
        );
      vm.subArr.push(sub);
    });

    $(this.elementRef.nativeElement.querySelector('.ibox-content')).on('click', '.button-edit', function () {
      const id = parseInt($(this)[0].getAttribute('data-id'), 0);
      vm.router.navigate(['./new'], {relativeTo: vm.route, queryParams: {editId: id}});
    });

    $(this.elementRef.nativeElement.querySelector('.ibox-content')).on('click', '.button-info', function () {
      const id = parseInt($(this)[0].getAttribute('data-id'), 0);
      vm.router.navigate(['./update/' + id], {relativeTo: vm.route});
    })
  }

  ngOnDestroy () {
    for (const sub of this.subArr) {
      try {
        sub.unsubscribe();
      } catch (e) {}
    }
  }

}
