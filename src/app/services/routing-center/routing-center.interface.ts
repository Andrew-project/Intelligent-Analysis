export interface RoutingEntity {
  path: string; // url
  name?: string; // 名称
  app?: string; // 所属app
  url?: string,
  appName?: string;
  iconClass?: string; // icon
  appIconClass?: string;
  role?: string; // 身份
  authority?: string;
  inMenu?: boolean; // 是否在sideMenu出现
  notLink?: boolean; // 是否不存在连接
  sideColor?: string; // 字体color
  isMenu?: boolean;
  appSubRole?: Array<string>; // app下role权限
  subRouting?: Array<RoutingEntity>;
}
