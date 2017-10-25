import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {JstreePluginsComponent} from './jstree-plugins.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [JstreePluginsComponent],
  declarations: [JstreePluginsComponent]
})
export class JstreePluginsModule {
}

