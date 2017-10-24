import {Injectable} from '@angular/core';
import {Headers, Request, Response} from '@angular/http';
import {Observable} from 'rxjs';

@Injectable()
export class HttpInterceptor {

  beforeRequest (req: Request): Request {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,PATCH, OPTIONS');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With');
    headers.append('Content-Type', 'application/json');
    headers.append('crossDomain', 'true');
    headers.append('Authorization', localStorage['token'] || '');
    req.headers = headers;
    console.log(req);
    return req;
  }

  afterResponse (res: Observable < Response >): Observable < any > {
    res.subscribe((re: Response) => {
      console.log(re);
    }, (err) => {
      console.error(err);
    });
    return res;
  }
}
