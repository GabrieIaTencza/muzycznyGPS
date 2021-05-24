import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ICard } from './models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() card!: ICard;
  @Output() clicked = new EventEmitter();

  constructor() {}

  cardClick() {
    this.playAudio();
    this.clicked.emit([this.card.id, this.card.imageId]);
  }

  playAudio() {
    if (!this.card.revealed) {
      let audio = new Audio();
      audio.src = this.card.imageId;
      audio.load();
      audio.play();
      setTimeout(() => {
        audio.pause();
        //this.card.revealed = !this.card.revealed;
      }, 2000);
    }
  }
}
