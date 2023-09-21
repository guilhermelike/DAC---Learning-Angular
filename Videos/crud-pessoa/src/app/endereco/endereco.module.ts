import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListarEnderecoComponent } from './listar-endereco';
import { EnderecoService } from './services';
import { InserirEnderecoComponent } from './inserir-endereco';
import { EditarEnderecoComponent } from './editar-endereco/editar-endereco.component';
import { SharedModule } from '../shared';
import { ModalEnderecoComponent } from './modal-endereco/modal-endereco.component';

@NgModule({
  declarations: [
    ListarEnderecoComponent,
    InserirEnderecoComponent,
    EditarEnderecoComponent,
    ModalEnderecoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    EnderecoService
  ]
})
export class EnderecoModule { }
