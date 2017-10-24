import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DatatablePluginsComponent} from './datatable-plugins.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [DatatablePluginsComponent],
  declarations: [DatatablePluginsComponent]
})
export class DatatablePluginsModule {
}
