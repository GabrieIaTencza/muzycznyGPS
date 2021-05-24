import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITheme } from '../../../../models/itheme';
import { StyleManagerService } from './style-manager.service';


@Injectable({
  providedIn: 'root'
})
export class ThemeSelectService {
  constructor(
    private http: HttpClient,
    private styleManager: StyleManagerService
  ) {}

  getThemeOptions(): Observable<ITheme[]> {
    return this.http.get<ITheme[]>("assets/options.json");
  }

  setTheme(themeToSet: string) {
    this.styleManager.setStyle(
      "theme",
      `node_modules/@angular/material/prebuilt-themes/${themeToSet}.css`
    );
  }
}
