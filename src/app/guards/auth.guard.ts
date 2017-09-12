import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,
         Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    console.log('canLoad: verificando se o usuário pode carregar o código do modulo.');
    return this.verificarAcesso();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.verificarAcesso();
  }

  private verificarAcesso() {
    if (this.authService.isUsuarioAutenticado()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

}
