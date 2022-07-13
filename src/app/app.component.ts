import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'excis';

  constructor(public router: Router) {}

  isSideNavButtonVisible(): String {
    return this.router.url === '/' ? 'hidden' : 'visible';
  }
}
