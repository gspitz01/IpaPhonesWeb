import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VowelsGameComponent } from './vowels-game/vowels-game.component';
import { ConsonantsGameComponent } from './consonants-game/consonants-game.component';
import { HomeComponent } from './home/home.component';
import { ListenComponent } from './listen/listen.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'consonants-game', component: ConsonantsGameComponent },
  { path: 'listen', component: ListenComponent },
  { path: 'home', component: HomeComponent },
  { path: 'vowels-game', component: VowelsGameComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
