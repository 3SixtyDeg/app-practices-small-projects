import { Component, OnInit } from '@angular/core';



declare function initSideBarMenu(): void;
declare function initCustom(): void;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor() { 
    initSideBarMenu();
    initCustom();
  }

  ngOnInit(): void {
  }

}
