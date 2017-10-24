import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortraitManageOperationRoutingModule} from './portrait-manage-operation-routing.module';
import {PortraitManageComponent} from './portrait-manage/portrait-manage.component';
import {DatatablePluginsModule} from '../../components/datatable-plugins/datatable-plugins.module';
import {NewPortraitComponent} from './new-portrait/new-portrait.component';
import {LoadingService} from '../../services/loading/loading.service';
import {SweetAlertService} from '../../services/sweet-alert/sweet-alert.service';
import { UpdatePortraitComponent } from './update-portrait/update-portrait.component';

@NgModule({
  imports: [
    CommonModule,
    PortraitManageOperationRoutingModule,
    DatatablePluginsModule
  ],
  declarations: [PortraitManageComponent, NewPortraitComponent, UpdatePortraitComponent],
  providers: [LoadingService, SweetAlertService]
})
export class PortraitManageOperationModule {
}
