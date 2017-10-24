import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

// echarts = require('assets/js/plugins/echarts/echarts.js');
@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.scss']
})
export class EchartsPluginsComponent implements OnInit {

  @Input() inputOptions: any;

  constructor (private elementRef: ElementRef) {
  }

  ngOnInit () {
    // this.initOption();
  }

  // initOption() {
  //   console.log()
  //   if (this.inputOptions) {
  //     this.clearOption();
  //   }
  //   $.get('assets/json/map/china.json', (chinaJson) => {
  //     echarts.registerMap('china', chinaJson);
  //     let opt = echarts.init(this.elementRef.nativeElement.querySelector('div'));
  //     opt.setOption(this.inputOptions.options);
  //     Observable.fromEvent(window, 'resize').subscribe((event) => {
  //       opt.resize();
  //     });
  //   });
  // }

  initOption (options) {
    const opt = echarts.init(this.elementRef.nativeElement.querySelector('div'));
    // opt.dispose(options);
    opt.setOption(options);
    Observable.fromEvent(window, 'resize').subscribe((event) => {
      opt.resize();
    });
  }
}
