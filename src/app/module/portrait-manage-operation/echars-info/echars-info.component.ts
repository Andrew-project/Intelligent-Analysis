import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {EchartsPluginsComponent} from '../../../components/echarts-plugins/echarts.component';

@Component({
  selector: 'app-echars-info',
  templateUrl: './echars-info.component.html',
  styleUrls: ['./echars-info.component.scss']
})
export class EcharsInfoComponent implements OnInit, OnChanges {
  @ViewChild('tab_e_ref') tab_e_ref: EchartsPluginsComponent;
  @ViewChild('tab_i_ref') tab_i_ref: EchartsPluginsComponent;
  @ViewChild('tab_d_ref') tab_d_ref: EchartsPluginsComponent;
  @ViewChild('tab_b_ref') tab_b_ref: EchartsPluginsComponent;
  @ViewChild('tab_l_ref') tab_l_ref: EchartsPluginsComponent;
  @ViewChild('tab_t_ref') tab_t_ref: EchartsPluginsComponent;
  @Input() isNow: boolean = false;
  @Input() inputOpt: any;
  data: any;
  colors: Array<any> = ['#1dbc8e', '#32C86E', '#529EFF', '#84BEF0', '#8A8AE7', '#ED8A58',
    '#FEC24B', '#FF4040', '#00c1c1', '#64c1d5', '#00f57d', '#77d7bb', '#84dea8', '#97c5ff',
    '#b5d8f6', '#b5d8f6', '#b9b9f1', '#f4b99b', '#feda93', '#feda93', '#15a078', '#28a95b', '#4180d1',
    '#55aefa', '#7373c4', '#f6702c', '#db9e27', '#df2323', '#bbebdd', '#c1eed3', '#cbe2ff', '#daebfa',
    '#dcdcf8', '#fadccd', '#ffedc9', '#15a078', '#93d4ad', '#a0bfe8', '#aad6fc', '#b9b9e1', '#fab795',
    '#edce93', '#ef9191', '#7fe0e0', '#ffbfbf', '#b1e0ea', '#7fafbe', '#ccf3f3', '#ffe6e6', '#e0f3f7',
    '#ccdfe5', '#175c98', '#4c4c8c'];

  constructor() {
  }

  ngOnInit() {

  }

  initEchart_e1(tab_ref,l_data, x_data, s0_data, s1_data, text, subtext, y1_max) {
    let option = {
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

  // initBar(tab_ref, l_data, x_data, s0_data, s1_data, text, subtext) {
  //   let option = {
  //     tooltip: {
  //       axisPointer: {
  //         type: 'shadow'
  //       },
  //       trigger: 'axis'
  //     },
  //     legend: {
  //       data: l_data
  //     },
  //     grid: {
  //       right: '10%'
  //     },
  //     xAxis: {
  //       axisTick: {
  //         alignWithLabel: true
  //       },
  //       type: 'category',
  //       data: x_data
  //     },
  //     toolbox: {
  //       feature: {
  //         restore: {
  //           show: true
  //         },
  //         dataView: {
  //           readOnly: false,
  //           show: true
  //         },
  //         saveAsImage: {
  //           show: true
  //         }
  //       }
  //     },
  //     yAxis: [
  //       {
  //         name: l_data[0],
  //         min: 0,
  //         max: 100,
  //         axisLabel: {
  //           formatter: '{value} %'
  //         },
  //         axisLine: {
  //           lineStyle: {
  //             // color: '#d14a61'
  //           }
  //         },
  //         position: 'left',
  //         type: 'value'
  //       },
  //       {
  //         name: l_data[1],
  //         min: 0,
  //         max: 20094,
  //         axisLabel: {
  //           formatter: '{value} 人'
  //         },
  //         axisLine: {
  //           lineStyle: {
  //             // color: '#5793f3'
  //           }
  //         },
  //         position: 'right',
  //         type: 'value'
  //       }
  //     ],
  //     color: this.colors,
  //     series: [
  //       {
  //         type: 'line',
  //         yAxisIndex: 0,
  //         name: l_data[0],
  //         data: s0_data
  //       },
  //       {
  //         type: 'bar',
  //         yAxisIndex: 1,
  //         name: l_data[1],
  //         data: s1_data
  //       }]
  //   };
  //   tab_ref.initOption(option);
  // }

  initEchart_pie(tab_ref, l_data, s_data, text, subtext) {
    let option = {
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
          center: ['50%', '60%'],
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

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isNow']) {
      if (changes['isNow'].currentValue) {
        this.data = changes['inputOpt'].currentValue;
        console.log(this.data);
        this.initEchart_e1(this.tab_e_ref,['所占比例', '覆盖人数'], this.data['用户习惯分析']['使用场景'].x_data,  this.data['用户习惯分析']['使用场景'].s0_data,  this.data['用户习惯分析']['使用场景'].s1_data, this.data['用户习惯分析']['使用场景'].text, this.data['用户习惯分析']['使用场景'].subtext, this.data['用户习惯分析']['使用场景'].y1_max);
        this.changeInfoTab(1);
        this.changeDTab(1);
        this.changeBTab(1);
        this.changeLTab(1);
        this.changeTTab(1);
      }
    }
  }

  changeInfoTab(num: number) {
    if (num === 1) {
      this.initEchart_pie(this.tab_i_ref, this.data['人口学信息']['城市等级'].l_data, this.data['人口学信息']['城市等级'].x0_data, this.data['人口学信息']['城市等级'].text, this.data['人口学信息']['城市等级'].subtext);
    } else if (num === 2) {
      this.initEchart_pie(this.tab_i_ref, this.data['人口学信息']['性别'].l_data, this.data['人口学信息']['性别'].x0_data, this.data['人口学信息']['性别'].text, this.data['人口学信息']['性别'].subtext);
    } else if (num === 3){
      this.initEchart_pie(this.tab_i_ref, this.data['人口学信息']['年龄'].l_data, this.data['人口学信息']['年龄'].x0_data, this.data['人口学信息']['年龄'].text, this.data['人口学信息']['年龄'].subtext);
    } else {
      this.initEchart_pie(this.tab_i_ref, this.data['人口学信息']['职业'].l_data, this.data['人口学信息']['职业'].x0_data, this.data['人口学信息']['职业'].text, this.data['人口学信息']['职业'].subtext);
    }
  }

  changeDTab(num: number) {
    if (num === 1) {
      this.initEchart_pie(this.tab_d_ref, this.data['用户等级']['淘宝等级'].l_data, this.data['用户等级']['淘宝等级'].x0_data, this.data['用户等级']['淘宝等级'].text, this.data['用户等级']['淘宝等级'].subtext);
    } else {
      this.initEchart_pie(this.tab_d_ref, this.data['用户等级']['一淘会员时长'].l_data, this.data['用户等级']['一淘会员时长'].x0_data, this.data['用户等级']['一淘会员时长'].text, this.data['用户等级']['一淘会员时长'].subtext);
    }
  }

  changeBTab(num: number) {
    const vm = this;
    switch (num) {
      case 1:
        vm.initEchart_pie(vm.tab_b_ref, this.data['用户购买']['淘宝成交频次'].l_data,  this.data['用户购买']['淘宝成交频次'].x0_data,  this.data['用户购买']['淘宝成交频次'].text,  this.data['用户购买']['淘宝成交频次'].subtext);
        break;
      case 2:
        vm.initEchart_pie(vm.tab_b_ref, this.data['用户购买']['成交类型'].l_data,  this.data['用户购买']['成交类型'].x0_data,  this.data['用户购买']['成交类型'].text,  this.data['用户购买']['成交类型'].subtext);
        break;
      case 3:
        vm.initEchart_pie(vm.tab_b_ref, this.data['用户购买']['淘宝成交额'].l_data,  this.data['用户购买']['淘宝成交额'].x0_data,  this.data['用户购买']['淘宝成交额'].text,  this.data['用户购买']['淘宝成交额'].subtext);
        break;
      case 4:
        vm.initEchart_e1(vm.tab_b_ref, ['所占比例', '覆盖人数'], this.data['用户购买']['用户购买_重点画像'].x_data, this.data['用户购买']['用户购买_重点画像'].s0_data, this.data['用户购买']['用户购买_重点画像'].s1_data, this.data['用户购买']['用户购买_重点画像'].text, this.data['用户购买']['用户购买_重点画像'].subtext, this.data['用户购买']['用户购买_重点画像'].y1_max);
        break;
      default:
        break;
    }
  }

  changeLTab(num: number) {
    const vm = this;
    switch (num) {
      case 1:
        vm.initEchart_pie(vm.tab_l_ref, this.data['用户访问']['最常下单时段'].l_data, this.data['用户访问']['最常下单时段'].x0_data, this.data['用户访问']['最常下单时段'].text, this.data['用户访问']['最常下单时段'].subtext);
        break;
      case 2:
        vm.initEchart_pie(vm.tab_l_ref, this.data['用户访问']['最常访问时段'].l_data, this.data['用户访问']['最常访问时段'].x0_data, this.data['用户访问']['最常访问时段'].text, this.data['用户访问']['最常访问时段'].subtext);
        break;
      default:
        break;
    }
  }

  changeTTab(num: number) {
    const vm = this;
    switch (num) {
      case 1:
        vm.initEchart_e1(vm.tab_t_ref, ['所占比例', '覆盖人数'], this.data['人生阶段']['人生阶段_重点画像'].x_data, this.data['人生阶段']['人生阶段_重点画像'].s0_data, this.data['人生阶段']['人生阶段_重点画像'].s1_data, this.data['人生阶段']['人生阶段_重点画像'].text, this.data['人生阶段']['人生阶段_重点画像'].subtext, this.data['人生阶段']['人生阶段_重点画像'].y1_max);
        break;
      case 2:
        vm.initEchart_pie(vm.tab_t_ref, this.data['人生阶段']['年代'].l_data,  this.data['人生阶段']['年代'].x0_data,  this.data['人生阶段']['年代'].text,  this.data['人生阶段']['年代'].subtext);
        break;
      default:
        break;
    }
  }

}
