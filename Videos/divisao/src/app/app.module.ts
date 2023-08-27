import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DivisaoModule } from './divisao';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DivisaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
