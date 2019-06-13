import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @ViewChild(MatSidenav) matSidenav: MatSidenav;

  constructor() { }

  ngOnInit() {
  }

  toggle(): void {
    this.matSidenav.toggle();
    console.log('matSidenav toggle clicked');
  }
}
