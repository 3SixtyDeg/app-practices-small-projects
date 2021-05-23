import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styles: [
  ]
})
export class SidenavComponent implements OnInit {
  private classActive: string = 'nav-link collapsed cursor-pointer';
  private classActiveShow: string = 'nav-link cursor-pointer active';
  private classCollapse: string = 'collapse';
  private classCollapseShow: string = 'collapse show';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public getClassActive(rlaConf: boolean, rlaPerU: boolean, rlaPerP: boolean) {
    return (rlaConf || rlaPerU || rlaPerP) ? this.classActiveShow: this.classActive;
  }

  public getClassCollapse(rlaConf: boolean, rlaPerU: boolean, rlaPerP: boolean) {
    return (rlaConf || rlaPerU || rlaPerP) ? this.classCollapseShow: this.classCollapse;
  }

  public logout() {
    localStorage.removeItem('uid');
    this.router.navigate(['./auth']);
  }

}
