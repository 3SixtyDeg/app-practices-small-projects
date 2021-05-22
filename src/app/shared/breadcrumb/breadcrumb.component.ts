import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styles: [
  ]
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  public titleSubs!: Subscription;
  public pageTitle: string = '';
  public breadcumbs: any = [];

  constructor(private router: Router) {
    
    this.titleSubs = this.getPageTitle().subscribe(data => {
      this.pageTitle = data.itemName;
    });

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.titleSubs.unsubscribe();
  }

  getPageTitle() {
    return this.router.events
    .pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }
  
}