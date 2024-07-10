import { Component } from '@angular/core';
import { ResponsiveCardComponent } from '../../components/responsive-card/responsive-card.component';
import { LightboxComponent } from '../../components/lightbox/lightbox.component';
import { CallToActionButtonComponent } from '../../components/call-to-action-button/call-to-action-button.component';
import { BlurBoxComponent } from '../../components/blur-box/blur-box.component';

@Component({
  selector: 'app-landing-page-route',
  standalone: true,
  imports: [
    ResponsiveCardComponent,
    LightboxComponent,
    CallToActionButtonComponent,
    BlurBoxComponent],
  templateUrl: './landing-page-route.component.html',
  styleUrl: './landing-page-route.component.css'
})
export class LandingPageRouteComponent {

}
