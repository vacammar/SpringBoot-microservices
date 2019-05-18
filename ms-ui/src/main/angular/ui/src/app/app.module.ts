import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RecipeComponent} from './recipe/recipe.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MenuComponent} from './menu/menu.component';
import {MyrecipeComponent} from './myrecipe/myrecipe.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {BasicAuthenticationInterceptor} from "./interceptor/BasicAuthenticationInterceptor";
import { LoginComponent } from './login/login.component';
import {AuthorizedRouteInterceptor} from "./interceptor/AuthorizedRouteInterceptor";
import {GlobalConstantsService} from "./service/global/global-constants.service";

@NgModule({
    declarations: [
        AppComponent,
        RecipeComponent,
        MenuComponent,
        MyrecipeComponent,
        AboutusComponent,
        PageNotFoundComponent,
        DashboardComponent,
        RecipeDetailComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: BasicAuthenticationInterceptor,
            multi: true
        },
        AuthorizedRouteInterceptor
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
