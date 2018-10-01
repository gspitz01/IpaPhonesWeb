import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxAutoScrollModule } from 'ngx-auto-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { VowelsComponent } from './vowels/vowels.component';
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
import { ConsonantsComponent } from './consonants/consonants.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ListenComponent } from './listen/listen.component';
import { AdvancedVowelSoundsGameComponent } from './advanced-vowel-sounds-game/advanced-vowel-sounds-game.component';
import { AdvancedConsonantSoundsGameComponent } from './advanced-consonant-sounds-game/advanced-consonant-sounds-game.component';
import { SimpleVowelSymbolsGameComponent } from './simple-vowel-symbols-game/simple-vowel-symbols-game.component';
import { SoundsGameBoardComponent } from './sounds-game-board/sounds-game-board.component';

@NgModule({
  declarations: [
    AppComponent,
    VowelsComponent,
    EscapeHtmlPipe,
    ConsonantsComponent,
    HomeComponent,
    ListenComponent,
    AdvancedVowelSoundsGameComponent,
    AdvancedConsonantSoundsGameComponent,
    SimpleVowelSymbolsGameComponent,
    SoundsGameBoardComponent
  ],
  imports: [
    BrowserModule,
    NgxAutoScrollModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
