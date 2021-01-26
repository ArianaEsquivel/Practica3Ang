import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '750px',
        opacity: 1,
        backgroundColor: '#0d5d61'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: '#aabbdd'
      })),
      transition('* => closed', [
        animate('1.5s')
      ]),
      transition('* => open', [
        animate('0.8s')
      ]),
    ]),
  ]
})
export class AnimationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isOpen = true;

  toggleButton() {
    this.isOpen = !this.isOpen;
  }
}
