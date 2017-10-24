import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private router: Router) {
    const self = this;
    $('body').on('click', '*[app-router]', function (event) {
      if ($(this).attr('app-router') !== '') {
        self.router.navigateByUrl($(this).attr('app-router'));
      }
    });
  }

}
