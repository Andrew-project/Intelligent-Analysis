import { Injectable } from '@angular/core';
import {ConnectionBackend, Request, XHRBackend, XHRConnection} from '@angular/http';
import {HttpInterceptor} from './http-interceprot.service';

@Injectable()
export class HttpInterceptorBackend  implements ConnectionBackend {
  constructor (private _httpInterceptor: HttpInterceptor, private _xhrBackend: XHRBackend) { }

  createConnection (request: Request): XHRConnection {
    const interceptor = this._httpInterceptor;
    const req = interceptor.beforeRequest ? interceptor.beforeRequest(request) : request;
    const result = this._xhrBackend.createConnection(req);
    result.response = interceptor.afterResponse ? interceptor.afterResponse(result.response) : result.response;
    return result;
  }
}
