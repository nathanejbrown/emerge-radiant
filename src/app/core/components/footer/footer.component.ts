import { Component } from '@angular/core';
import { faInstagram, faFacebook, faYelp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  instagram = faInstagram;
  facebook = faFacebook;
  yelp = faYelp;
  envelope = faEnvelope;
}
