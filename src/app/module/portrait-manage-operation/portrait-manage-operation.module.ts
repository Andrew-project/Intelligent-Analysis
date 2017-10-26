import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortraitManageOperationRoutingModule} from './portrait-manage-operation-routing.module';
import {PortraitManageComponent} from './portrait-manage/portrait-manage.component';
import {DatatablePluginsModule} from '../../components/datatable-plugins/datatable-plugins.module';
import {NewPortraitComponent} from './new-portrait/new-portrait.component';
import {LoadingService} from '../../services/loading/loading.service';
import {SweetAlertService} from '../../services/sweet-alert/sweet-alert.service';
import { UpdatePortraitComponent } from './update-portrait/update-portrait.component';
import {EchartsPluginsModule} from '../../components/echarts-plugins/echarts-plugins.module';
import { EcharsInfoComponent } from './echars-info/echars-info.component';
import {JstreePluginsModule} from '../../components/jstree-plugins/jstree-plugins.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PortraitManageOperationRoutingModule,
    DatatablePluginsModule,
    EchartsPluginsModule,
    JstreePluginsModule
  ],
  declarations: [PortraitManageComponent, NewPortraitComponent, UpdatePortraitComponent, EcharsInfoComponent],
  providers: [LoadingService, SweetAlertService]
})
export class PortraitManageOperationModule {
}
