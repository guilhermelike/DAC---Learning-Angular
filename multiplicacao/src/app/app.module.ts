import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MultiplicacaoModule } from './multiplicacao';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    MultiplicacaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
