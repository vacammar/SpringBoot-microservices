import {Component, OnInit} from '@angular/core';
import {LoginService} from "./service/auth/login.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    appTitle: string = 'My Recipes';

    constructor(private loginService: LoginService) {
    }

    ngOnInit(): void {
        this.loginService.removeLoggedUser();
    }

}
