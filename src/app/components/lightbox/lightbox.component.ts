import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  imports: [ RouterLink ],
  templateUrl: './lightbox.component.html',
  styleUrl: './lightbox.component.css'
})
export class LightboxComponent implements OnInit {
  @Input() textTitle = "";
  @Input() text = "";
  @Input() link = "";
  @Output() closeEvent = new EventEmitter<boolean>();

  visible = false;

  ngOnInit(): void {
  }

  closeLightbox() {
    this.closeEvent.emit(false);
  }

  intNav() {
    window.open(this.link);
  }
}
