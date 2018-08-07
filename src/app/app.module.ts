import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxAutoScrollModule } from 'ngx-auto-scroll';

import { AppComponent } from './app.component';
import { VowelsComponent } from './vowels/vowels.component';
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';
import { ConsonantsComponent } from './consonants/consonants.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ListenComponent } from './listen/listen.component';

@NgModule({
  declarations: [
    AppComponent,
    VowelsComponent,
    EscapeHtmlPipe,
    ConsonantsComponent,
    HomeComponent,
    ListenComponent
  ],
  imports: [
    BrowserModule,
    NgxAutoScrollModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
