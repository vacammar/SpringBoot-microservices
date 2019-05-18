import {Component, OnInit} from '@angular/core';
import {LoginService} from "../service/auth/login.service";
import {User} from "../model/User";
import {FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private loginService: LoginService, private formBuilder: FormBuilder, private router: Router) {
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    get formControls() {
        return this.loginForm.controls;
    }

    login(): void {
        let _user: User = this.loginForm.value;
        this.loginService.login(_user).subscribe(response => {
            localStorage.setItem('user', JSON.stringify(response));
            this.loginService.cacheLoggedUser(response);
            this.router.navigate(['./dashboard']);
        });
    }

}
