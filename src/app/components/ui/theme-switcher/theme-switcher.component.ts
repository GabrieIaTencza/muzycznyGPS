import { Component, OnInit } from '@angular/core';
import { ThemeSelectService } from './services/theme-select.service';
import { ITheme } from '../../../models/itheme';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {
  options$: Observable<ITheme[]> = this.themeService.getThemeOptions();

  constructor(private readonly themeService: ThemeSelectService) {}

  ngOnInit() {
    this.themeService.setTheme("deeppurple-amber");
  }

  themeChangeHandler(themeToSet: string) {
    this.themeService.setTheme(themeToSet);
  }
}
