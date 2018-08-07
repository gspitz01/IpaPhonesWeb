import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VowelsComponent } from './vowels/vowels.component';
import { ConsonantsComponent } from './consonants/consonants.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'vowels', component: VowelsComponent },
  { path: 'consonants', component: ConsonantsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
