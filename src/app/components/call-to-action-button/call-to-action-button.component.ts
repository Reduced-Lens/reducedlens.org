import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-to-action-button',
  standalone: true,
  imports: [ NgStyle ],
  templateUrl: './call-to-action-button.component.html',
  styleUrls: ['./call-to-action-button.component.css']
})
export class CallToActionButtonComponent implements OnInit {

  @Input() text = "";
  @Input() link = "";
  @Input() backgroundImage = "";

  constructor() { }

  ngOnInit(): void {
  }

  extNav() {
    window.open(this.link, "_blank");
  }
}
