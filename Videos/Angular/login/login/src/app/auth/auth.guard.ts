import { LoginService } from './services/login.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';

export class authGuard implements CanActivate{
  constructor(
    private LoginService: LoginService,
    private router: Router
  ){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const usuarioLogado = this.LoginService.usuarioLogado;
    let url = state.url;
    if (usuarioLogado){
      if(route.data?.['role'] && route.data?.['role'].indexOf(usuarioLogado.perfil)===-1){
        //se o perfil do usuário não está no perfil da rota
        //vai para login
        this.router.navigate(['/login'],
          { queryParams: { error: "Probido o acesso a " + url}});
          return false;
      }
    //em qualquer outro caso, permite o acesso
    return true;  
    }
    //se não está logado, vai para login
    this.router.navigate(['/login'],
      { queryParams: {error: "Deve fazzer o login antes de acessar " + url}});
      return false;
  }
};
