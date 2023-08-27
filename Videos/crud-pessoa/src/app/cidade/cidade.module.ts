import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCidadeComponent } from './listar-cidade/listar-cidade.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InserirCidadeComponent } from './inserir-cidade/inserir-cidade.component';
import { EditarCidadeComponent } from './editar-cidade/editar-cidade.component';



@NgModule({
  declarations: [
    ListarCidadeComponent,
    InserirCidadeComponent,
    EditarCidadeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class CidadeModule { }
