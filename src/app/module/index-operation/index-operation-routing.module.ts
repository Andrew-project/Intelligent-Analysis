import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    canActivate: [],
    canActivateChild: [],
    children: [
      {
        path: 'portrait',
        loadChildren: 'app/module/portrait-manage-operation/portrait-manage-operation.module#PortraitManageOperationModule'
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class IndexOperationRoutingModule {
  constructor () {

  }
}

