(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.css":
/*!***********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0dXMvYWJvdXR1cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.html":
/*!************************************************!*\
  !*** ./src/app/aboutus/aboutus.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  aboutus works!\n</p>\n"

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.ts":
/*!**********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.ts ***!
  \**********************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(/*! ./aboutus.component.html */ "./src/app/aboutus/aboutus.component.html"),
            styles: [__webpack_require__(/*! ./aboutus.component.css */ "./src/app/aboutus/aboutus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe/recipe.component */ "./src/app/recipe/recipe.component.ts");
/* harmony import */ var _myrecipe_myrecipe_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./myrecipe/myrecipe.component */ "./src/app/myrecipe/myrecipe.component.ts");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./recipe-detail/recipe-detail.component */ "./src/app/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _interceptor_AuthorizedRouteInterceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./interceptor/AuthorizedRouteInterceptor */ "./src/app/interceptor/AuthorizedRouteInterceptor.ts");











var routes = [
    //{path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], canActivate: [_interceptor_AuthorizedRouteInterceptor__WEBPACK_IMPORTED_MODULE_10__["AuthorizedRouteInterceptor"]] },
    { path: 'recipes', component: _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_3__["RecipeComponent"], canActivate: [_interceptor_AuthorizedRouteInterceptor__WEBPACK_IMPORTED_MODULE_10__["AuthorizedRouteInterceptor"]] },
    { path: 'detail/:id', component: _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_8__["RecipeDetailComponent"], canActivate: [_interceptor_AuthorizedRouteInterceptor__WEBPACK_IMPORTED_MODULE_10__["AuthorizedRouteInterceptor"]] },
    { path: 'myrecipes', component: _myrecipe_myrecipe_component__WEBPACK_IMPORTED_MODULE_4__["MyrecipeComponent"], canActivate: [_interceptor_AuthorizedRouteInterceptor__WEBPACK_IMPORTED_MODULE_10__["AuthorizedRouteInterceptor"]] },
    { path: 'aboutus', component: _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_5__["AboutusComponent"], canActivate: [_interceptor_AuthorizedRouteInterceptor__WEBPACK_IMPORTED_MODULE_10__["AuthorizedRouteInterceptor"]] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2 routerLink=\"/dashboard\">{{appTitle}}</h2>\n    <app-menu></app-menu>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.appTitle = 'My Recipes';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipe/recipe.component */ "./src/app/recipe/recipe.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _myrecipe_myrecipe_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./myrecipe/myrecipe.component */ "./src/app/myrecipe/myrecipe.component.ts");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./recipe-detail/recipe-detail.component */ "./src/app/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _interceptor_BasicAuthenticationInterceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./interceptor/BasicAuthenticationInterceptor */ "./src/app/interceptor/BasicAuthenticationInterceptor.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _interceptor_AuthorizedRouteInterceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./interceptor/AuthorizedRouteInterceptor */ "./src/app/interceptor/AuthorizedRouteInterceptor.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_5__["RecipeComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                _myrecipe_myrecipe_component__WEBPACK_IMPORTED_MODULE_9__["MyrecipeComponent"],
                _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_10__["AboutusComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_13__["RecipeDetailComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                    useClass: _interceptor_BasicAuthenticationInterceptor__WEBPACK_IMPORTED_MODULE_14__["BasicAuthenticationInterceptor"],
                    multi: true
                },
                _interceptor_AuthorizedRouteInterceptor__WEBPACK_IMPORTED_MODULE_16__["AuthorizedRouteInterceptor"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-4\">Welcome!</h1>\n  <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n  <hr class=\"my-4\">\n  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\n  <a class=\"btn btn-primary btn-lg\" routerLink=\"/recipes\" role=\"button\">Learn more</a>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/interceptor/AuthorizedRouteInterceptor.ts":
/*!***********************************************************!*\
  !*** ./src/app/interceptor/AuthorizedRouteInterceptor.ts ***!
  \***********************************************************/
/*! exports provided: AuthorizedRouteInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizedRouteInterceptor", function() { return AuthorizedRouteInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/auth/login.service */ "./src/app/service/auth/login.service.ts");




var AuthorizedRouteInterceptor = /** @class */ (function () {
    function AuthorizedRouteInterceptor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    AuthorizedRouteInterceptor.prototype.canActivate = function () {
        if (this.loginService.isLogged()) {
            return true;
        }
        console.log('Not authorized user!');
        this.router.navigate(['./login']);
    };
    AuthorizedRouteInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_auth_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthorizedRouteInterceptor);
    return AuthorizedRouteInterceptor;
}());



/***/ }),

/***/ "./src/app/interceptor/BasicAuthenticationInterceptor.ts":
/*!***************************************************************!*\
  !*** ./src/app/interceptor/BasicAuthenticationInterceptor.ts ***!
  \***************************************************************/
/*! exports provided: BasicAuthenticationInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicAuthenticationInterceptor", function() { return BasicAuthenticationInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BasicAuthenticationInterceptor = /** @class */ (function () {
    function BasicAuthenticationInterceptor() {
    }
    BasicAuthenticationInterceptor.prototype.intercept = function (req, next) {
        console.log('Set Authentication Basic...');
        req = req.clone({
            setHeaders: {
                Authorization: 'Basic ' + btoa('vacammar:vacammar')
            }
        });
        return next.handle(req);
    };
    BasicAuthenticationInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], BasicAuthenticationInterceptor);
    return BasicAuthenticationInterceptor;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Login</h1>\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n    <input type=\"text\" formControlName=\"username\">\n    <input type=\"password\" formControlName=\"password\">\n    <input type=\"submit\" value=\"Login\">\n</form>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth/login.service */ "./src/app/service/auth/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService, formBuilder, router) {
        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "formControls", {
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.login = function () {
        var _this = this;
        var _user = this.loginForm.value;
        this.loginService.login(_user).subscribe(function (response) {
            localStorage.setItem('user', JSON.stringify(response));
            _this.router.navigate(['./dashboard']);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_auth_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav justify-content-center\">\n  <li class=\"nav-item\" *ngFor=\"let menuItem of menuItemList\">\n    <a class=\"nav-link\" routerLink=\"/{{menuItem.routerLink}}\">{{menuItem.title}}</a>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.menuItemList = new Array();
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.initializeMenu();
    };
    MenuComponent.prototype.initializeMenu = function () {
        this.menuItemList.push({ title: 'Home', routerLink: 'dashboard' });
        this.menuItemList.push({ title: 'Recipes', routerLink: 'recipes' });
        this.menuItemList.push({ title: 'My Recipes', routerLink: 'myrecipes' });
        this.menuItemList.push({ title: 'About Us', routerLink: 'aboutus' });
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/model/Recipe.ts":
/*!*********************************!*\
  !*** ./src/app/model/Recipe.ts ***!
  \*********************************/
/*! exports provided: Recipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Recipe", function() { return Recipe; });
var Recipe = /** @class */ (function () {
    function Recipe() {
    }
    return Recipe;
}());



/***/ }),

/***/ "./src/app/myrecipe/myrecipe.component.css":
/*!*************************************************!*\
  !*** ./src/app/myrecipe/myrecipe.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215cmVjaXBlL215cmVjaXBlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/myrecipe/myrecipe.component.html":
/*!**************************************************!*\
  !*** ./src/app/myrecipe/myrecipe.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card recipe\" style=\"width: 18rem;\" *ngFor=\"let recipe of recipeList\">\n  <img src=\"images/no-image-available.jpg\" class=\"card-img-top\" alt=\"...\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{recipe.title}}</h5>\n    <b class=\"card-text\">Ingredients:</b>\n    <p class=\"card-text\">{{recipe.description}}</p>\n    <p class=\"card-text\"><b>Author:</b>&nbsp;{{recipe.author}}</p>\n    <a class=\"btn btn-primary\" routerLink=\"/detail/{{recipe.id}}\">\n      Details\n    </a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/myrecipe/myrecipe.component.ts":
/*!************************************************!*\
  !*** ./src/app/myrecipe/myrecipe.component.ts ***!
  \************************************************/
/*! exports provided: MyrecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyrecipeComponent", function() { return MyrecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/recipe.service */ "./src/app/service/recipe.service.ts");



var MyrecipeComponent = /** @class */ (function () {
    function MyrecipeComponent(recipeService) {
        this.recipeService = recipeService;
    }
    MyrecipeComponent.prototype.ngOnInit = function () {
        this.getRecipesByAuthor('vacammar');
    };
    MyrecipeComponent.prototype.getRecipesByAuthor = function (author) {
        var _this = this;
        this.recipeService.getRecipesByAuthor(author).subscribe(function (recipes) { return _this.recipeList = recipes; });
    };
    MyrecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myrecipe',
            template: __webpack_require__(/*! ./myrecipe.component.html */ "./src/app/myrecipe/myrecipe.component.html"),
            styles: [__webpack_require__(/*! ./myrecipe.component.css */ "./src/app/myrecipe/myrecipe.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"]])
    ], MyrecipeComponent);
    return MyrecipeComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Page not found !</h1>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/recipe-detail/recipe-detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/recipe-detail/recipe-detail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".recipe-container {\n    margin: 0 auto;\n}\n\n.recipe {\n    overflow-y: auto;\n    margin: 5px 5px 5px 5px;\n    box-shadow: lightgrey 1px 1px 1px;\n    float: left;\n    min-height: 350px;\n}\n\n.recipe-detail-container {\n    clear: both;\n    padding: 15px;\n    background-color: #d3ff9b;\n    box-shadow: lightgrey 2px 2px 2px;\n    margin: 5px 5px 5px 5px;\n    max-height: 300px;\n    overflow-y: auto;\n}\n\n.show-details {\n    background-color: lightgrey;\n    border: none;\n    margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlLWRldGFpbC9yZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixpQ0FBaUM7SUFDakMsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGlDQUFpQztJQUNqQyx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZS1kZXRhaWwvcmVjaXBlLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlY2lwZS1jb250YWluZXIge1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ucmVjaXBlIHtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIG1hcmdpbjogNXB4IDVweCA1cHggNXB4O1xuICAgIGJveC1zaGFkb3c6IGxpZ2h0Z3JleSAxcHggMXB4IDFweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtaW4taGVpZ2h0OiAzNTBweDtcbn1cblxuLnJlY2lwZS1kZXRhaWwtY29udGFpbmVyIHtcbiAgICBjbGVhcjogYm90aDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkM2ZmOWI7XG4gICAgYm94LXNoYWRvdzogbGlnaHRncmV5IDJweCAycHggMnB4O1xuICAgIG1hcmdpbjogNXB4IDVweCA1cHggNXB4O1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5zaG93LWRldGFpbHMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/recipe-detail/recipe-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/recipe-detail/recipe-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"recipe-detail-container\">\n  <h3>{{recipe.title}}</h3>\n  <b>Ingredients</b>\n  <p>{{recipe.description}}</p>\n  <p><b>Author:</b>&nbsp;{{recipe.author}}</p>\n  <div class=\"remove-recipe\" title=\"Remove recipe\">\n    <!--<button class=\"btn btn-danger\" (click)=\"removeRecipe(recipe.id)\">Remove</button> -->\n    <button class=\"btn btn-primary\" routerLink=\"/recipes\">close</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/recipe-detail/recipe-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/recipe-detail/recipe-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: RecipeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailComponent", function() { return RecipeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_recipe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/recipe.service */ "./src/app/service/recipe.service.ts");
/* harmony import */ var _model_Recipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/Recipe */ "./src/app/model/Recipe.ts");






var RecipeDetailComponent = /** @class */ (function () {
    function RecipeDetailComponent(route, location, recipeService) {
        this.route = route;
        this.location = location;
        this.recipeService = recipeService;
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
        this.recipe = new _model_Recipe__WEBPACK_IMPORTED_MODULE_5__["Recipe"]();
        this.getRecipeDetails();
    };
    RecipeDetailComponent.prototype.getRecipeDetails = function () {
        var _this = this;
        var recipeId = Number(this.route.snapshot.paramMap.get('id'));
        this.recipeService.getRecipeById(recipeId).subscribe(function (recipe) {
            _this.recipe = recipe;
            console.log(recipe);
        });
        console.log('Recipe ID: ' + recipeId);
    };
    RecipeDetailComponent.prototype.removeRecipe = function (id) {
        this.recipeService.removeRecipe(id).subscribe(function (ack) {
            //this.getRecipe();
        });
    };
    RecipeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-recipe-detail',
            template: __webpack_require__(/*! ./recipe-detail.component.html */ "./src/app/recipe-detail/recipe-detail.component.html"),
            styles: [__webpack_require__(/*! ./recipe-detail.component.css */ "./src/app/recipe-detail/recipe-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _service_recipe_service__WEBPACK_IMPORTED_MODULE_4__["RecipeService"]])
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());



/***/ }),

/***/ "./src/app/recipe/recipe.component.css":
/*!*********************************************!*\
  !*** ./src/app/recipe/recipe.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".recipe-container {\n    margin: 0 auto;\n}\n\n.recipe {\n    overflow-y: auto;\n    margin: 5px 5px 5px 5px;\n    box-shadow: lightgrey 1px 1px 1px;\n    float: left;\n    min-height: 350px;\n}\n\n.recipe-detail-container {\n    clear: both;\n    padding: 15px;\n    background-color: #d3ff9b;\n    box-shadow: lightgrey 2px 2px 2px;\n    margin: 5px 5px 5px 5px;\n    max-height: 300px;\n    overflow-y: auto;\n}\n\n.show-details {\n    background-color: lightgrey;\n    border: none;\n    margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlL3JlY2lwZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsaUNBQWlDO0lBQ2pDLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixpQ0FBaUM7SUFDakMsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9yZWNpcGUvcmVjaXBlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVjaXBlLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5yZWNpcGUge1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgbWFyZ2luOiA1cHggNXB4IDVweCA1cHg7XG4gICAgYm94LXNoYWRvdzogbGlnaHRncmV5IDFweCAxcHggMXB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIG1pbi1oZWlnaHQ6IDM1MHB4O1xufVxuXG4ucmVjaXBlLWRldGFpbC1jb250YWluZXIge1xuICAgIGNsZWFyOiBib3RoO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QzZmY5YjtcbiAgICBib3gtc2hhZG93OiBsaWdodGdyZXkgMnB4IDJweCAycHg7XG4gICAgbWFyZ2luOiA1cHggNXB4IDVweCA1cHg7XG4gICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnNob3ctZGV0YWlscyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/recipe/recipe.component.html":
/*!**********************************************!*\
  !*** ./src/app/recipe/recipe.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"recipeForm\" (ngSubmit)=\"addRecipe()\" class=\"form-row\">\n    <div class=\"col-auto\">\n        <input class=\"form-control\" placeholder=\"Id\" formControlName=\"id\">\n    </div>\n    <div class=\"col-auto\">\n        <input class=\"form-control\" placeholder=\"Title\" formControlName=\"title\">\n    </div>\n    <div class=\"col-auto\">\n        <input class=\"form-control\" placeholder=\"Description\" formControlName=\"description\">\n    </div>\n    <div class=\"col-auto\">\n        <input type=\"submit\" value=\"Add new\">\n    </div>\n</form>\n\n<div class=\"card recipe\" style=\"width: 18rem;\" *ngFor=\"let recipe of recipeList\">\n    <img src=\"images/no-image-available.jpg\" class=\"card-img-top\" alt=\"...\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">{{recipe.title}}</h5>\n        <b class=\"card-text\">Ingredients:</b>\n        <p class=\"card-text\">{{recipe.description}}</p>\n        <p class=\"card-text\"><b>Author:</b>&nbsp;{{recipe.author}}</p>\n        <a class=\"btn btn-primary\" routerLink=\"/detail/{{recipe.id}}\">\n            Details\n        </a>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/recipe/recipe.component.ts":
/*!********************************************!*\
  !*** ./src/app/recipe/recipe.component.ts ***!
  \********************************************/
/*! exports provided: RecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeComponent", function() { return RecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/recipe.service */ "./src/app/service/recipe.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var RecipeComponent = /** @class */ (function () {
    function RecipeComponent(recipeService, formBuilder) {
        this.recipeService = recipeService;
        this.formBuilder = formBuilder;
        this.AUTHOR = 'vacammar';
    }
    RecipeComponent.prototype.ngOnInit = function () {
        this.recipeForm = this.formBuilder.group({
            id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.getRecipe();
    };
    Object.defineProperty(RecipeComponent.prototype, "formControls", {
        get: function () {
            return this.recipeForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    RecipeComponent.prototype.getRecipe = function () {
        var _this = this;
        this.recipeService.getRecipes().subscribe(function (_recipe) { return _this.recipeList = _recipe; });
        this.closeDetail = false;
    };
    RecipeComponent.prototype.detail = function (recipe) {
        this.recipe = recipe;
        this.closeDetail = false;
    };
    RecipeComponent.prototype.addRecipe = function () {
        var _this = this;
        var newRecipe = this.recipeForm.value;
        newRecipe.author = this.AUTHOR;
        this.recipeService.addRecipe(newRecipe).subscribe(function (recipe) {
            if (recipe) {
                _this.recipeList.push(recipe);
            }
        });
    };
    RecipeComponent.prototype.removeRecipe = function (id) {
        var _this = this;
        this.recipeService.removeRecipe(id).subscribe(function (ack) {
            _this.getRecipe();
        });
    };
    RecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe',
            template: __webpack_require__(/*! ./recipe.component.html */ "./src/app/recipe/recipe.component.html"),
            styles: [__webpack_require__(/*! ./recipe.component.css */ "./src/app/recipe/recipe.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], RecipeComponent);
    return RecipeComponent;
}());



/***/ }),

/***/ "./src/app/service/auth/login.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/auth/login.service.ts ***!
  \***********************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    /**
     * Login function, return user if
     * authentication is ok else null.
     *
     * @param user
     * @return User
     */
    LoginService.prototype.login = function (user) {
        var url = 'http://localhost:8081/api/v1/auth';
        return this.http.post(url, user);
    };
    /**
     * Check if user is logged.
     *
     * @return boolean
     */
    LoginService.prototype.isLogged = function () {
        if (localStorage.getItem('user')) {
            return true;
        }
        return false;
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/service/recipe.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/recipe.service.ts ***!
  \*******************************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var RecipeService = /** @class */ (function () {
    function RecipeService(http) {
        this.http = http;
        this.API_URL = 'http://localhost:8081/api/v1';
    }
    RecipeService.prototype.getRecipes = function () {
        return this.http.get(this.API_URL + '/recipes');
    };
    RecipeService.prototype.getRecipeById = function (id) {
        return this.http.get(this.API_URL + '/recipe/' + id);
    };
    RecipeService.prototype.addRecipe = function (recipe) {
        return this.http.post(this.API_URL, recipe);
    };
    RecipeService.prototype.removeRecipe = function (id) {
        return this.http.delete(this.API_URL + '/remove/' + id);
    };
    RecipeService.prototype.getRecipesByAuthor = function (author) {
        return this.http.get(this.API_URL + '/recipe/author/' + author);
    };
    RecipeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RecipeService);
    return RecipeService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/valerio/git/RecipeApp/fe/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map