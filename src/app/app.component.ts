import { Component, ElementRef, OnInit } from '@angular/core';
import { Card } from './components/card/models';
import { CardService } from './components/services/card.service';
import { shuffle } from './helpers/shuffle-array';
import {
  BOARD_HEIGHT_EASY,
  BOARD_WIDTH_EASY,
  BOARD_HEIGHT_MEDIUM,
  BOARD_WIDTH_MEDIUM,
  BOARD_HEIGHT_HARD,
  BOARD_WIDTH_HARD,
} from './settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  game2Start = false;
  st = false;
  startGame = false;
  cards!: any;
  boardW = new Array(BOARD_WIDTH_EASY);
  boardH = new Array(BOARD_HEIGHT_EASY);
  unsolved!: any;
  lastClicked!: any;
  revealedCards!: any;
  cardIndex!: any;
  waiting!: any;
  clicks!: any;

  

  

  lelevel!: string;

  homePage = true;

  constructor(private cardService: CardService) {}

  ngOnInit() {}

  initGame(level: string) {
    this.clicks = 0;
    this.waiting = false;
    this.cards = [];
    this.lastClicked = null;
    this.revealedCards = 0;
    this.cardIndex = 0;
    if (this.lelevel === 'easy') {
      this.unsolved = Math.floor((BOARD_WIDTH_EASY * BOARD_HEIGHT_EASY) / 2);
    }

    if (this.lelevel === 'medium') {
      this.unsolved = Math.floor(
        (BOARD_WIDTH_MEDIUM * BOARD_HEIGHT_MEDIUM) / 2
      );
    }

    if (this.lelevel === 'hard') {
      this.unsolved = Math.floor((BOARD_WIDTH_HARD * BOARD_HEIGHT_HARD) / 2);
    }

    this.cardService.getMusicArray(level).subscribe((data: any) => {
      data.map((item: any) => {
        this.cards.push(new Card(this.cardIndex, item));
        this.cards.push(new Card(this.cardIndex + 1, item));
        this.cardIndex += 2;
      });
      this.cards = shuffle(this.cards);
    });
  }

  handleCardClick([id, imageId]: [any, any]) {
    if (!this.waiting) {
      this.clicks++;
      if (!this.isCardShown(id)) {
        this.showCard(id);
        if (this.lastClicked != null && this.lastClicked === imageId) {
          this.unsolved--;
          this.lastClicked = null;
          this.revealedCards = 0;
        } else {
          this.revealedCards++;
          if (this.revealedCards == 2) {
            this.waiting = true;
            setTimeout(() => {
              this.hideCard(id);
              this.hideCardByImageId(this.lastClicked);
              this.revealedCards = 0;
              this.lastClicked = null;
              this.waiting = false;
            }, 1000);
          } else {
            this.lastClicked = imageId;
          }
        }
      }
    }
  }

  showCard(id: number): void {
    this.cards.map((card: any) =>
      card.id === id ? (card.revealed = true) : true
    );
  }

  hideCard(id: number): void {
    this.cards.map((card: any) =>
      card.id === id ? (card.revealed = false) : true
    );
  }

  hideCardByImageId(imageId: string): void {
    this.cards.map((card: any) =>
      card.imageId === imageId ? (card.revealed = false) : true
    );
  }

  isCardShown(id: any): boolean {
    return this.cards.find((card: any) => card.id === id).revealed;
  }

  start() {
    this.st = true;
  }

  level(level: string) {
    if (level === 'easy') {
      this.lelevel = 'easy';
      this.boardW = new Array(BOARD_WIDTH_EASY);
      this.boardH = new Array(BOARD_HEIGHT_EASY);
    }
    if (level === 'medium') {
      this.lelevel = 'medium';
      this.boardW = new Array(BOARD_WIDTH_MEDIUM);
      this.boardH = new Array(BOARD_HEIGHT_MEDIUM);
    }
    if (level === 'hard') {
      this.lelevel = 'hard';
      this.boardW = new Array(BOARD_WIDTH_HARD);
      this.boardH = new Array(BOARD_HEIGHT_HARD);
    }
    this.startGame = true;
    this.initGame(level);
  }

  selectPoziom() {
    this.st = true;
    this.startGame = false;
  }


  

  
}
