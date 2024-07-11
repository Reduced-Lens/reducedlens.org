import { Component, Input, OnInit } from '@angular/core';
import { LightboxComponent } from '../lightbox/lightbox.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-responsive-card',
  standalone: true,
  imports: [ LightboxComponent, NgIf ],
  templateUrl: './responsive-card.component.html',
  styleUrls: ['./responsive-card.component.css']
})
export class ResponsiveCardComponent implements OnInit {

  @Input() frontText = "";
  @Input() backText = "";
  @Input() lightboxTextTitle = "";
  @Input() lightboxText = "";
  @Input() lightboxLink = "";

  showLightbox = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleLightbox() {
    this.showLightbox = this.showLightbox ? false : true
  }
}
