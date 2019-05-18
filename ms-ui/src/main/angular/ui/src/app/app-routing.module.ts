import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RecipeComponent} from "./recipe/recipe.component";
import {MyrecipeComponent} from "./myrecipe/myrecipe.component";
import {AboutusComponent} from "./aboutus/aboutus.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {LoginComponent} from "./login/login.component";
import {AuthorizedRouteInterceptor} from "./interceptor/AuthorizedRouteInterceptor";

const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'home', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [AuthorizedRouteInterceptor]},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthorizedRouteInterceptor]},
    {path: 'recipes', component: RecipeComponent, canActivate: [AuthorizedRouteInterceptor]},
    {path: 'detail/:id', component: RecipeDetailComponent, canActivate: [AuthorizedRouteInterceptor]},
    {path: 'myrecipes', component: MyrecipeComponent, canActivate: [AuthorizedRouteInterceptor]},
    {path: 'aboutus', component: AboutusComponent, canActivate: [AuthorizedRouteInterceptor]},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
