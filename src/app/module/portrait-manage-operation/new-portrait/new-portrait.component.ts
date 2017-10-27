import {Component, OnInit, ViewChild} from '@angular/core';
import {JstreePluginsComponent} from '../../../components/jstree-plugins/jstree-plugins.component';
import {LoadingService} from '../../../services/loading/loading.service';
import jstreeData from '../../../../assets/js_tree';

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
  filterIds: Array<any> = [];
  featureIds: Array<any> = [];
  constructor(private loadingService: LoadingService) {

  }

  ngOnInit() {
    const filterOpt = {
      isCheckbox: true,
      data: jstreeData.data.filter
    };
    const featureOpt = {
      isCheckbox: true,
      data: jstreeData.data.feature
    };
    this.filterTreeRef.initJsTree(filterOpt);
    this.featureTreeRef.initJsTree(featureOpt);
    this.filterIds = jstreeData.data.filterDB;
    this.featureIds = jstreeData.data.featureDB;
  }

  getFeature(e) {
    console.log(JSON.parse(e));
    this.info.feature = [];
    const ids = JSON.parse(e).ids;
    ids.forEach(id => {
      if (this.featureIds.filter(ID => ID === id).length !== 0) {
        this.info.feature.push(id);
      }
    });
  }

  getFilter(e) {
    console.log(JSON.parse(e));
    this.info.filter = [];
    const ids = JSON.parse(e).ids;
    ids.forEach(id => {
      if (this.filterIds.filter(ID => ID === id).length !== 0) {
        this.info.filter.push(id);
      }
    });  }

  onAdd() {
    console.log(this.info);
  }
}
