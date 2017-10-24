import {Injectable} from '@angular/core';

@Injectable()
export class SweetAlertService {
  alertClass: {} = {
    title: '提醒',
    text: '确定进行此操作吗？',
    type: 'info',
    showCancelButton: true,
    closeOnConfirm: false,
    animation: 'slide-from-top',
    disableButtonsOnConfirm: true,
    confirmLoadingButtonColor: '#DD6B55',
    confirmButtonColor: '#DD6B55',
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    html: false,
    imageUrl: null
  };

  constructor () {
  }

  showALert (options, cbOK ?: (response: any) => void) {
    const option: {} = Object.assign(this.alertClass, options);
    swal(option, cbOK);
  }

  hide () {
    swal.close();
  }
}
