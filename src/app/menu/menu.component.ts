import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  navLinks: any;

  constructor() { }

  ngOnInit() {
    this.navLinks = [
      {
        path:'/menu/map',
        label: 'Map'
      },
      {
        path:'/menu/restaurant',
        label: 'Restaurant'
      }
    ]


  }

}
