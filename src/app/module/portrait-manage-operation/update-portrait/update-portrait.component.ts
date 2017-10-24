import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-update-portrait',
  templateUrl: './update-portrait.component.html',
  styleUrls: ['./update-portrait.component.scss']
})
export class UpdatePortraitComponent implements OnInit {

  isEchart: boolean = false;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
  }

  changeTab(isEchart: boolean) {
    this.isEchart = isEchart;
  }

}
