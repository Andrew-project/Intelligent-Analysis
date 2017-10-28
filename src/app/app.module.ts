import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, RequestOptions} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import 'rxjs/Rx';
import {AppComponent} from './app.component';
import {ROOT_ROUTING} from './app.routing';
import {IndexOperationModule} from './module/index-operation/index-operation.module';
import {CustomRequestOptions} from './services/http/custom-request-options.service';
import {HttpInterceptor} from './services/http/http-interceprot.service';
import {entityReducer} from './services/reducer/entity-reducer.service';
import {RoutingCenterService} from './services/routing-center/routing-center.service';
import {SweetAlertService} from './services/sweet-alert/sweet-alert.service';

require('assets/js/jquery-3.1.1.min.js');
require('assets/js/bootstrap.min.js');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ROOT_ROUTING,
    IndexOperationModule,
    StoreModule.provideStore({entity: entityReducer}),
  ],
  providers: [
    SweetAlertService,
    RoutingCenterService,
    HttpInterceptor,
    {provide: RequestOptions, useClass: CustomRequestOptions}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
