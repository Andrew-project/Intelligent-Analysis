/**
 * Created by gaoqz.
 * get-user-agent.service
 *
 * **************************
 *
 * 获取浏览器信息
 */

import {Injectable} from '@angular/core';

@Injectable()
export class GetUserAgentService {

  constructor () {
  }

  versions () {
    const u = navigator.userAgent.toLowerCase();
    return {// 移动终端浏览器版本信息
      trident: u.indexOf('trident') > -1, // IE内核
      presto: u.indexOf('presto') > -1, // opera内核
      webKit: u.indexOf('applewebkit') > -1, // 苹果、谷歌内核
      gecko: u.indexOf('gecko') > -1 && u.indexOf('khtml') === -1, // 火狐内核
      mobile: !!u.match(/applewebkit.*mobile.*/) || u.indexOf('android') > -1 || u.indexOf('iphone') > -1 ||
              u.indexOf('ipad') > -1 || u.indexOf('micromessenger') > -1, // 是否为移动终端
      ios: !!u.match(/\(i[^;]+;( u;)? cpu.+mac os x/), // ios终端
      android: u.indexOf('android') > -1 || u.indexOf('linux') > -1, // android终端或者uc浏览器
      iPhone: u.indexOf('iphone') > -1 || u.indexOf('mac') > -1, // 是否为iPhone或者QQ HD浏览器
      iPad: u.indexOf('ipad') > -1, // 是否iPad
      webApp: u.indexOf('safari') === -1, // 是否web应该程序，没有头部与底部
      weixin: u.indexOf('micromessenger') > -1 || u.indexOf('micromessenger') > -1, // 是否为微信
      all: u
    };
  }

  language () {
    return (navigator['browserLanguage'] || navigator.language).toLowerCase();
  }

  platform () {
    return navigator.platform;
  }

}
