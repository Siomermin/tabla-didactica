import { Component, OnInit, inject, signal } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { ThemesService } from './services/themes.service';
import { ThemeCard, theme } from './interfaces/theme.interface';
import { homeButton, language } from './interfaces/home-button.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private authService = inject(AuthService);
  private themesService = inject(ThemesService);

  public selectedThemeButtonImg: string = this.themesService.themeButtonImgPath + 'animals/imgs/rabbit.png';
  public selectedLanguageButtonImg: string = this.themesService.languageButtonImgPath + 'es.png';

  public themeCards: ThemeCard[] = [];

  public actualLanguage: string = 'es';
  public actualTheme: string = 'animals';


  public languageButtons: homeButton[] = [];
  public themeButtons: homeButton[] = [];


  public loggedUser?: any = JSON.parse(localStorage.getItem('loggedUser')!);

  constructor() {}

  isVerticalOrientation(): boolean {
    return window.innerHeight > window.innerWidth;
  }

  ngOnInit(): void {
    this.themeCards = this.themesService.animals;
    this.languageButtons = this.themesService.languageButtons;
    this.themeButtons = this.themesService.themeButtons;
  }


  logout() {
    this.authService.logout();
  }

  changeTheme(theme: theme) {

    this.actualTheme = theme;
    if (theme === 'animals') {
      this.themeCards = this.themesService.animals;
      this.selectedThemeButtonImg = this.themesService.themeButtonImgPath + 'animals/imgs/rabbit.png';
    } else if (theme === 'colors') {
      this.themeCards = this.themesService.colors;
      this.selectedThemeButtonImg = this.themesService.themeButtonImgPath + 'colors/imgs/red.png';
    } else if (theme === 'numbers') {
      this.themeCards = this.themesService.numbers;
      this.selectedThemeButtonImg = this.themesService.themeButtonImgPath + 'numbers/imgs/five.png';
    }



    console.log(this.themeCards);
  }

  changeLanguage(language: language) {
    this.actualLanguage = language;
    this.selectedLanguageButtonImg = this.themesService.languageButtonImgPath + language + '.png';
  }


  reproduceSound(data: string) {
    this.themesService.reproduceSound(this.actualTheme, this.actualLanguage, data);
  }
}
