import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxAutoScrollModule } from 'ngx-auto-scroll';

import { AppComponent } from './app.component';
import { VowelsComponent } from './vowels/vowels.component';
import { EscapeHtmlPipe } from './pipes/keep-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VowelsComponent,
    EscapeHtmlPipe
  ],
  imports: [
    BrowserModule,
    NgxAutoScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
