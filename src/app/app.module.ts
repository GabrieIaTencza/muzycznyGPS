import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ThemeSwitcherComponent } from './components/ui/theme-switcher/theme-switcher.component';
import { ThemeSelectService } from './components/ui/theme-switcher/services/theme-select.service';
import { StyleManagerService } from './components/ui/theme-switcher/services/style-manager.service';
import { CardService } from './components/services/card.service';
import { CardComponent } from './components/card/card.component';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ParentPanelComponent } from './components/parent-panel/parent-panel.component';
import { CreatorComponent } from './components/creator/creator.component';
import { SecondGameComponent } from './components/second-game/second-game.component';
import { CiekawostkiComponent } from './components/ciekawostki/ciekawostki.component';

const routes: Routes = [
  { path: 'memory-game', component: AppComponent },
  { path: '', component: MainPageComponent},
  { path: 'parent-page', component: ParentPanelComponent},
  { path: 'about-me', component: CreatorComponent},
  { path: 'game', component: SecondGameComponent},
  { path: 'curiosities', component: CiekawostkiComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ThemeSwitcherComponent,
    CardComponent,
    NavigationBarComponent,
    ParentPanelComponent,
    CreatorComponent,
    SecondGameComponent,
    CiekawostkiComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [StyleManagerService, ThemeSelectService, CardService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
