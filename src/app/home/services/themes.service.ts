import { Injectable } from '@angular/core';
import { ThemeCard } from '../interfaces/theme.interface';
import { homeButton } from '../interfaces/home-button.interface';

@Injectable({
  providedIn: 'root',
})
export class ThemesService {

  public languageButtonImgPath: string = 'assets/languages/';
  public languageButtons: homeButton[] = [
    {
      img: this.languageButtonImgPath + 'es.png',
      value: 'es',
    },
    {
      img: this.languageButtonImgPath + 'br.png',
      value: 'br',
    },
    {
      img: this.languageButtonImgPath + 'us.png',
      value: 'us',
    },
  ];

  public themeButtonImgPath: string = 'assets/themes/';
  public themeButtons: homeButton[] = [
    {
      img: this.themeButtonImgPath + 'animals/imgs/rabbit.png',
      value: 'animals',
    },
    {
      img: this.themeButtonImgPath + 'colors/imgs/red.png',
      value: 'colors',
    },
    {
      img: this.themeButtonImgPath + 'numbers/imgs/five.png',
      value: 'numbers',
    },
  ];

  private animalsImgPath: string = 'assets/themes/animals/imgs/';
  private colorsImgPath: string = 'assets/themes/colors/imgs/';
  private numbersImgPath: string = 'assets/themes/numbers/imgs/';

  public animals: ThemeCard[] = [
    { image: this.animalsImgPath + 'chicken.png', value: 'chicken' },
    { image: this.animalsImgPath + 'octopus.png', value: 'octopus' },
    { image: this.animalsImgPath + 'tiger.png', value: 'tiger' },
    { image: this.animalsImgPath + 'whale.png', value: 'whale' },
    { image: this.animalsImgPath + 'rabbit.png', value: 'rabbit' },
    { image: this.animalsImgPath + 'gorilla.png', value: 'gorilla' },
  ];

  public colors: ThemeCard[] = [
    { image: this.colorsImgPath + 'red.png', value: 'red' },
    { image: this.colorsImgPath + 'black.png', value: 'black' },
    { image: this.colorsImgPath + 'blue.png', value: 'blue' },
    { image: this.colorsImgPath + 'green.png', value: 'green' },
    { image: this.colorsImgPath + 'yellow.png', value: 'yellow' },
    { image: this.colorsImgPath + 'orange.png', value: 'orange' },

  ];

  public numbers: ThemeCard[] = [
    { image: this.numbersImgPath + 'one.png', value: 'one' },
    { image: this.numbersImgPath + 'two.png', value: 'two' },
    { image: this.numbersImgPath + 'three.png', value: 'three' },
    { image: this.numbersImgPath + 'four.png', value: 'four' },
    { image: this.numbersImgPath + 'five.png', value: 'five' },
    { image: this.numbersImgPath + 'six.png', value: 'six' },

  ];

  reproduceSound(theme: string, language: string, data: string) {
    let soundPath: string = 'assets/themes/' + theme + '/sounds/';
    let soundPathFull: string = '';
    let soundName: string = '';

    soundName = data + '_' + language + '.mp3';

    soundPathFull = soundPath + soundName;

    this.reproduce(soundPathFull);
  }

  reproduce(ruta: string) {
    let audio = new Audio(ruta);
    audio.play();
  }

}
