import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SubtracaoModule, SubtracaoService } from './subtracao';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SubtracaoModule
  ],
  providers: [
    SubtracaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
