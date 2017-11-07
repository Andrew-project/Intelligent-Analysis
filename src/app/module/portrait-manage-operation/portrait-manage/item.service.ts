import { Injectable } from '@angular/core';

@Injectable()
export class ItemService {
  analysisItem: any;

  createItem (analysisItem: Object) {
    this.analysisItem = Object.assign({}, analysisItem);
  }
}
