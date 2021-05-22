import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styles: [
  ]
})
export class SidenavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public logout() {
    localStorage.removeItem('uid');
    this.router.navigate(['./auth']);
  }

}
