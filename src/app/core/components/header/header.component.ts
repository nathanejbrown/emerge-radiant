import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map } from 'rxjs';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(res => res.matches)
    )

  bars = faBars;
  xmark = faXmark
  mobileNavOpen: boolean = false;
  events: string[] = [];
  opened: boolean = true;

  constructor(private breakpointObserver: BreakpointObserver) {}
  
  toggleMobileNav(): void {
    this.mobileNavOpen = !this.mobileNavOpen;
  }

}
