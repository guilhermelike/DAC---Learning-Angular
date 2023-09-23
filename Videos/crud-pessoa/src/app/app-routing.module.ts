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
import { ListarEstadoComponent } from './estado/listar-estado/listar-estado.component';
import { InserirEstadoComponent } from './estado/inserir-estado/inserir-estado.component';
import { EditarEstadoComponent } from './estado/editar-estado/editar-estado.component';
import { LoginComponent } from './auth/login/login.component';
import { LoginRoutes } from './auth/auth-routing.module';
import { authGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
 {
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
 },

 ...LoginRoutes,

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
    component: InserirPessoaComponent,
    canActivate: [authGuard],
    data: {
    role:  'ADMIN, GERENTE, FUNC'
    }
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
    component: InserirEnderecoComponent,
    canActivate: [authGuard],
    data: {
      role: 'ADMIN, GERENTE'
    }
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
    component: InserirCidadeComponent,
    canActivate: [authGuard],
    data: {
      role: 'GERENTE'
    }
  },
  {
    path: 'cidade/editar/:id',
    component: EditarCidadeComponent
  },
  {
    path: 'estado',
    component: ListarEstadoComponent
  },
  {
    path: 'estado/novo',
    component: InserirEstadoComponent,
    canActivate: [authGuard],
    data: {
      role: 'ADMIN, FUNC'
    }
  },
  {
    path: 'estado/editar/:id',
    component: EditarEstadoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
    data: {
      role: 'ADMIN, GERENTE, FUNC'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
