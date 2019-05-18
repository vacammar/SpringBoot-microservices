import {CanActivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {LoginService} from "../service/auth/login.service";

@Injectable()
export class AuthorizedRouteInterceptor implements CanActivate {

    constructor(private loginService: LoginService, private router: Router) {}

    canActivate() {
        if(this.loginService.isLogged()) {
            return true;
        }
        console.log('Not authorized user!');
        this.router.navigate(['./login']);
    }


}