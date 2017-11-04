import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewPortraitComponent} from './new-portrait/new-portrait.component';
import {PortraitManageComponent} from './portrait-manage/portrait-manage.component';
import {UpdatePortraitComponent} from './update-portrait/update-portrait.component';

const routes: Routes = [
  {
    path: ':authority/portrait-manage',
    children: [
      {
        path: '',
        component: PortraitManageComponent
      },
      {
        path: 'new',
        component: NewPortraitComponent
      },
      {
        path: 'update/:id',
        component: UpdatePortraitComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortraitManageOperationRoutingModule {
}
