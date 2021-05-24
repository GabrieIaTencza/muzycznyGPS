import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-game',
  templateUrl: './second-game.component.html',
  styleUrls: ['./second-game.component.scss']
})
export class SecondGameComponent implements OnInit {

  sound = false;
  showCorrectMessage = false;
  showWrongMessage = false;
  game2Start = false;
  mainItem!: any;
  correctAnswer = false;
  answerCounter = 0;
  endGame = false;

  bajki = [
    {
      url: '../../../../assets/music2/bajki/Elsa.mp3',
      kategoria: 'bajki'
    },
    {
      url: '../../../../assets/music2/bajki/masza.mp3',
      kategoria: 'bajki'
    },
    {
      url: '../../../../assets/music2/bajki/patrol.mp3',
      kategoria: 'bajki'
    }
  ];

  miejsca = [
    {
      url: '../../../../assets/music2/miejsca/gory.mp3',
      kategoria: 'miejsca'
    },
    {
      url: '../../../../assets/music2/miejsca/morze.mp3',
      kategoria: 'miejsca'
    },
    {
      url: '../../../../assets/music2/miejsca/wies.mp3',
      kategoria: 'miejsca'
    }
  ];

  osoby = [
    {
      url: '../../../../assets/music2/osoby/niemowle.mp3',
      kategoria: 'osoby',
    },
    {
      url: '../../../../assets/music2/osoby/dorosly.mp3',
      kategoria: 'osoby',
    },
    {
      url: '../../../../assets/music2/osoby/starsza.mp3',
      kategoria: 'osoby',
    },
  ];

  polska = [
    {
      url: '../../../../assets/music2/polska/slask.mp3',
      kategoria: 'polska',
    },
    {
      url: '../../../../assets/music2/polska/wielkopolska.mp3',
      kategoria: 'polska',
    },
    {
      url: '../../../../assets/music2/polska/podhale.mp3',
      kategoria: 'polska',
    },
    {
      url: '../../../../assets/music2/polska/mazowsze.mp3',
      kategoria: 'polska',
    },
  ];

  pory_roku = [
    {
      url: '../../../../assets/music2/pory_roku/wiosna.mp3',
      kategoria: 'pory_roku',
    },
    {
      url: '../../../../assets/music2/pory_roku/lato.mp3',
      kategoria: 'pory_roku',
    },
    {
      url: '../../../../assets/music2/pory_roku/jesien.mp3',
      kategoria: 'pory_roku',
    },
    {
      url: '../../../../assets/music2/pory_roku/zima.mp3',
      kategoria: 'pory_roku',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

  
  get_random(list: any) {
    return list[Math.floor(Math.random() * list.length)];
  }

  play() {
    this.sound = true;
    const index = Math.floor(Math.random() * (5))
    const categoryArray = [
      this.bajki,
      this.miejsca,
      this.osoby,
      this.polska,
      this.pory_roku,
    ];
  

    setTimeout(() => {
      let audio = new Audio();
      const category = categoryArray[index];
      const item = this.get_random(category);
      this.mainItem = item;
      audio.src = item.url;
      audio.load();
      audio.play();
      this.game2Start = true;
      setTimeout(() => {
        audio.pause();
        this.sound = false;
      }, 10000);
    }, 500);
  }

  playAgain() {
    this.endGame = false;
    let audio = new Audio();
    const item = this.mainItem;
    audio.src = item.url;
      audio.load();
      audio.play();
      this.game2Start = true;
      setTimeout(() => {
        audio.pause();
        this.sound = false;
      }, 10000);
  }

  answer(typ: string) {
    if(this.mainItem.kategoria === typ) {
      this.correctAnswer = true;
      this.answerCounter++;
      
      this.showCorrectMessage = true;
      setTimeout(() => {
        this.showCorrectMessage = false;
        if(this.answerCounter > 0) {
          this.endGame = true;
  
          return;
        }
        this.play();
      }, 3000);
    } else {
      this.correctAnswer = false;
      this.showWrongMessage = true;
      setTimeout(() => {
        this.showWrongMessage = false;
      }, 3000);
    }
  }

}
