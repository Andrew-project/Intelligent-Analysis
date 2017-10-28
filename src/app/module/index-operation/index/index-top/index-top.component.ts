import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-index-top',
  templateUrl: './index-top.component.html',
  styleUrls: ['./index-top.component.scss']
})
export class IndexTopComponent implements OnInit {
  constructor (private router: Router) { }

  ngOnInit () {
  }

  onSignOut () {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
