import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-jstree-plugins',
  templateUrl: './jstree-plugins.component.html',
  styleUrls: ['./jstree-plugins.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class JstreePluginsComponent implements OnInit, AfterViewInit {
  @Input() inputOptions;
  nodeEle: {};
  _name: '';
  private searchInputEle: {};
  @Output() jsValueChange = new EventEmitter<string>();


  constructor (private elementRef: ElementRef) {}

  ngOnInit () {}

  ngAfterViewInit () {
  }

   initJsTree (inputOptions: any) {
     $(this.elementRef.nativeElement.querySelector('.jstree-edit')).parent().html('<div class="jstree-edit" style="margin-top: 20px;"></div>');
     this.nodeEle = this.elementRef.nativeElement.querySelector('.jstree-edit');
     $(this.nodeEle).jstree('refresh');
     $(this.nodeEle).jstree({
       "types": {
         "term": {
           "icon" : "glyphicon glyphicon-leaf"
         },
         "opinion": {
           "icon": "glyphicon glyphicon-leaf"
         },
         "feedback": {
           "icon": "glyphicon glyphicon-leaf"
         },
         "default": {
           "icon": "glyphicon glyphicon-leaf"
         }
       },
       'plugins': ['dnd', 'search', '', 'state', 'types', 'wholerow', inputOptions.isCheckbox ? 'checkbox' : ''],
       'core': {
         'data': inputOptions.data
       },
       "search": {
         "case_insensitive": true,
         "show_only_matches": true
       }
     });

     $(this.nodeEle).on('changed.jstree', (e, data) => {
       if (data && data.node) {
         let emitObj = JSON.stringify({ids: data.selected});
         this.jsValueChange.emit(emitObj);
       }
     });

     $(this.searchInputEle).keyup( () => {
       $(this.nodeEle).jstree(true).search($(this.searchInputEle).val());
     });
   }

   searchTree(val) {
     $(this.nodeEle).jstree(true).search(val);
   }

}
