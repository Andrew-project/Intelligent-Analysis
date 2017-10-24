import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IndexOperationRoutingModule} from './index-operation-routing.module';
import {IndexFootingComponent} from './index/index-footing/index-footing.component';
import {IndexHeadingComponent} from './index/index-heading/index-heading.component';
import {IndexSideComponent} from './index/index-side/index-side.component';
import {IndexTopComponent} from './index/index-top/index-top.component';
import {IndexComponent} from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IndexOperationRoutingModule,
  ],
  declarations: [IndexComponent, IndexSideComponent, IndexTopComponent, IndexHeadingComponent, IndexFootingComponent],
  providers: []
})
export class IndexOperationModule {
}
