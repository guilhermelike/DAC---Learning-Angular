import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarEstadoComponent } from './listar-estado/listar-estado.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InserirEstadoComponent } from './inserir-estado/inserir-estado.component';
import { EstadoService } from './services';
import { EditarEstadoComponent } from './editar-estado/editar-estado.component';



@NgModule({
  declarations: [
    ListarEstadoComponent,
    InserirEstadoComponent,
    EditarEstadoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    EstadoService
  ]
})
export class EstadoModule { }
