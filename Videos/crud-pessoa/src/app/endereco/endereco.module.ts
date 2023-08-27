import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListarEnderecoComponent } from './listar-endereco';
import { EnderecoService } from './services';
import { InserirEnderecoComponent } from './inserir-endereco';
import { EditarEnderecoComponent } from './editar-endereco/editar-endereco.component';



@NgModule({
  declarations: [
    ListarEnderecoComponent,
    InserirEnderecoComponent,
    EditarEnderecoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    EnderecoService
  ]
})
export class EnderecoModule { }
