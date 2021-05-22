import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styles: [
  ]
})
export class AsideComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public logout() {
    localStorage.removeItem('uid');
    this.router.navigate(['./auth']);
  }

}
