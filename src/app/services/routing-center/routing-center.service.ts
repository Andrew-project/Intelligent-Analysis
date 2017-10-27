import {Injectable} from '@angular/core';
import {RoutingEntity} from './routing-center.interface';

@Injectable()
export class RoutingCenterService {
  private routingMap: Array<RoutingEntity> = [
    {
      path: 'portrait',
      notLink: true,
      name: '智能用户画像分析',
      subRouting: [
        {
          path: 'portrait-manage',
          name: '分析列表',
          inMenu: true,
          url: '/portrait/portrait-manage',
          subRouting: [
            {
              path: 'new',
              name: '新建',
              url: '/portrait/portrait-manage/new',
            },
            {
              path: 'update',
              name: '编辑',
              notLink: true
            }
          ]
        }
      ]
    }
  ];

  getHeadingRouting (url): Array<RoutingEntity> {
    url = url.split('?')[0];
    const urlArray = url.split('/');
    const headingRouting = [];
    const routingStack = [''];
    console.log(this.routingMap)
    let routePointer = this.routingMap;
    urlArray.shift();
    for (const u of urlArray) {
      routingStack.push(u);
      let r = (routePointer || []).filter(router => router.path === u);
      r = r.length > 0 ? r : [{name: u.split('?')[0], path: u.split('?')[0], notLink: true}];
      headingRouting.push(Object.assign(r[0] || {}, {url: routingStack.join('/')}));
      routePointer = r.length > 0 ? r[0].subRouting : [];
    }
    return headingRouting;
  }
}
