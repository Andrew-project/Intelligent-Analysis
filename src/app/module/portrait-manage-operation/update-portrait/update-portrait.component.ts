import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {JstreePluginsComponent} from '../../../components/jstree-plugins/jstree-plugins.component';
import jstree_json from '../../../../assets/jstree_json';
import jstree_json_detail from '../../../../assets/jstree_json_detail';

@Component({
  selector: 'app-update-portrait',
  templateUrl: './update-portrait.component.html',
  styleUrls: ['./update-portrait.component.scss']
})
export class UpdatePortraitComponent implements OnInit {
  @ViewChild('jsTreeRef') jsTreeRef: JstreePluginsComponent;
  isEchart: boolean = false;
  arrList: any = [
    {
      "l2_rowspan": 0,
      "l2_count": 44352,
      "l1_name": "成交类型",
      "l1_rate": 0.5008643785067988,
      "l0_rowspan": 5,
      "l1_count": 49543,
      "l1_rowspan": 2,
      "l0_name": "用户购买",
      "l2_rate": "89.52%",
      "l2_name": "高佣"
    },
    {
      "l2_rowspan": 0,
      "l2_count": 18756,
      "l1_name": "成交类型",
      "l1_rate": 0.5008643785067988,
      "l0_rowspan": 0,
      "l1_count": 49543,
      "l1_rowspan": 0,
      "l0_name": "用户购买",
      "l2_rate": "37.86%",
      "l2_name": "一淘送"
    },
    {
      "l2_rowspan": 0,
      "l2_count": 40784,
      "l1_name": "淘宝成交额",
      "l1_rate": 0.9910529242278724,
      "l0_rowspan": 0,
      "l1_count": 98030,
      "l1_rowspan": 2,
      "l0_name": "用户购买",
      "l2_rate": "41.60%",
      "l2_name": "淘宝成交额高"
    },
    {
      "l2_rowspan": 0,
      "l2_count": 24301,
      "l1_name": "淘宝成交额",
      "l1_rate": 0.9910529242278724,
      "l0_rowspan": 0,
      "l1_count": 98030,
      "l1_rowspan": 0,
      "l0_name": "用户购买",
      "l2_rate": "24.79%",
      "l2_name": "淘宝成交额中高"
    },
    {
      "l2_rowspan": 0,
      "l2_count": 49754,
      "l1_name": "淘宝成交频次",
      "l1_rate": 0.9804579689632513,
      "l0_rowspan": 0,
      "l1_count": 96982,
      "l1_rowspan": 1,
      "l0_name": "用户购买",
      "l2_rate": "51.30%",
      "l2_name": "淘宝成交频次高"
    },
    {
      "l2_rowspan": 0,
      "l2_count": 38922,
      "l1_name": "淘宝等级",
      "l1_rate": 0.9922357579740181,
      "l0_rowspan": 2,
      "l1_count": 98147,
      "l1_rowspan": 1,
      "l0_name": "用户等级",
      "l2_rate": "39.66%",
      "l2_name": "淘宝等级v3_4"
    },
    {
      "l2_rowspan": 0,
      "l2_count": 67728,
      "l1_name": "一淘会员时长",
      "l1_rate": 0.999989890309862,
      "l0_rowspan": 0,
      "l1_count": 98914,
      "l1_rowspan": 1,
      "l0_name": "用户等级",
      "l2_rate": "68.47%",
      "l2_name": "老用户"
    },
    {
      "l2_rowspan": 0,
      "l2_count": 30480,
      "l1_name": "最常访问时段",
      "l1_rate": 0.9993934185917202,
      "l0_rowspan": 4,
      "l1_count": 98855,
      "l1_rowspan": 2,
      "l0_name": "用户访问",
      "l2_rate": "30.83%",
      "l2_name": "最常访问时段12到18点"
    },
    {
      "l2_rowspan": 0,
      "l2_count": 35831,
      "l1_name": "最常访问时段",
      "l1_rate": 0.9993934185917202,
      "l0_rowspan": 0,
      "l1_count": 98855,
      "l1_rowspan": 0,
      "l0_name": "用户访问",
      "l2_rate": "36.25%",
      "l2_name": "最常访问时段18到24点"
    },
    {
      "l2_rowspan": 0,
      "l2_count": 26253,
      "l1_name": "最常下单时段",
      "l1_rate": 0.7655967244603953,
      "l0_rowspan": 0,
      "l1_count": 75729,
      "l1_rowspan": 2,
      "l0_name": "用户访问",
      "l2_rate": "34.67%",
      "l2_name": "最常下单时段18到24点"
    },
    {
      "l2_rowspan": 0,
      "l2_count": 26228,
      "l1_name": "最常下单时段",
      "l1_rate": 0.7655967244603953,
      "l0_rowspan": 0,
      "l1_count": 75729,
      "l1_rowspan": 0,
      "l0_name": "用户访问",
      "l2_rate": "34.63%",
      "l2_name": "最常下单时段12到18点"
    },
    {
      "l2_rowspan": 0,
      "l2_count": 6704,
      "l1_name": "使用场景",
      "l1_rate": 0.7176666835161503,
      "l0_rowspan": 9,
      "l1_count": 70988,
      "l1_rowspan": 9,
      "l0_name": "用户习惯分析",
      "l2_rate": " 9.44%",
      "l2_name": "今日榜单"
    },
    {
      "l2_rowspan": 0,
      "l2_count": 14359,
      "l1_name": "使用场景",
      "l1_rate": 0.7176666835161503,
      "l0_rowspan": 0,
      "l1_count": 70988,
      "l1_rowspan": 0,
      "l0_name": "用户习惯分析",
      "l2_rate": "20.23%",
      "l2_name": "大额优惠券"
    },
    {
      "l2_rowspan": 0,
      "l2_count": 44167,
      "l1_name": "使用场景",
      "l1_rate": 0.7176666835161503,
      "l0_rowspan": 0,
      "l1_count": 70988,
      "l1_rowspan": 0,
      "l0_name": "用户习惯分析",
      "l2_rate": "62.22%",
      "l2_name": "收藏"
    },
    {
      "l2_rowspan": 0,
      "l2_count": 40300,
      "l1_name": "使用场景",
      "l1_rate": 0.7176666835161503,
      "l0_rowspan": 0,
      "l1_count": 70988,
      "l1_rowspan": 0,
      "l0_name": "用户习惯分析",
      "l2_rate": "56.77%",
      "l2_name": "超返活动"
    },
    {
      "l2_rowspan": 0,
      "l2_count": 22327,
      "l1_name": "使用场景",
      "l1_rate": 0.7176666835161503,
      "l0_rowspan": 0,
      "l1_count": 70988,
      "l1_rowspan": 0,
      "l0_name": "用户习惯分析",
      "l2_rate": "31.45%",
      "l2_name": "专享券活动"
    },
    {
      "l2_rowspan": 0,
      "l2_count": 13736,
      "l1_name": "使用场景",
      "l1_rate": 0.7176666835161503,
      "l0_rowspan": 0,
      "l1_count": 70988,
      "l1_rowspan": 0,
      "l0_name": "用户习惯分析",
      "l2_rate": "19.35%",
      "l2_name": "白菜价"
    },
    {
      "l2_rowspan": 0,
      "l2_count": 14367,
      "l1_name": "使用场景",
      "l1_rate": 0.7176666835161503,
      "l0_rowspan": 0,
      "l1_count": 70988,
      "l1_rowspan": 0,
      "l0_name": "用户习惯分析",
      "l2_rate": "20.24%",
      "l2_name": "猜你喜欢"
    },
    {
      "l2_rowspan": 0,
      "l2_count": 6796,
      "l1_name": "使用场景",
      "l1_rate": 0.7176666835161503,
      "l0_rowspan": 0,
      "l1_count": 70988,
      "l1_rowspan": 0,
      "l0_name": "用户习惯分析",
      "l2_rate": " 9.57%",
      "l2_name": "充值有奖"
    },
    {
      "l2_rowspan": 0,
      "l2_count": 22428,
      "l1_name": "使用场景",
      "l1_rate": 0.7176666835161503,
      "l0_rowspan": 0,
      "l1_count": 70988,
      "l1_rowspan": 0,
      "l0_name": "用户习惯分析",
      "l2_rate": "31.59%",
      "l2_name": "限时抢"
    },
    {
      "l2_rowspan": 0,
      "l2_count": 20873,
      "l1_name": "年龄",
      "l1_rate": 0.9937724308749937,
      "l0_rowspan": 6,
      "l1_count": 98299,
      "l1_rowspan": 3,
      "l0_name": "人口学信息",
      "l2_rate": "21.23%",
      "l2_name": "18至24岁"
    },
    {
      "l2_rowspan": 0,
      "l2_count": 20575,
      "l1_name": "年龄",
      "l1_rate": 0.9937724308749937,
      "l0_rowspan": 0,
      "l1_count": 98299,
      "l1_rowspan": 0,
      "l0_name": "人口学信息",
      "l2_rate": "20.93%",
      "l2_name": "30至34岁"
    },
    {
      "l2_rowspan": 0,
      "l2_count": 26383,
      "l1_name": "年龄",
      "l1_rate": 0.9937724308749937,
      "l0_rowspan": 0,
      "l1_count": 98299,
      "l1_rowspan": 0,
      "l0_name": "人口学信息",
      "l2_rate": "26.84%",
      "l2_name": "25至29岁"
    },
    {
      "l2_rowspan": 0,
      "l2_count": 61252,
      "l1_name": "性别",
      "l1_rate": 0.9913056664813223,
      "l0_rowspan": 0,
      "l1_count": 98055,
      "l1_rowspan": 1,
      "l0_name": "人口学信息",
      "l2_rate": "62.47%",
      "l2_name": "女"
    },
    {
      "l2_rowspan": 0,
      "l2_count": 28361,
      "l1_name": "职业",
      "l1_rate": 0.37677804175302027,
      "l0_rowspan": 0,
      "l1_count": 37269,
      "l1_rowspan": 1,
      "l0_name": "人口学信息",
      "l2_rate": "76.10%",
      "l2_name": "白领"
    },
    {
      "l2_rowspan": 0,
      "l2_count": 53064,
      "l1_name": "城市等级",
      "l1_rate": 0.9861193954405297,
      "l0_rowspan": 0,
      "l1_count": 97542,
      "l1_rowspan": 1,
      "l0_name": "人口学信息",
      "l2_rate": "54.40%",
      "l2_name": "三四线城市"
    },
    {
      "l2_rowspan": 0,
      "l2_count": 80442,
      "l1_name": "年代",
      "l1_rate": 0.9903755749886266,
      "l0_rowspan": 2,
      "l1_count": 97963,
      "l1_rowspan": 2,
      "l0_name": "人生阶段",
      "l2_rate": "82.11%",
      "l2_name": "80后"
    },
    {
      "l2_rowspan": 0,
      "l2_count": 48585,
      "l1_name": "年代",
      "l1_rate": 0.9903755749886266,
      "l0_rowspan": 0,
      "l1_count": 97963,
      "l1_rowspan": 0,
      "l0_name": "人生阶段",
      "l2_rate": "49.60%",
      "l2_name": "90后"
    }
  ];
  jsTreeData: any = {
    data: []
  };
  jsTreeDetail: any = {};
  treeInfo: any = {};

  constructor(private elementRef: ElementRef) {
    this.jsTreeData.data = jstree_json;
    this.jsTreeDetail = jstree_json_detail;
  }

  ngOnInit() {
    this.jsTreeRef.initJsTree(this.jsTreeData);
  }

  changeTab(isEchart: boolean) {
    this.isEchart = isEchart;
  }

  getTreeInfo(e) {
    console.log(JSON.parse(e));
    const id = JSON.parse(e).id;
    this.treeInfo = this.jsTreeDetail[id];
    console.log(this.treeInfo);
  }

  searchTree(value) {
    this.jsTreeRef.searchTree(value);
  }

}
