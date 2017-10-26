import {Component, OnInit, ViewChild} from '@angular/core';
import {JstreePluginsComponent} from '../../../components/jstree-plugins/jstree-plugins.component';
import {LoadingService} from '../../../services/loading/loading.service';

@Component({
  selector: 'app-new-portrait',
  templateUrl: './new-portrait.component.html',
  styleUrls: ['./new-portrait.component.scss']
})
export class NewPortraitComponent implements OnInit {
  @ViewChild('filterTreeRef') filterTreeRef: JstreePluginsComponent;
  @ViewChild('featureTreeRef') featureTreeRef: JstreePluginsComponent;
  info: any = {
    name: '',
    desc: '',
    filter: [],
    feature: [],
    support: 20
  };
  constructor(private loadingService: LoadingService) {
  }

  ngOnInit() {
    const filterOpt = {
      isCheckbox: true,
      data: [
        {
          'text': '用户等级',
          'state': {
            'opened': false
          },
          'type': 'FilterNode',
          'id': 'level',
          'parent': '#'
        },
        {
          'text': '淘宝等级',
          'state': {
            'opened': false
          },
          'type': 'FilterNode',
          'id': 'level-tb',
          'parent': 'level'
        },
        {
          'text': '淘宝等级v5_6',
          'state': {
            'opened': false
          },
          'type': 'FilterNode',
          'id': 'level-tb-v5%6',
          'parent': 'level-tb'
        },
        {
          'text': '天猫等级',
          'state': {
            'opened': false
          },
          'type': 'FilterNode',
          'id': 'level-tm',
          'parent': 'level'
        },
        {
          'text': '天猫等级v5_6',
          'state': {
            'opened': false
          },
          'type': 'FilterNode',
          'id': 'level-tm-v5%6',
          'parent': 'level-tm'
        },
        {
          'text': '天猫等级v1_7',
          'state': {
            'opened': false
          },
          'type': 'FilterNode',
          'id': 'level-tm-v1%7',
          'parent': 'level-tm'
        }

      ]
    };
    const featureOpt = {
      isCheckbox: true,
      data: [
        {
          'text': '用户等级',
          'state': {
            'opened': false
          },
          'type': 'FilterNode',
          'id': 'level',
          'parent': '#'
        },
        {
          'text': '淘宝等级',
          'state': {
            'opened': false
          },
          'type': 'FilterNode',
          'id': 'level-tb',
          'parent': 'level'
        }
      ]
    };
    this.filterTreeRef.initJsTree(filterOpt);
    this.featureTreeRef.initJsTree(featureOpt);
  }

  getFeature(e) {
    console.log(JSON.parse(e));
    this.info.feature = JSON.parse(e).ids;
  }

  getFilter(e) {
    console.log(JSON.parse(e));
    this.info.filter = JSON.parse(e).ids;
  }

  onAdd() {
    console.log(this.info);
  }
}
