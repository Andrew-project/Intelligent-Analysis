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

  initEchart_e1(tab_ref,l_data, x_data, s0_data, s1_data) {
    let option = {
      tooltip: {
        axisPointer: {
          type: 'shadow'
        },
        trigger: 'axis'
      },
      legend: {
        data: l_data
      },
      grid: {
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
          max: 20094,
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

  initBar(tab_ref, l_data, x_data, s0_data, s1_data) {
    let option = {
      tooltip: {
        axisPointer: {
          type: 'shadow'
        },
        trigger: 'axis'
      },
      legend: {
        data: l_data
      },
      grid: {
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
            lineStyle: {
              // color: '#d14a61'
            }
          },
          position: 'left',
          type: 'value'
        },
        {
          name: l_data[1],
          min: 0,
          max: 20094,
          axisLabel: {
            formatter: '{value} 人'
          },
          axisLine: {
            lineStyle: {
              // color: '#5793f3'
            }
          },
          position: 'right',
          type: 'value'
        }
      ],
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

  initEchart_pie(tab_ref, l_data, s_data) {
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
        text: '城市等级 分布',
        subtext: '城市等级用户数：19903 \n\n 用户数覆盖占全部用户比例35.99%', 'x': 'center'
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

  initEchart_T(tab_ref, l_data, x_data, s0_data, s1_data) {
    let option = {
      tooltip: {
        axisPointer: {
          type: 'shadow'
        },
        trigger: 'axis'
      },
      legend: {
        data: l_data
      },
      grid: {
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
            lineStyle: {
              // color: '#d14a61'
            }
          },
          position: 'left',
          type: 'value'
        },
        {
          name: l_data[1],
          min: 0,
          max: 20094,
          axisLabel: {
            formatter: '{value} 人'
          },
          axisLine: {
            lineStyle: {
              // color: '#5793f3'
            }
          },
          position: 'right',
          type: 'value'
        }
      ],
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
        }
      ]
    };
    tab_ref.initOption(option);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isNow']) {
      if (changes['isNow'].currentValue) {
        this.initEchart_e1(this.tab_e_ref,['所占比例', '覆盖人数'], ['访问签到', '充值有奖', '猜你喜欢', '生活快囤', '收藏', '超返活动', '限时抢', '超级大牌', '今日榜单', '人气活动', '大额优惠券', '专享券活动', '白菜价'], [0.28931979070483227, 15.574022776238843, 19.704524469067405, 5.940289319790705, 60.1477377654663, 62.936288088642655, 39.569098184056635, 5.441674361341951, 11.892890120036935, 4.161280393967375, 26.635887965527854, 31.615881809787627, 26.21114188981225], [47, 2530, 3201, 965, 9771, 10224, 6428, 884, 1932, 676, 4327, 5136, 4258]);
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
      this.initEchart_pie(this.tab_i_ref, ['二线城市', '三四线城市', '一线城市'], [
        {'name': '二线城市', 'value': 5945},
        {'name': '三四线城市', 'value': 10977},
        {'name': '一线城市', 'value': 2981}
      ]);
    } else if (num === 2) {
      this.initEchart_pie(this.tab_i_ref, ['25至29岁', '18岁以下', '50岁以上', '18至24岁', '35至39岁', '30至34岁', '40至49岁'],
        [{'name': '25至29岁', 'value': 4379},
          {'name': '18岁以下', 'value': 368},
          {'name': '50岁以上', 'value': 1259},
          {'name': '18至24岁', 'value': 2505},
          {'name': '35至39岁', 'value': 3372},
          {'name': '30至34岁', 'value': 4667},
          {'name': '40至49岁', 'value': 3526}]);
    } else {
      this.initEchart_pie(this.tab_i_ref, ['医务人员', '白领', '公务员', '学生'], [{'name': '医务人员', 'value': 197}, {'name': '白领', 'value': 5958}, {
        'name': '公务员',
        'value': 628
      }, {'name': '学生', 'value': 603}]);
    }
  }

  changeDTab(num: number) {
    if (num === 1) {
      this.initEchart_pie(this.tab_d_ref, ['淘宝等级v1_2', '淘宝等级v3_4', '淘宝等级v0', '淘宝等级v5_6'], [
        {'name': '淘宝等级v1_2', 'value': 6077},
        {'name': '淘宝等级v3_4', 'value': 8992},
        {'name': '淘宝等级v0', 'value': 3617},
        {'name': '淘宝等级v5_6', 'value': 1353}
      ]);
    } else {
      this.initEchart_pie(this.tab_d_ref, ['新用户', '老用户', '3到6个月用户'], [{'name': '新用户', 'value': 2511}, {
        'name': '老用户',
        'value': 15179
      }, {'name': '3到6个月用户', 'value': 2404}])
    }
  }

  changeBTab(num: number) {
    const vm = this;
    switch (num) {
      case 1:
        vm.initEchart_pie(vm.tab_b_ref, ['淘宝成交频次中高', '淘宝成交频次中等', '淘宝成交频次高', '淘宝成交频次低', '淘宝成交频次中低'], [{
          'name': '淘宝成交频次中高',
          'value': 4825
        }, {'name': '淘宝成交频次中等', 'value': 3112}, {'name': '淘宝成交频次高', 'value': 8239}, {'name': '淘宝成交频次低', 'value': 1555}, {
          'name': '淘宝成交频次中低',
          'value': 2016
        }]);
        break;
      case 2:
        vm.initEchart_pie(vm.tab_b_ref, ['第三方超级返利', '超级返利', '一淘送', '高佣', '全网送', '普通淘客'], [{'name': '第三方超级返利', 'value': 0}, {
          'name': '超级返利',
          'value': 0
        }, {'name': '一淘送', 'value': 3146}, {'name': '高佣', 'value': 9429}, {'name': '全网送', 'value': 0}, {'name': '普通淘客', 'value': 0}]);
        break;
      case 3:
        vm.initEchart_pie(vm.tab_b_ref, ['淘宝成交额中低', '淘宝成交额中高', '淘宝成交额低', '淘宝成交额高', '淘宝成交额一般'], [{
          'name': '淘宝成交额中低',
          'value': 2374
        }, {'name': '淘宝成交额中高', 'value': 4824}, {'name': '淘宝成交额低', 'value': 1853}, {'name': '淘宝成交额高', 'value': 7526}, {
          'name': '淘宝成交额一般',
          'value': 3394
        }]);
        break;
      case 4:
        vm.initBar(vm.tab_b_ref,['一淘有成交'], ['所占比例', '覆盖人数'], [28.02293196368503], [15495]);
        break;
      default:
        break;
    }
  }

  changeLTab(num: number) {
    const vm = this;
    switch (num) {
      case 1:
        vm.initEchart_pie(vm.tab_l_ref, ['最常下单时段6到12点', '最常下单时段18到24点', '最常下单时段12到18点', '最常下单时段0到6点'], [{
          'name': '最常下单时段6到12点',
          'value': 3753
        }, {'name': '最常下单时段18到24点', 'value': 5554}, {'name': '最常下单时段12到18点', 'value': 5304}, {'name': '最常下单时段0到6点', 'value': 923}]);
        break;
      case 2:
        vm.initEchart_pie(vm.tab_l_ref, ['最常访问时段18到24点', '最常访问时段0到6点', '最常访问时段12到18点', '最常访问时段6到12点'], [{
          'name': '最常访问时段18到24点',
          'value': 7396
        }, {'name': '最常访问时段0到6点', 'value': 1702}, {'name': '最常访问时段12到18点', 'value': 5624}, {'name': '最常访问时段6到12点', 'value': 5370}]);
        break;
      default:
        break;
    }
  }

  changeTTab(num: number) {
    const vm = this;
    switch (num) {
      case 1:
        vm.initEchart_T(vm.tab_t_ref, ['所占比例', '覆盖人数'], ['有孩子', '买车', '已婚', '买房'], [18.60238000506384, 24.223243028176654, 24.800159149274787, 27.07707888740189], [10286, 13394, 13713, 14972]);
        break;
      case 2:
        vm.initEchart_pie(vm.tab_t_ref, ['00后', '90后', '80后', '50_60_70后'], [{'name': '00后', 'value': 3355}, {
          'name': '90后',
          'value': 8228
        }, {'name': '80后', 'value': 16388}, {'name': '50_60_70后', 'value': 6744}]);
        break;
      default:
        break;
    }
  }

}
