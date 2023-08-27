import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaModule } from './pessoa';
import { EnderecoModule } from './endereco/endereco.module';
import { CidadeModule } from './cidade/cidade.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PessoaModule,
    EnderecoModule,
    CidadeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }