import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {EchartsPluginsComponent} from './echarts.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [EchartsPluginsComponent],
  declarations: [EchartsPluginsComponent]
})
export class EchartsPluginsModule {
}
