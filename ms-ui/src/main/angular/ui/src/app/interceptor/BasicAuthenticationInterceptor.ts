import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Injectable} from "@angular/core";
import {LoginService} from "../service/auth/login.service";

@Injectable()
export class BasicAuthenticationInterceptor implements HttpInterceptor{

    constructor(private authenticationService: LoginService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Set Authentication Basic...');
        if(!req.url.match('/security/')) {
            let _loggedUser = this.authenticationService.getCahcedUser();
            const _credentials = _loggedUser.username +':'+_loggedUser.password;
            req = req.clone({
                setHeaders: {
                    Authorization: 'Basic ' + btoa(_credentials)
                }
            });
        }
        return next.handle(req);
    }
}