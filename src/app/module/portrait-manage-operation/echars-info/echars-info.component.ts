import {Component, Input, OnChanges, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren} from '@angular/core';
import {EchartsPluginsComponent} from '../../../components/echarts-plugins/echarts.component';

@Component({
  selector: 'app-echars-info',
  templateUrl: './echars-info.component.html',
  styleUrls: ['./echars-info.component.scss']
})
export class EcharsInfoComponent implements OnInit, OnChanges {
  @ViewChildren(EchartsPluginsComponent) tab_ref: QueryList<EchartsPluginsComponent>;
  @Input() isNow = false;
  @Input() inputOpt: any;
  data: any;
  colors: Array<any> = ['#1dbc8e', '#32C86E', '#529EFF', '#84BEF0', '#8A8AE7', '#ED8A58',
    '#FEC24B', '#FF4040', '#00c1c1', '#64c1d5', '#00f57d', '#77d7bb', '#84dea8', '#97c5ff',
    '#b5d8f6', '#b5d8f6', '#b9b9f1', '#f4b99b', '#feda93', '#feda93', '#15a078', '#28a95b', '#4180d1',
    '#55aefa', '#7373c4', '#f6702c', '#db9e27', '#df2323', '#bbebdd', '#c1eed3', '#cbe2ff', '#daebfa',
    '#dcdcf8', '#fadccd', '#ffedc9', '#15a078', '#93d4ad', '#a0bfe8', '#aad6fc', '#b9b9e1', '#fab795',
    '#edce93', '#ef9191', '#7fe0e0', '#ffbfbf', '#b1e0ea', '#7fafbe', '#ccf3f3', '#ffe6e6', '#e0f3f7',
    '#ccdfe5', '#175c98', '#4c4c8c'];

  constructor () {
  }

  ngOnInit () {

  }

  init_line_bar (tab_ref, l_data, x_data, s0_data, s1_data, text, subtext, y1_max) {
    const option = {
      title: {
        text: text,
        subtext: subtext, 'x': 'center'
      },
      tooltip: {
        axisPointer: {
          type: 'shadow'
        },
        trigger: 'axis'
      },
      legend: {
        data: l_data,
        left: 'left',
        orient: 'vertical'
      },
      grid: {
        top: '25%',
        right: '10%'
      },
      xAxis: {
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          rotate: 45,
          margin: 10,
          interval: 0,
          textStyle: {
            color: '#555555',
            fontSize: 14
          }
        },
        type: 'category',
        data: x_data
      },
      toolbox: {
        feature: {
          restore: {
            show: true
          },
          dataView: {
            readOnly: false,
            show: true
          },
          saveAsImage: {
            show: true
          }
        }
      },
      yAxis: [
        {
          name: l_data[0],
          min: 0,
          max: 100,
          axisLabel: {
            formatter: '{value} %'
          },
          axisLine: {
            // lineStyle: {
            //   color: '#d14a61'
            // }
          },
          position: 'left',
          type: 'value'
        },
        {
          name: l_data[1],
          min: 0,
          max: y1_max,
          axisLabel: {
            formatter: '{value} 人'
          },
          axisLine: {
            // lineStyle: {'color': '#5793f3'}
          },
          position: 'right',
          type: 'value'
        }],
      color: this.colors,
      series: [
        {
          type: 'line',
          yAxisIndex: 0,
          name: l_data[0],
          data: s0_data
        },
        {
          type: 'bar',
          yAxisIndex: 1,
          name: l_data[1],
          data: s1_data
        }]
    };

    tab_ref.initOption(option);
  }

  init_pie (tab_ref, l_data, s_data, text, subtext) {
    const option = {
      legend: {
        data: l_data,
        orient: 'vertical',
        left: 'left'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      title: {
        text: text,
        subtext: subtext, 'x': 'center'
      },
      color: this.colors,
      series: [
        {
          center: ['70%', '60%'],
          itemStyle: {
            emphasis:
              {
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                shadowOffsetX: 0,
                shadowBlur: 10
              }
          },
          radius: '55%',
          type: 'pie',
          data: s_data,
          name: '访问来源'
        }]
    };
    tab_ref.initOption(option);
  }

  ngOnChanges (changes: SimpleChanges) {
    if (changes['isNow']) {
      if (changes['isNow'].currentValue) {
        if (changes['inputOpt']) {
          this.data = changes['inputOpt'].currentValue;
          this.initEchart();
        }
      }
    }
  }

  initEchart () {
    setTimeout(() => {
      for (const echart of this.tab_ref['_results']) {
        const services = echart.inputOptions.services;
        for (let i = 0; i < services.length; i++) {
          const service = services[i];
          service['echart'] = echart;
          if (i === 0) {
            if (service.type === 'line-bar') {
              this.init_line_bar(echart, ['所占比例', '覆盖人数'], service.service.x_data,
                service.service.s0_data, service.service.s1_data, service.service.text,
                service.service.subtext, service.service.y1_max);
            } else {
              this.init_pie(echart, service.service.l_data, service.service.x0_data, service.service.text, service.service.subtext);
            }
          }
        }
      }
    })
  }

  changeTab (service) {
    if (service.type === 'line-bar') {
      this.init_line_bar(service.echart, ['所占比例', '覆盖人数'], service.service.x_data,
        service.service.s0_data, service.service.s1_data, service.service.text, service.service.subtext, service.service.y1_max);
    } else {
      this.init_pie(service.echart, service.service.l_data, service.service.x0_data, service.service.text, service.service.subtext);
    }
  }
}
