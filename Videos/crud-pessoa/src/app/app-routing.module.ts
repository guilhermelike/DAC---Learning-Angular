import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPessoaComponent } from './pessoa/listar-pessoa/listar-pessoa.component';
import { InserirPessoaComponent } from './pessoa/inserir-pessoa/inserir-pessoa.component';
import { EditarPessoaComponent } from './pessoa/editar-pessoa/editar-pessoa.component';
import { ListarEnderecoComponent } from './endereco/listar-endereco';
import { InserirEnderecoComponent } from './endereco/inserir-endereco';
import { EditarEnderecoComponent } from './endereco/editar-endereco/editar-endereco.component';
import { ListarCidadeComponent } from './cidade/listar-cidade/listar-cidade.component';
import { InserirCidadeComponent } from './cidade/inserir-cidade/inserir-cidade.component';
import { EditarCidadeComponent } from './cidade/editar-cidade/editar-cidade.component';

const routes: Routes = [
 {
  path: '',
  redirectTo: 'pessoas/listar',
  pathMatch: 'full'
 },
  {
    path: 'pessoas',
    redirectTo: 'pessoas/listar'
  },
  {
    path: 'pessoas/listar',
    component: ListarPessoaComponent
  },
  {
    path: 'pessoas/novo',
    component: InserirPessoaComponent
  },
  {
    path: 'pessoas/editar/:id',
    component: EditarPessoaComponent
  },
  {
    path: 'endereco',
    component: ListarEnderecoComponent
  },
  {
    path: 'endereco/novo',
    component: InserirEnderecoComponent
  },
  {
    path: 'endereco/editar/:id',
    component: EditarEnderecoComponent
  },
  {
    path: 'cidade',
    component: ListarCidadeComponent
  },
  {
    path: 'cidade/novo',
    component: InserirCidadeComponent
  },
  {
    path: 'cidade/editar/:id',
    component: EditarCidadeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
