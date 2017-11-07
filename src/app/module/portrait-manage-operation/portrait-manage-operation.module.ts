import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DatatablePluginsModule} from '../../components/datatable-plugins/datatable-plugins.module';
import {EchartsPluginsModule} from '../../components/echarts-plugins/echarts-plugins.module';
import {JstreePluginsModule} from '../../components/jstree-plugins/jstree-plugins.module';
import {LoadingPluginsModule} from '../../components/loading-plugins/loading-plugins.module';
import {SweetAlertService} from '../../services/sweet-alert/sweet-alert.service';
import {EcharsInfoComponent} from './echars-info/echars-info.component';
import {NewPortraitComponent} from './new-portrait/new-portrait.component';
import {PortraitManageOperationRoutingModule} from './portrait-manage-operation-routing.module';
import {PortraitManageComponent} from './portrait-manage/portrait-manage.component';
import {UpdatePortraitComponent} from './update-portrait/update-portrait.component';
import {ItemService} from './portrait-manage/item.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PortraitManageOperationRoutingModule,
    DatatablePluginsModule,
    EchartsPluginsModule,
    JstreePluginsModule,
    LoadingPluginsModule
  ],
  declarations: [PortraitManageComponent, NewPortraitComponent, UpdatePortraitComponent, EcharsInfoComponent],
  providers: [SweetAlertService, ItemService]
})
export class PortraitManageOperationModule {
}
