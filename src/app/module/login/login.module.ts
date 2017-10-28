import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoadingPluginsModule} from '../../components/loading-plugins/loading-plugins.module';
import {LoginComponent} from './login.component';
import {LoginRoutingModule} from './login.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    LoadingPluginsModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: []
})
export class LoginModule {
}
