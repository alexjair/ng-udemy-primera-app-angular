import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from '../services/login.service';


@Injectable()
export class LoginGuardian implements CanActivate {

    constructor(private loginService: LoginService,
                private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('isAutenticado(): => ',this.loginService.isAutenticado());

        if (this.loginService.isAutenticado()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    }

}
