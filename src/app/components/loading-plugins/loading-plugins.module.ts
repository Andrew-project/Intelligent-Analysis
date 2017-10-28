import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {LoadingPluginsComponent} from './loading-plugins.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [LoadingPluginsComponent],
  declarations: [LoadingPluginsComponent]
})
export class LoadingPluginsModule {
}

