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

  constructor() {
  }

  ngOnInit() {

  }

  initEchart_e1() {
    let option = {
      tooltip: {
        axisPointer: {
          type: 'cross'
        },
        trigger: 'axis'
      },
      legend: {
        data: ['所占比例', '覆盖人数']
      },
      grid: {
        right: '10%'
      },
      xAxis: {
        axisTick: {
          alignWithLabel: true
        },
        type: 'category',
        data: ['访问签到', '充值有奖', '猜你喜欢', '生活快囤', '收藏', '超返活动', '限时抢', '超级大牌', '今日榜单', '人气活动', '大额优惠券', '专享券活动', '白菜价']
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
          name: '所占比例',
          min: 0,
          max: 100,
          axisLabel: {'formatter': '{value} %'},
          axisLine: {'lineStyle': {'color': '#d14a61'}},
          position: 'left',
          type: 'value'
        },
        {
          name: '覆盖人数',
          min: 0,
          max: 20094,
          axisLabel: {'formatter': '{value} 人'},
          axisLine: {'lineStyle': {'color': '#5793f3'}},
          position: 'right',
          type: 'value'
        }],
      color: ['#d14a61', '#5793f3', '3#675bba'],
      series: [
        {
          type: 'line',
          yAxisIndex: 0,
          name: '所占比例',
          data: [0.28931979070483227, 15.574022776238843, 19.704524469067405, 5.940289319790705, 60.1477377654663, 62.936288088642655, 39.569098184056635, 5.441674361341951, 11.892890120036935, 4.161280393967375, 26.635887965527854, 31.615881809787627, 26.21114188981225]
        },
        {
          type: 'bar',
          yAxisIndex: 1,
          name: '覆盖人数',
          data: [47, 2530, 3201, 965, 9771, 10224, 6428, 884, 1932, 676, 4327, 5136, 4258]
        }]
    };

    this.tab_e_ref.initOption(option);
  }

  initBar(tab_ref) {
    let option = {
      'yAxis': [{
        'name': '所占比例',
        'min': 0,
        'max': 100,
        'axisLabel': {'formatter': '{value} %'},
        'axisLine': {'lineStyle': {'color': '#d14a61'}},
        'position': 'left',
        'type': 'value'
      }, {
        'name': '覆盖人数',
        'min': 0,
        'max': 20094,
        'axisLabel': {'formatter': '{value} 人'},
        'axisLine': {'lineStyle': {'color': '#5793f3'}},
        'position': 'right',
        'type': 'value'
      }],
      'color': ['#d14a61', '#5793f3', '3#675bba'],
      'series': [{'type': 'line', 'yAxisIndex': 0, 'name': '所占比例', 'data': [28.02293196368503]}, {
        'type': 'bar',
        'yAxisIndex': 1,
        'name': '覆盖人数',
        'data': [15495]
      }],
      'tooltip': {'axisPointer': {'type': 'cross'}, 'trigger': 'axis'},
      'llegend': {'data': ['所占比例', '覆盖人数']},
      'grid': {'right': '10%'},
      'xAxis': {'axisTick': {'alignWithLabel': true}, 'type': 'category', 'data': ['一淘有成交']},
      'toolbox': {'feature': {'restore': {'show': true}, 'dataView': {'readOnly': false, 'show': true}, 'saveAsImage': {'show': true}}}
    };
    tab_ref.initOption(option);
  }

  initEchart_pie(tab_ref, l_data, s_data) {
    let option = {
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
        }],
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
        subtext: '城市等级用户数：19903  用户数覆盖占全部用户比例35.99%', 'x': 'center'
      }
    };
    tab_ref.initOption(option);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isNow']) {
      if (changes['isNow'].currentValue) {
        this.initEchart_e1();
        this.changeInfoTab(1);
        this.changeDTab(1);
        this.changeBTab(1);
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
        vm.initBar(vm.tab_b_ref);
        break;
      default:
        break;
    }
  }

}
