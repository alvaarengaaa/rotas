import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AlunosGuard implements CanActivateChild {

    canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {

        if (state.url.includes('editar')) {
            alert('Usuário sem acesso');
            return false;
        }
        return true;
    }

}
