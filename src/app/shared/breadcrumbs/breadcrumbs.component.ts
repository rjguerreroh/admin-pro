import { filter, map } from 'rxjs/operators';
import { ActivationEnd, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public titulo: string;
  public tituloSub$: Subscription;

  constructor( private router: Router) {
    this.tituloSub$ = this.getArgumentosRuta().subscribe( ({titulo}) => {
      this.titulo = titulo;
      document.title = titulo;
    });
  }
  ngOnDestroy(): void {
    this.tituloSub$.unsubscribe();
  }



  getArgumentosRuta(){
    return this.router.events.pipe(
      filter( event => event instanceof ActivationEnd),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null),
      map( (event: ActivationEnd) => event.snapshot.data)
    );
  }

}
