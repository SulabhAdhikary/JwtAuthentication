webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/BaseComponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseComponent; });
var BaseComponent = /** @class */ (function () {
    function BaseComponent(authPsedu) {
        this.authPsedu = authPsedu;
    }
    BaseComponent.prototype.CheckUserLoggedIn = function () {
        return this.authPsedu.IsUserLoggedIn();
    };
    return BaseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_component_login_component_component__ = __webpack_require__("../../../../../src/app/login-component/login-component.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboardcomponent_dashboardcomponent_component__ = __webpack_require__("../../../../../src/app/dashboardcomponent/dashboardcomponent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_AuthenticationService__ = __webpack_require__("../../../../../src/app/services/AuthenticationService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_PersistInStorage__ = __webpack_require__("../../../../../src/app/services/PersistInStorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_token_interceptor__ = __webpack_require__("../../../../../src/app/services/token.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_LoginActivate__ = __webpack_require__("../../../../../src/app/services/LoginActivate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__field_error_display_field_error_display_component__ = __webpack_require__("../../../../../src/app/field-error-display/field-error-display.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__login_component_login_component_component__["a" /* LoginComponentComponent */],
                __WEBPACK_IMPORTED_MODULE_5__dashboardcomponent_dashboardcomponent_component__["a" /* DashboardcomponentComponent */],
                __WEBPACK_IMPORTED_MODULE_12__field_error_display_field_error_display_component__["a" /* FieldErrorDisplayComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot([
                    { path: '', redirectTo: 'Home', pathMatch: 'full' },
                    { path: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__dashboardcomponent_dashboardcomponent_component__["a" /* DashboardcomponentComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_10__services_LoginActivate__["a" /* LoginActivate */]] },
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_component_login_component_component__["a" /* LoginComponentComponent */] }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_AuthenticationService__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_7__services_PersistInStorage__["a" /* PersistStorageUtility */],
                { provide: 'LocalStorage_Name', useValue: 'currentUser' },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_9__services_token_interceptor__["a" /* TokenInterceptor */],
                    multi: true
                }, __WEBPACK_IMPORTED_MODULE_10__services_LoginActivate__["a" /* LoginActivate */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboardcomponent/dashboardcomponent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <div class=\"container\">\r\n    <h1>Welcome!</h1>\r\n    login with a lot of plugins. To install plugins we have bower. Let's keep it real clean!<br /><br />\r\n    <p>\r\n      <a ui-sref=\"login\" class=\"btn btn-primary btn-lg btn-white\"  (click)=\"LogoutClick()\">Logout</a>\r\n    </p>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboardcomponent/dashboardcomponent.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,400,300,600,700);\n.dashboard-page {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: #1abc9c;\n  color: white;\n  /*\r\n     * Base structure\r\n     */\n  /*\r\n     * Global add-ons\r\n     */\n  /*\r\n     * Top navigation\r\n     * Hide default border to remove 1px line.\r\n     */\n  /*\r\n     * Main content\r\n     */\n  /*\r\n     * Placeholder dashboard ideas\r\n     */ }\n.dashboard-page .sub-header {\n    padding-bottom: 10px;\n    border-bottom: 1px solid #eee; }\n.dashboard-page .navbar-fixed-top {\n    border: 0; }\n.dashboard-page h2 {\n    font-weight: 300; }\n.dashboard-page h2 small {\n      color: #fff; }\n.dashboard-page .main {\n    padding: 20px;\n    position: absolute;\n    top: 0px;\n    bottom: 0px;\n    overflow-x: hidden;\n    overflow-y: auto; }\n.dashboard-page .main .jumbotron {\n      background: inherit;\n      margin-top: 20px; }\n@media (min-width: 768px) {\n    .dashboard-page .main {\n      padding-right: 40px;\n      padding-left: 40px; } }\n.dashboard-page .main .page-header {\n    margin-top: 0; }\n.dashboard-page .placeholders {\n    margin-bottom: 30px;\n    text-align: center; }\n.dashboard-page .placeholders h4 {\n    margin-bottom: 0; }\n.dashboard-page .placeholder {\n    margin-bottom: 20px; }\n.dashboard-page .placeholder img {\n    display: inline-block;\n    border-radius: 50%; }\n.dashboard-page .bg-fade {\n    font-size: 500px;\n    color: rgba(0, 0, 0, 0.1);\n    position: absolute;\n    right: -100px;\n    top: 180px;\n    overflow: hidden; }\n.dashboard-page .jumbotron {\n    background: #1abc9c; }\n.dashboard-page .fr {\n    padding-left: 60px; }\n.btn-white {\n  border-color: white;\n  border-radius: 0 !important;\n  border: 3px solid;\n  background: none; }\n.btn-white:hover, .btn-white:focus {\n    border-color: white;\n    color: #797979;\n    background: white; }\n.snap-content, snap-content {\n  overflow-x: hidden; }\nsnap-content {\n  background: #1abc9c; }\nsnap-content a {\n    color: white; }\nsnap-content a:hover, snap-content a:active, snap-content a:focus {\n      color: white; }\nsnap-content .menutoggle .fa {\n    position: absolute;\n    left: 15px;\n    top: 25px; }\nsnap-drawer {\n  background: #18aa8d; }\nsnap-drawer a {\n    color: white; }\nsnap-drawer a:hover, snap-drawer a:active, snap-drawer a:focus {\n      color: white; }\nsnap-drawer .sidebar-header {\n    margin-top: 40px; }\nsnap-drawer .sidebar-header .sidebar-img {\n      width: 140px;\n      border: 3px solid white; }\nsnap-drawer ul.snap-ul {\n    list-style-type: none;\n    padding-left: 0px;\n    margin-top: 20px; }\nsnap-drawer ul.snap-ul li.active {\n      background: #1abc9c; }\nsnap-drawer ul.snap-ul li {\n      height: 40px;\n      padding: 11px;\n      padding-left: 28px;\n      font-size: 13px;\n      font-weight: 600;\n      margin-bottom: 1px; }\nsnap-drawer ul.snap-ul li:hover {\n        background: #1abc9c; }\nsnap-drawer ul.snap-ul li a {\n        display: block;\n        height: 35px; }\nsnap-drawer ul.snap-ul li a:hover {\n          text-decoration: none; }\n.bg-dark {\n  background: #34495e; }\n* a:hover {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboardcomponent/dashboardcomponent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardcomponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__BaseComponent__ = __webpack_require__("../../../../../src/app/BaseComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_PersistInStorage__ = __webpack_require__("../../../../../src/app/services/PersistInStorage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardcomponentComponent = /** @class */ (function (_super) {
    __extends(DashboardcomponentComponent, _super);
    function DashboardcomponentComponent(authPsedu, activatedRoute, router) {
        var _this = _super.call(this, authPsedu) || this;
        _this.authPsedu = authPsedu;
        _this.activatedRoute = activatedRoute;
        _this.router = router;
        return _this;
    }
    DashboardcomponentComponent.prototype.ngOnInit = function () {
    };
    DashboardcomponentComponent.prototype.LogoutClick = function () {
        console.log('clicked');
        this.authPsedu.LogOutCurrentUser();
        this.router.navigate(['login']);
    };
    DashboardcomponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboardcomponent',
            template: __webpack_require__("../../../../../src/app/dashboardcomponent/dashboardcomponent.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboardcomponent/dashboardcomponent.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_PersistInStorage__["a" /* PersistStorageUtility */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], DashboardcomponentComponent);
    return DashboardcomponentComponent;
}(__WEBPACK_IMPORTED_MODULE_1__BaseComponent__["a" /* BaseComponent */]));



/***/ }),

/***/ "../../../../../src/app/field-error-display/field-error-display.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error-msg {\r\n  color: #a94442;\r\n}\r\n\r\n.fix-error-icon {\r\n  top: 27px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/field-error-display/field-error-display.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"displayError\">\r\n  <span class=\"glyphicon glyphicon-remove form-control-feedback fix-error-icon\"></span>\r\n  <span class=\"sr-only\">(error)</span>\r\n  <div class=\"error-msg\">\r\n    {{ errorMsg }}\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/field-error-display/field-error-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldErrorDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FieldErrorDisplayComponent = /** @class */ (function () {
    function FieldErrorDisplayComponent() {
    }
    FieldErrorDisplayComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], FieldErrorDisplayComponent.prototype, "errorMsg", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], FieldErrorDisplayComponent.prototype, "displayError", void 0);
    FieldErrorDisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-field-error-display',
            template: __webpack_require__("../../../../../src/app/field-error-display/field-error-display.component.html"),
            styles: [__webpack_require__("../../../../../src/app/field-error-display/field-error-display.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FieldErrorDisplayComponent);
    return FieldErrorDisplayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login-component/login-component.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\n\t<div class=\"img-container\">\n\t\t<div class=\"text-center pull-right photo\">\n\t\t\t<img src=\"assets/images/flat-avatar.png\" class=\"user-avatar img-circle img-responsive\" />\n\t\t\t\t<h1>Welcome<br> <span>Bienvenue</span><br /></h1>\n\t\t\t</div>\n\t\t</div>\n\n\n\t\t<div class=\"form-content\">\n\t\t\t<div class=\"pro-link\">\n\t\t\t\n\t\t\t</div>\n\t\t\t<form novalidate [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"table-form\">\r\n          <div class=\"form-groups\">\r\n            <div class=\"form-group\">\r\n              <input type=\"text\" class=\"form-control input-lg\" placeholder=\"EMAIL\" formControlName=\"UserName\">\r\n              <app-field-error-display [displayError]=\"isFieldValid('UserName')\" errorMsg=\"Please provide User Name\">\r\n              </app-field-error-display>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input type=\"password\" class=\"form-control input-lg\" formControlName=\"Password\" placeholder=\"PASSWORD\">\r\n              <app-field-error-display [displayError]=\"isFieldValid('Password')\" errorMsg=\"Please provide Password\">\r\n              </app-field-error-display>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <div class=\"form-group error-msg\">\r\n                {{error}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"button-container\">\r\n            <button type=\"submit\" class=\"btn btn-default login\"><img src=\"assets/images/arrow.png\" alt=\"\"></button>\r\n          </div>\r\n\r\n        </div>\n\t\t\t\n\t\t\t</form>\n\t\t</div>\t\n\t\t\n    \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login-component/login-component.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,400,300,600,700);\n.login-page {\n  overflow: auto;\n  display: table;\n  width: 100%;\n  height: 100%;\n  background: #1abc9c;\n  color: #fff;\n  padding: 3em;\n  position: relative; }\n.login-page:before {\n    content: '';\n    background-color: rgba(255, 255, 255, 0.15);\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    width: 40%;\n    border-right: solid 120px #1abc9c; }\n.login-page h1 {\n    font-weight: 700;\n    line-height: 32px;\n    font-size: 34px; }\n.login-page h1 span {\n      font-size: 27px; }\n.login-page h1 small {\n      color: #FFFFFF;\n      opacity: 0.7;\n      padding-right: 5px;\n      font-size: 16px;\n      display: block;\n      margin-top: 8px; }\n.login-page .form-group {\n    padding: 8px 0;\n    margin-bottom: 0; }\n.login-page .form-content {\n    padding: 40px 0; }\n.login-page .user-avatar {\n    max-width: 230px;\n    width: 100%;\n    border: 3px solid white; }\n.login-page .img-container, .login-page .form-content {\n    display: table-cell;\n    vertical-align: middle;\n    padding: 15px; }\n.login-page .img-container {\n    text-align: right;\n    width: 40%;\n    position: relative; }\n.login-page .form-content {\n    position: relative; }\n.login-page .form-content .pro-link a {\n      color: white;\n      position: absolute;\n      right: 0;\n      top: 0;\n      font-weight: 600; }\n.login-page .form-content .pro-link a:hover {\n        text-decoration: none; }\n.login-page .form-content .table-form {\n      display: table;\n      width: 100%; }\n.login-page .form-content .table-form .form-groups, .login-page .form-content .table-form .button-container {\n        display: table-cell;\n        vertical-align: middle; }\n.login-page .form-content .table-form .button-container {\n        width: 100px; }\n.login-page .form-content .bottom-75 {\n      margin-bottom: 75px;\n      max-width: 400px; }\n.login-page .form-content .input-lg {\n      border-radius: 0; }\n.login-page .form-content .form-control {\n      background: #18af91;\n      border-color: #18af91;\n      -webkit-box-shadow: none;\n              box-shadow: none;\n      color: white;\n      font-weight: 600; }\n.login-page .form-content ::-webkit-input-placeholder {\n      color: rgba(255, 255, 255, 0.7);\n      font-weight: 700;\n      font-size: 16px;\n      padding-top: 2px; }\n.login-page .form-content :-moz-placeholder {\n      /* Firefox 18- */\n      color: rgba(255, 255, 255, 0.7);\n      font-weight: 700;\n      font-size: 16px;\n      padding-top: 2px; }\n.login-page .form-content ::-moz-placeholder {\n      /* Firefox 19+ */\n      color: rgba(255, 255, 255, 0.7);\n      font-weight: 700;\n      font-size: 16px;\n      padding-top: 2px; }\n.login-page .form-content :-ms-input-placeholder {\n      color: rgba(255, 255, 255, 0.7);\n      font-weight: 700;\n      font-size: 16px;\n      padding-top: 2px; }\n.login-page .form-content .login {\n      height: 110px;\n      width: 100px;\n      border-radius: 0;\n      background: orange;\n      border-color: orange;\n      -webkit-box-shadow: none;\n              box-shadow: none;\n      margin-left: 15px;\n      color: white; }\n.login-page .form-content .login:focus {\n        outline: none;\n        outline-offset: none; }\n.login-page .remember {\n    margin-top: 8px; }\n.login-page .remember .checkbox1 {\n      padding-right: 5px; }\n.login-page .remember span.pass {\n      float: right;\n      padding-top: 2px; }\n.user-avatar2 {\n  width: 120px;\n  border: 2px solid white;\n  margin-bottom: 5px; }\n.login2 {\n  height: 38px;\n  border-radius: 0;\n  width: 46px;\n  margin-right: 12px;\n  background: orange;\n  border-color: orange;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: white; }\n.login2:focus {\n    outline: none;\n    outline-offset: none; }\n.login2:hover {\n    color: orange;\n    background: white;\n    border-color: white; }\n@media (max-width: 768px) {\n  .login-page:before {\n    content: '';\n    background-color: rgba(255, 255, 255, 0.15);\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    width: 100%;\n    border-right: none; }\n  .login-page, .img-content, .form-content {\n    display: block !important; }\n  .img-container .pull-right {\n    float: none !important; }\n  .img-container .img-responsive {\n    display: initial; }\n  .form-content .remember {\n    width: 100% !important; }\n  .pro-link {\n    display: none !important; }\n  .login-page .form-content .bottom-75 {\n    margin: 0 auto; }\n  .login-page {\n    padding: 15px; }\n  .login-page .img-container {\n    display: block;\n    width: 100%; } }\n@media (max-width: 400px) {\n  .login-page .form-content .table-form {\n    display: block; }\n    .login-page .form-content .table-form .form-groups, .login-page .form-content .table-form .button-container {\n      display: block;\n      width: 100%; }\n      .login-page .form-content .table-form .form-groups .login, .login-page .form-content .table-form .button-container .login {\n        width: 100%;\n        height: 46px;\n        margin: 8px 0 0 0; }\n        .login-page .form-content .table-form .form-groups .login img, .login-page .form-content .table-form .button-container .login img {\n          max-width: 26px; }\n  .login-page .user-avatar {\n    max-width: 200px; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-component/login-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_AuthenticationService__ = __webpack_require__("../../../../../src/app/services/AuthenticationService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponentComponent = /** @class */ (function () {
    function LoginComponentComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.loading = false;
    }
    LoginComponentComponent.prototype.ngOnInit = function () {
        this.createFormControls();
        this.constructForm();
    };
    LoginComponentComponent.prototype.constructForm = function () {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            UserName: this.UserName,
            Password: this.Password
        });
    };
    LoginComponentComponent.prototype.createFormControls = function () {
        this.UserName = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required);
        this.Password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required);
    };
    LoginComponentComponent.prototype.displayFieldCss = function (field) {
        return {
            'has-error': this.isFieldValid(field),
            'has-feedback': this.isFieldValid(field)
        };
    };
    LoginComponentComponent.prototype.isFieldValid = function (field) {
        return !this.loginForm.get(field).valid && this.loginForm.get(field).touched;
    };
    LoginComponentComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.loginForm.valid) {
            this.loading = true;
            this.authenticationService.login(this.UserName.value, this.Password.value)
                .subscribe(function (result) {
                if (result === true) {
                    _this.router.navigate(['Home']);
                }
                else {
                    // login failed
                    _this.error = 'Username or password is incorrect';
                    _this.loading = false;
                }
            });
        }
        else {
            Object.keys(this.loginForm.controls).forEach(function (field) {
                var control = _this.loginForm.get(field);
                control.markAsTouched({ onlySelf: true });
            });
        }
    };
    LoginComponentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login-component',
            template: __webpack_require__("../../../../../src/app/login-component/login-component.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login-component/login-component.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_AuthenticationService__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], LoginComponentComponent);
    return LoginComponentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/AuthenticationService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PersistInStorage__ = __webpack_require__("../../../../../src/app/services/PersistInStorage.ts");
/* tslint:disable:prefer-const */
/* tslint:disable:no-inferrable-types */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, _persistantStorage) {
        // set token if saved in local storage
        this.http = http;
        this._persistantStorage = _persistantStorage;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var successFulLogin = false;
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        };
        return this.http.post('api/Token/CreateToken', JSON.stringify({ username: username, password: password }), httpOptions)
            .map(function (response) {
            var currentUserString = JSON.stringify(response);
            if (response && response['token'] && response['token'].length > 1) {
                _this.token = response['token'];
                _this._persistantStorage.SaveInLocalStorage(username, response['token']);
                return true;
            }
            else {
                return false;
            }
        });
    };
    AuthenticationService.prototype.getLoginSession = function (username, password) {
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('api/Token/CreateToken', JSON.stringify({ username: username, password: password }), httpOptions)
            .map(function (response) { return response; });
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__PersistInStorage__["a" /* PersistStorageUtility */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/services/LoginActivate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginActivate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__BaseComponent__ = __webpack_require__("../../../../../src/app/BaseComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PersistInStorage__ = __webpack_require__("../../../../../src/app/services/PersistInStorage.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginActivate = /** @class */ (function (_super) {
    __extends(LoginActivate, _super);
    function LoginActivate(authPsedu, router) {
        var _this = _super.call(this, authPsedu) || this;
        _this.authPsedu = authPsedu;
        _this.router = router;
        return _this;
    }
    LoginActivate.prototype.canActivate = function () {
        console.log('called');
        if (!this.CheckUserLoggedIn()) {
            this.router.navigate(['login']);
        }
        return true;
    };
    LoginActivate = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__PersistInStorage__["a" /* PersistStorageUtility */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], LoginActivate);
    return LoginActivate;
}(__WEBPACK_IMPORTED_MODULE_2__BaseComponent__["a" /* BaseComponent */]));



/***/ }),

/***/ "../../../../../src/app/services/PersistInStorage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersistStorageUtility; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var PersistStorageUtility = /** @class */ (function () {
    function PersistStorageUtility(localstorageName) {
        this._localStorage = localstorageName;
    }
    PersistStorageUtility.prototype.SaveInLocalStorage = function (userName, token) {
        localStorage.setItem('currentUser', JSON.stringify({ username: userName, token: token }));
    };
    PersistStorageUtility.prototype.GetTokenFromLocalStorage = function () {
        var currentUser = JSON.parse(localStorage.getItem(this._localStorage));
        if (currentUser != null) {
            var token = currentUser && currentUser.token;
            return currentUser.token;
        }
        return '';
    };
    PersistStorageUtility.prototype.IsUserLoggedIn = function () {
        var currentUser = JSON.parse(localStorage.getItem(this._localStorage));
        var token = currentUser && currentUser.token;
        if (currentUser && currentUser.token) {
            return currentUser.token.length > 1;
        }
        return false;
    };
    PersistStorageUtility.prototype.LogOutCurrentUser = function () {
        localStorage.removeItem(this._localStorage);
    };
    PersistStorageUtility = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])('LocalStorage_Name')),
        __metadata("design:paramtypes", [String])
    ], PersistStorageUtility);
    return PersistStorageUtility;
}());



/***/ }),

/***/ "../../../../../src/app/services/token.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PersistInStorage__ = __webpack_require__("../../../../../src/app/services/PersistInStorage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(auth) {
        this.auth = auth;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + this.auth.GetTokenFromLocalStorage()
            }
        });
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__PersistInStorage__["a" /* PersistStorageUtility */]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["getBaseUrl"] = getBaseUrl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




function getBaseUrl() {
    console.log('called');
    return document.getElementsByTagName('base')[0].href;
}
var providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map