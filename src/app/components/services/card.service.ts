import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BOARD_HEIGHT_EASY, BOARD_WIDTH_EASY, BOARD_HEIGHT_MEDIUM, BOARD_WIDTH_MEDIUM, BOARD_HEIGHT_HARD, BOARD_WIDTH_HARD } from 'src/app/settings';

@Injectable()
export class CardService {
  constructor(private readonly http: HttpClient) {}

  /*
   * Get a list of images from picsum based on the board settings
   */
  getMusicArray(level: string): Observable<any> {
    let NUMBER_OF_IMAGES
    if(level === 'easy') {
      NUMBER_OF_IMAGES = Math.round((BOARD_WIDTH_EASY * BOARD_HEIGHT_EASY) / 2);
    }
    if(level === 'medium') {
      NUMBER_OF_IMAGES = Math.round((BOARD_WIDTH_MEDIUM * BOARD_HEIGHT_MEDIUM) / 2);
    }
    if(level === 'hard') {
      NUMBER_OF_IMAGES = Math.round((BOARD_WIDTH_HARD * BOARD_HEIGHT_HARD) / 2);
    }
   
    return of([
      'assets/music/burza.mp3',
      'assets/music/gory.mp3',
      'assets/music/grudzien.mp3',
      'assets/music/kaczka.mp3',
      'assets/music/kot.mp3',
      'assets/music/las.mp3',
      'assets/music/listopad.mp3',
      'assets/music/morze.mp3',
      'assets/music/mysz.mp3',
      'assets/music/pies.mp3',
      'assets/music/samochod.mp3',
      'assets/music/statek.mp3',
      'assets/music/styczen.mp3',
      'assets/music/wies.mp3',
    ].splice(0, NUMBER_OF_IMAGES));
  }
}
