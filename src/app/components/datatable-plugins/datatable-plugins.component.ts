import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-datatable-plugins',
  templateUrl: './datatable-plugins.component.html',
  styleUrls: ['./datatable-plugins.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatatablePluginsComponent implements OnInit {

  @Input() inputOptions: any;
  plugins: any;
  @Output() pageClickEve = new EventEmitter<any>();

  constructor (private elementRef: ElementRef) {
  }

  ngOnInit () {
  }

  initDatatable (tableOpt) {
    const vm = this;
    $(this.elementRef.nativeElement.querySelector('.table')).hide();
    setTimeout(() => {
      $(this.elementRef.nativeElement.querySelector('.table')).DataTable().destroy();
      $.fn.dataTable.ext.errMode = function (s, h, m) {};
      $(this.elementRef.nativeElement.querySelector('.table')).DataTable({
        pageLength: tableOpt.pageLength || 10,
        lengthMenu: [3, 5, 10, 25, 50, 100],
        responsive: false,
        search: {
          search: this.inputOptions.options['searchData']
        },
        searching: tableOpt.searching || false,
        order: tableOpt['initSort'],
        data: tableOpt.localData,
        createdRow: (row) => {
          for (let i = 0; i < tableOpt['columns'].length; i++) {
            $('td', row).eq(i).css('vertical-align', 'middle');
            $('td', row).eq(i).css('text-align', 'center');
          }
        },
        columns: tableOpt.columns,
        serverSide: tableOpt.isServer,
        processing: true,
        ajax: {
          contentType: 'application/json; charset=utf-8',
          dataType: 'json',
          type: 'get',
          url: tableOpt.ajaxOpt.url,
          beforeSend: (request) => {
            request.setRequestHeader('Authorization', tableOpt.ajaxOpt.token);
            request.setRequestHeader('Accept', 'application/json');
            request.setRequestHeader('Access-Control-Allow-Origin', '*');
            request.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            request.setRequestHeader('Access-Control-Allow-Headers', 'X-Requested-With');
            request.setRequestHeader('Content-Type', 'application/json');
            return tableOpt.isServer;
          },
          data: tableOpt.ajaxOpt.addParams,
          dataSrc: function (res) {
            if (!res.result.success) {
              swal('请求失败', res.result.displaymsg, 'warning');
              return [];
            } else {
              if (isNullOrUndefined(res.data[tableOpt.ajaxOpt.dataSrc])) {
                res.data[tableOpt.ajaxOpt.dataSrc] = [];
              }
              return res.data[tableOpt.ajaxOpt.dataSrc];
            }
          }
        },
        dom: '<"html5buttons"B>lTfgitp',
        'language': {
          'emptyTable': '没有数据',
          // 'loadingRecords': '加载中...',
          'processing': '查询中...',
          'search': '检索:',
          'lengthMenu': '每页 _MENU_ ',
          'zeroRecords': '没有数据',
          'paginate': {
            'first': '第一页',
            'last': '最后一页',
            'next': '',
            'previous': ''
          },
          'info': '第 _PAGE_ 页 / 总 _PAGES_ 页',
          'infoEmpty': '没有数据',
          'infoFiltered': '(过滤总件数 _MAX_ 条)'
        },
        buttons: []
      });
      $(this.elementRef.nativeElement.querySelector('table')).show();

      if (tableOpt.isHideSearch) {
        $(this.elementRef.nativeElement.querySelector('.dataTables_filter')).hide();
      }

      this.hideColInfo(tableOpt);
      this.elementRef.nativeElement.querySelector('.dataTables_paginate').style = 'margin-top:20px;';
      // page变化
      $(this.elementRef.nativeElement.querySelector('table')).on('draw.dt', () => {
        this.pageClickEve.emit();
        this.hideColInfo(tableOpt);
      });
    }, 100);
  }

  hideColInfo (tableOpt) {
    if (!isNullOrUndefined(tableOpt.hideIdxArr) && tableOpt.hideIdxArr.length > 0) {
      tableOpt.hideIdxArr.forEach((idx) => {
        this.hideCol(idx);
      });
    }
  }

  hideCol (idx) {
    $(this.elementRef.nativeElement.querySelectorAll('th')[idx]).addClass('display-none');
    const tds = $(this.elementRef.nativeElement.querySelectorAll('tr'));
    for (const td of tds) {
      $(td).find('td:eq(' + idx + ')').addClass('display-none');
    }
    this.elementRef.nativeElement.querySelector('table').style.width = '100%';
  }

}
