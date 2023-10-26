import { InserirEstadoComponent } from './../../../../crud-pessoa/src/app/estado/inserir-estado/inserir-estado.component';
import { InserirEnderecoComponent } from './../../../../crud-pessoa/src/app/endereco/inserir-endereco/inserir-endereco.component';
import { InserirCidadeComponent } from './../../../../crud-pessoa/src/app/cidade/inserir-cidade/inserir-cidade.component';
import { InserirPessoaComponent } from './../../../../crud-pessoa/src/app/pessoa/inserir-pessoa/inserir-pessoa.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginRoutes } from './auth/auth-routing.module';
import { authGuard } from './auth';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
    data: {
      role: 'ADMIN, GERENTE, FUNC'
    }
  },
  ...LoginRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
