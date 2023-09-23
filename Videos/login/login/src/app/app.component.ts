import { LoginService } from './auth/services/login.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Login, Usuario } from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login';
  constructor(
    private router: Router,
    private LoginService: LoginService
  ){}

  get usuarioLogado(): Usuario | null{
    return this.LoginService.usuarioLogado;
  }

  logout(){
    this.LoginService.logout();
    this.router.navigate(['/login']);
  }
}
