import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VowelsComponent } from './vowels/vowels.component';
import { ConsonantsComponent } from './consonants/consonants.component';
import { HomeComponent } from './home/home.component';
import { ListenComponent } from './listen/listen.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'consonants', component: ConsonantsComponent },
  { path: 'listen', component: ListenComponent },
  { path: 'home', component: HomeComponent },
  { path: 'vowels', component: VowelsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
