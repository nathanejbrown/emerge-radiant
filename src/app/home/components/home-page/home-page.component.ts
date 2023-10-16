import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  donationText: string = "I offer free nipple and areola tattoos to anyone in need. Every human deserves to feel whole, empowered and confident. Many people have had their femininity and/or sexuality stripped away by tragedy, in addition to their finances being drained. I will not profit from their suffering, I only want to offer some semblance of their former reality, so they aren't constantly reminded of their loss when they look in the mirror. Please consider a donation so I can continue to provide love and light to those who need it. Your donation will cause a ripple into the universe, compounding positive energy all around you. Thank YOU!"

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(res => res.matches)
    )

  constructor(private breakpointObserver: BreakpointObserver) {}
}
