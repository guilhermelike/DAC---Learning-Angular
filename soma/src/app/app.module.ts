import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SomaModule } from './soma';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SomaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
