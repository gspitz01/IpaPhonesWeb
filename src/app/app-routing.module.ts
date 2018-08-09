import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdvancedVowelSoundsGameComponent } from './advanced-vowel-sounds-game/advanced-vowel-sounds-game.component';
import { AdvancedConsonantSoundsGameComponent } from './advanced-consonant-sounds-game/advanced-consonant-sounds-game.component';
import { SimpleVowelSymbolsGameComponent } from './simple-vowel-symbols-game/simple-vowel-symbols-game.component';
import { HomeComponent } from './home/home.component';
import { ListenComponent } from './listen/listen.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'advanced-consonant-sounds-game', component: AdvancedConsonantSoundsGameComponent },
  { path: 'listen', component: ListenComponent },
  { path: 'home', component: HomeComponent },
  { path: 'advanced-vowel-sounds-game', component: AdvancedVowelSoundsGameComponent },
  { path: 'simple-vowel-symbols-game', component: SimpleVowelSymbolsGameComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
