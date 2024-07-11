import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blur-box',
  standalone: true,
  imports: [ NgStyle ],
  templateUrl: './blur-box.component.html',
  styleUrls: ['./blur-box.component.css']
})
export class BlurBoxComponent implements OnInit {

  @Input() text = "";
  @Input() link = "";
  @Input() backgroundImage = "";

  constructor() { }

  ngOnInit(): void {
  }

  openWiki() {
    window.open(this.link, "_blank");
  }

}
