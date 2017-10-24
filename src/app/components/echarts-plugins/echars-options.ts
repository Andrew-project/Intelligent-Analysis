export class Option {
  lbData ?: {xData: Array<any>, lineData: Array<any>, barData: Array<any>};
  title ?: string;
  subText ?: string;
  legend ?: Array<any>;
  yTitleLeft ?: string;
  yTitleRight ?: string;
  indicator ?: Array<{name: string, max: number}>;
  radarData ?: Array<{name?: string, value: Array<any>}>;
  yValues ?: Array<any>;
  xValues ?: Array<any>;

}
