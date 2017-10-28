import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-loading-plugins',
  templateUrl: './loading-plugins.component.html',
  styleUrls: ['./loading-plugins.component.scss']
})
export class LoadingPluginsComponent implements OnInit {
  hideAnimate = true;
  @Input() showBlock = false;


  constructor () {
  }

  ngOnInit () {

  }
}
