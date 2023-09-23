import { LoginService } from './../services/login.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from 'src/app/shared';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent  implements OnInit{
  ngOnInit(): void { 
    this.route.queryParams.subscribe(params => {
      this.message = params['error'];
    })
  }
@ViewChild('formLogin') formLogin! : NgForm;
login: Login = new Login();
loading: boolean = false;
message!: string;
constructor(
  private LoginService : LoginService,
  private router: Router,
  private route: ActivatedRoute
){
  if(this.LoginService.usuarioLogado){
    this.router.navigate(["/home"]);
  }
}
logar(): void{
  this.loading = true;
  if(this.formLogin.form.valid){
    this.LoginService.login(this.login).subscribe((usu) => {
      if(usu != null) {
        this.LoginService.usuarioLogado = usu;
        this.loading = false;
        this.router.navigate(["/home"]);
      }
      else{
        this.loading = false;
        this.message = "Usuário/Senha inválidos";
      }
    });
  } this.loading = false;
}
}
