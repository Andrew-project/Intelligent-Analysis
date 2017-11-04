import {Injectable} from '@angular/core';
import {RoutingEntity} from './routing-center.interface';

@Injectable()
export class RoutingCenterService {
  private routingMap: Array<RoutingEntity> = [];

  constructor () {
    this.routingMap = [];
    const pro = localStorage.userInfo ? JSON.parse(localStorage.userInfo).products : [];
    pro.forEach(item => {
      const route = {
        path: 'portrait',
        notLink: true,
        name: '智能用户画像分析',
        subRouting: [
          {
            path: 'portrait-manage',
            name: '分析列表',
            inMenu: true,
            url: '/portrait/' + item.name + '/portrait-manage',
            subRouting: [
              {
                path: 'new',
                name: '新建',
                url: '/portrait/' + item.name + '/portrait-manage/new',
              },
              {
                path: 'update',
                name: '详情',
                notLink: true
              }
            ]
          }
        ]
      };
      this.routingMap.push(route);
    });
  }

  getRouting () {
    const routing = [];
    if (localStorage.userInfo) {
      const pro = JSON.parse(localStorage.userInfo).products;
      pro.forEach(item => {
        routing.push({
          display: item.display,
          name: item.name,
          path: '/portrait/' + item.name + '/portrait-manage'
        })
      });
    }
    return routing;
  }

  getHeadingRouting (url): Array<RoutingEntity> {
    url = url.split('?')[0];
    const urlArray = url.split('/');
    const type = urlArray.splice(2, 1)[0];
    const products = localStorage.userInfo ? JSON.parse(localStorage.userInfo).products : [];
    const headingRouting = [];
    const routingStack = [''];
    let routePointer = this.routingMap;
    urlArray.shift();
    for (const u of urlArray) {
      routingStack.push(u);
      if (u === 'portrait') {
        routingStack.push(type);
        const p = products.filter(t => t.name === type);
        headingRouting.push(Object.assign({name: p.length > 0 ? p[0].display : ''}, {url: routingStack.join('/')}));
      }
      let r = (routePointer || []).filter(router => router.path === u);
      r = r.length > 0 ? r : [{name: u.split('?')[0], path: u.split('?')[0], notLink: true}];
      headingRouting.push(Object.assign(r[0] || {}, {url: routingStack.join('/')}));
      routePointer = r.length > 0 ? r[0].subRouting : [];
    }
    return headingRouting;
  }
}
