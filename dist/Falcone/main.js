(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/raefkandil/Documents/Shippit Software Challenge/angular/Falcone/src/main.ts */"zUnb");


/***/ }),

/***/ "79js":
/*!*************************************************************!*\
  !*** ./src/app/services/caching-service/caching.service.ts ***!
  \*************************************************************/
/*! exports provided: CachingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CachingService", function() { return CachingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CachingService {
    constructor() {
        this.cacheMap = [];
    }
    matchCache(id) {
        if (this.cacheMap) {
            return this.cacheMap.filter(cacheObj => {
                return cacheObj.cachingId === id;
            });
        }
        return [];
    }
    setCache(id, cachedObject) {
        let cacheTmp = this.matchCache(id);
        if (!cacheTmp.length) {
            this.cacheMap.push({ cachingId: id, cachedObject: cachedObject });
        }
        else {
            this.cacheMap.forEach(cacheMap => {
                cacheMap.cachedObject = cachedObject;
            });
        }
    }
    getCache(id) {
        console.log('getCache 1');
        let cacheTmp = this.matchCache(id);
        if (cacheTmp.length) {
            console.log('getCache 2');
            return cacheTmp[0].cachedObject;
        }
        else {
            console.log('getCache 3');
            return null;
        }
    }
}
CachingService.ɵfac = function CachingService_Factory(t) { return new (t || CachingService)(); };
CachingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CachingService, factory: CachingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CachingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    planets_url: "https://findfalcone.herokuapp.com/planets",
    vehicle_url: "https://findfalcone.herokuapp.com/vehicles",
    end_result_url: "https://findfalcone.herokuapp.com/find",
    get_token: "https://findfalcone.herokuapp.com/token",
    default_error_message: "An unexpected error message occured",
    token_default_value: "PlmVXHewGEQxKJIpWnKCBtNMepseniTM",
    maximum_number_steps: 8
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

/***/ "CG0s":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");




class ErrorComponent {
    constructor(errorMessage) {
        this.errorMessage = errorMessage;
    }
    ngOnInit() {
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["fc-error"]], decls: 3, vars: 1, consts: [["mat-button", "", "mat-dialog-close", ""]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.errorMessage, " ");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fc-error',
                templateUrl: './error.component.html',
                styleUrls: ['./error.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "M7hA":
/*!***************************************************!*\
  !*** ./src/app/services/wizard/wizard.service.ts ***!
  \***************************************************/
/*! exports provided: WizardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardService", function() { return WizardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_common_unique_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/unique-id */ "yCkt");




class WizardService {
    constructor() {
        this.currentStage = 1;
        this.wiardSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.currentStage);
    }
    nextStep(uniqueId) {
        const prefix = 'wizard';
        if (!Object(src_app_common_unique_id__WEBPACK_IMPORTED_MODULE_2__["hasUniquId"])(prefix, uniqueId)) {
            this.wiardSubject$.next(++this.currentStage);
            //this.componentIds.add(uniqueId);
            Object(src_app_common_unique_id__WEBPACK_IMPORTED_MODULE_2__["setUniquId"])(prefix, uniqueId);
        }
        return this.currentStage;
    }
    resetWizard() {
        this.wiardSubject$.next(1);
    }
    getWizard() {
        return this.wiardSubject$;
    }
}
WizardService.ɵfac = function WizardService_Factory(t) { return new (t || WizardService)(); };
WizardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WizardService, factory: WizardService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WizardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MaL4":
/*!**********************************************************!*\
  !*** ./src/app/services/errors/error-service.service.ts ***!
  \**********************************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class ErrorService {
    constructor(http) {
        this.http = http;
        this.errorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.errorSubscriber$ = this.errorSubject.asObservable();
        this.numberOfErrors = 0;
        this.interternetConnectivity = true;
        this.errors = [{
                errorCode: 408,
                errorMessage: 'Please check your internet connectivity and try again'
            }, {
                errorCode: 555,
                errorMessage: 'Size of array exceeded the maximum size'
            }
        ];
    }
    getErrorMessage(errorCode) {
        let filteredErrorArray = (this.errors.filter(errors => errors.errorCode === errorCode));
        return filteredErrorArray
            .length > 0 ? filteredErrorArray[0].errorMessage : null;
    }
    handleError(error) {
        this.numberOfErrors++;
        if (this.numberOfErrors > 2 && this.interternetConnectivity) {
            //check internet connectivity by pinging Google
            this.http.get('https://www.google.com/').toPromise().catch(err => {
                this.interternetConnectivity = false;
                this.handleError(408);
            });
        }
        const errorMessage = this.getErrorMessage(error) || src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].default_error_message;
        this.errorSubject.next(errorMessage);
    }
    getErrorObservable() {
        return this.errorSubscriber$;
    }
}
ErrorService.ɵfac = function ErrorService_Factory(t) { return new (t || ErrorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ErrorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorService, factory: ErrorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main.component */ "wlho");



class AppComponent {
    constructor() {
        this.title = 'Falcone';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fal-main");
    } }, directives: [_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "Z85B":
/*!******************************************!*\
  !*** ./src/app/pipes/id-creator.pipe.ts ***!
  \******************************************/
/*! exports provided: IdCreatorPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdCreatorPipe", function() { return IdCreatorPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class IdCreatorPipe {
    transform(id) {
        if (!id)
            return id;
        return id.toLowerCase().trim().split(' ').join('-');
    }
}
IdCreatorPipe.ɵfac = function IdCreatorPipe_Factory(t) { return new (t || IdCreatorPipe)(); };
IdCreatorPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "idCreator", type: IdCreatorPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IdCreatorPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'idCreator'
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _planet_planet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./planet/planet.component */ "zXe7");
/* harmony import */ var _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vehicle/vehicle.component */ "fa1O");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pipes_id_creator_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/id-creator.pipe */ "Z85B");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./error/error.component */ "CG0s");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./icon/icon.component */ "aSRA");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DEFAULT_OPTIONS"], useValue: { hasBackdrop: false } }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _planet_planet_component__WEBPACK_IMPORTED_MODULE_5__["PlanetComponent"],
        _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_6__["VehicleComponent"],
        _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"],
        _pipes_id_creator_pipe__WEBPACK_IMPORTED_MODULE_9__["IdCreatorPipe"],
        _error_error_component__WEBPACK_IMPORTED_MODULE_11__["ErrorComponent"],
        _icon_icon_component__WEBPACK_IMPORTED_MODULE_12__["IconComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _planet_planet_component__WEBPACK_IMPORTED_MODULE_5__["PlanetComponent"],
                    _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_6__["VehicleComponent"],
                    _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"],
                    _pipes_id_creator_pipe__WEBPACK_IMPORTED_MODULE_9__["IdCreatorPipe"],
                    _error_error_component__WEBPACK_IMPORTED_MODULE_11__["ErrorComponent"],
                    _icon_icon_component__WEBPACK_IMPORTED_MODULE_12__["IconComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"]
                ],
                providers: [{ provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DEFAULT_OPTIONS"], useValue: { hasBackdrop: false } }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aSRA":
/*!****************************************!*\
  !*** ./src/app/icon/icon.component.ts ***!
  \****************************************/
/*! exports provided: IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class IconComponent {
    constructor(sanitized) {
        this.sanitized = sanitized;
        //unicodes for the icons
        this.iconMap = {
            'Donlon': 9729,
            'Enchai': 9730,
            'Jebing': 9728,
            'Sapir': 9732,
            'Lerbin': 9733,
            'Pingasor': 9731,
            'Space pod': 9737,
            'Space rocket': 9736,
            'Space shuttle': 9735,
            'Space ship': 9734
        };
    }
    ngOnInit() {
        this.iconUnicode = '&#' + this.iconMap[this.iconName] + ';';
    }
}
IconComponent.ɵfac = function IconComponent_Factory(t) { return new (t || IconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
IconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconComponent, selectors: [["fc-icon"]], inputs: { iconName: "iconName" }, decls: 1, vars: 1, consts: [[1, "icon", 3, "innerHTML"]], template: function IconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.iconUnicode, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, styles: [".icon[_ngcontent-%COMP%] {\n  font-family: FalconeFont !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaWNvbi9pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUNBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2ljb24vaWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uIHtcbiAgICBmb250LWZhbWlseTogRmFsY29uZUZvbnQgIWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fc-icon',
                templateUrl: './icon.component.html',
                styleUrls: ['./icon.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, { iconName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "cSuo":
/*!****************************************************************!*\
  !*** ./src/app/services/falcon-http/falcone-getter.service.ts ***!
  \****************************************************************/
/*! exports provided: FalconeGetterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FalconeGetterService", function() { return FalconeGetterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _falcon_store_falcon_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../falcon-store/falcon-store.service */ "uBtM");
/* harmony import */ var _errors_error_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../errors/error-service.service */ "MaL4");







class FalconeGetterService {
    constructor(http, falconStoreService, errorService) {
        this.http = http;
        this.falconStoreService = falconStoreService;
        this.errorService = errorService;
    }
    getPlanets() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].planets_url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => { return data; }))
            .toPromise().catch(err => {
            let error;
            if (err.response && err.response.status === 408) {
                error = err.response.status;
            }
            this.errorService.handleError(error || 0);
            return null;
        });
    }
    getVehicles() {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].vehicle_url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => { return data; }))
            .toPromise().catch(err => {
            let error;
            if (err.response && err.response.status === 408) {
                error = err.response.status;
            }
            this.errorService.handleError(error || 0);
            return null;
        });
    }
    getResult() {
        console.log('entered getResult (): Promise<any> ');
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].end_result_url, this.falconStoreService.getPayLoad()) //.pipe(map(data=> {return data as Vehicle[]}))
            .toPromise()
            .catch(err => {
            let error;
            if (err.response && err.response.status === 408) {
                error = err.response.status;
            }
            this.errorService.handleError(error || 0);
            return null;
        });
    }
    getToken() {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].get_token, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => { return data.token; }))
            .toPromise().catch(err => {
            let error;
            console.log('error------', err);
            if (err.response && err.response.status === 408) {
                error = err.response.status;
            }
            this.errorService.handleError(error || 0);
            return null;
        });
    }
}
FalconeGetterService.ɵfac = function FalconeGetterService_Factory(t) { return new (t || FalconeGetterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_falcon_store_falcon_store_service__WEBPACK_IMPORTED_MODULE_4__["FalconStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_errors_error_service_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"])); };
FalconeGetterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FalconeGetterService, factory: FalconeGetterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FalconeGetterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _falcon_store_falcon_store_service__WEBPACK_IMPORTED_MODULE_4__["FalconStoreService"] }, { type: _errors_error_service_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"] }]; }, null); })();


/***/ }),

/***/ "fa1O":
/*!**********************************************!*\
  !*** ./src/app/vehicle/vehicle.component.ts ***!
  \**********************************************/
/*! exports provided: VehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleComponent", function() { return VehicleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_unique_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/unique-id */ "yCkt");
/* harmony import */ var _services_falcon_http_falcone_getter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/falcon-http/falcone-getter.service */ "cSuo");
/* harmony import */ var _services_falcon_store_falcon_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/falcon-store/falcon-store.service */ "uBtM");
/* harmony import */ var _services_wizard_wizard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/wizard/wizard.service */ "M7hA");
/* harmony import */ var _services_caching_service_caching_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/caching-service/caching.service */ "79js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icon/icon.component */ "aSRA");
/* harmony import */ var _pipes_id_creator_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pipes/id-creator.pipe */ "Z85B");










function VehicleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VehicleComponent_div_1_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const vehicle_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.setVehicle($event, vehicle_r1.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "idCreator");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "idCreator");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "fc-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vehicle_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, vehicle_r1.name))("name", ctx_r0.key)("disabled", vehicle_r1.max_distance < ctx_r0.distance);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, vehicle_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", vehicle_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iconName", vehicle_r1.name);
} }
class VehicleComponent {
    constructor(falconeGetterService, falconStoreService, wizardService, cachingService) {
        this.falconeGetterService = falconeGetterService;
        this.falconStoreService = falconStoreService;
        this.wizardService = wizardService;
        this.cachingService = cachingService;
        this.nextStep = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.uniqueId = Object(_common_unique_id__WEBPACK_IMPORTED_MODULE_1__["generateUniqueId"])();
    }
    ngOnInit() {
        let tempCached = this.cachingService.getCache("vehicles");
        if (tempCached) {
            this.vehicle = tempCached;
        }
        else {
            this.falconeGetterService.getVehicles().then(vehicles => {
                this.vehicle = vehicles;
                this.cachingService.setCache("vehicles", vehicles);
            });
        }
    }
    ngOnChanges(changes) {
        console.log('this.distance before: ', this.distance);
        this.distance = changes.distance.currentValue;
        console.log('this.distance after: ', this.distance);
    }
    setVehicle(event, vehicleName) {
        console.log('entered SetVehicle', event.target.value);
        if (event.target.value === 'on') {
            this.falconStoreService.setVehicle(vehicleName, this.uniqueId);
            let currentStep = this.wizardService.nextStep(this.uniqueId);
            this.nextStep.emit({ uniqueId: this.uniqueId, currentStep: currentStep });
        }
    }
}
VehicleComponent.ɵfac = function VehicleComponent_Factory(t) { return new (t || VehicleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_falcon_http_falcone_getter_service__WEBPACK_IMPORTED_MODULE_2__["FalconeGetterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_falcon_store_falcon_store_service__WEBPACK_IMPORTED_MODULE_3__["FalconStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_wizard_wizard_service__WEBPACK_IMPORTED_MODULE_4__["WizardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_caching_service_caching_service__WEBPACK_IMPORTED_MODULE_5__["CachingService"])); };
VehicleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VehicleComponent, selectors: [["fc-vehicle"]], inputs: { distance: "distance", key: "key" }, outputs: { nextStep: "nextStep" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [[4, "ngFor", "ngForOf"], ["type", "radio", 3, "id", "name", "disabled", "change"], [3, "for"], [3, "iconName"]], template: function VehicleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VehicleComponent_div_1_Template, 7, 10, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.distance, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.vehicle);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_7__["IconComponent"]], pipes: [_pipes_id_creator_pipe__WEBPACK_IMPORTED_MODULE_8__["IdCreatorPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlaGljbGUvdmVoaWNsZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fc-vehicle',
                templateUrl: './vehicle.component.html',
                styleUrls: ['./vehicle.component.scss']
            }]
    }], function () { return [{ type: _services_falcon_http_falcone_getter_service__WEBPACK_IMPORTED_MODULE_2__["FalconeGetterService"] }, { type: _services_falcon_store_falcon_store_service__WEBPACK_IMPORTED_MODULE_3__["FalconStoreService"] }, { type: _services_wizard_wizard_service__WEBPACK_IMPORTED_MODULE_4__["WizardService"] }, { type: _services_caching_service_caching_service__WEBPACK_IMPORTED_MODULE_5__["CachingService"] }]; }, { distance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], key: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nextStep: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "uBtM":
/*!***************************************************************!*\
  !*** ./src/app/services/falcon-store/falcon-store.service.ts ***!
  \***************************************************************/
/*! exports provided: FalconStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FalconStoreService", function() { return FalconStoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_common_unique_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/unique-id */ "yCkt");
/* harmony import */ var _errors_error_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../errors/error-service.service */ "MaL4");





class FalconStoreService {
    constructor(errorService) {
        this.errorService = errorService;
        this.returnFalcon = { token: "", planet_names: [], vehicle_names: [] };
        this.maximum_array_size = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].maximum_number_steps / 2;
    }
    setToken(token) {
        this.returnFalcon.token = token;
    }
    setPlanet(planetName, uniqueId) {
        console.log('enteredhere');
        const prefix = 'store-planet';
        if (!Object(src_app_common_unique_id__WEBPACK_IMPORTED_MODULE_2__["hasUniquId"])(prefix, uniqueId)) {
            if (this.returnFalcon.planet_names.length < this.maximum_array_size) {
                this.returnFalcon.planet_names.push(planetName);
            }
            else {
                this.errorService.handleError(555);
            }
            Object(src_app_common_unique_id__WEBPACK_IMPORTED_MODULE_2__["setUniquId"])(prefix, uniqueId);
        }
        else {
            this.returnFalcon.planet_names.pop();
            this.returnFalcon.planet_names.push(planetName);
        }
        console.log('this.returnFalcon = ', this.returnFalcon);
    }
    setVehicle(vehicleName, uniqueId) {
        const prefix = 'store-vehicle';
        if (!Object(src_app_common_unique_id__WEBPACK_IMPORTED_MODULE_2__["hasUniquId"])(prefix, uniqueId)) {
            if (this.returnFalcon.vehicle_names.length < this.maximum_array_size) {
                this.returnFalcon.vehicle_names.push(vehicleName);
            }
            else {
                this.errorService.handleError(555);
            }
            Object(src_app_common_unique_id__WEBPACK_IMPORTED_MODULE_2__["setUniquId"])(prefix, uniqueId);
        }
        else {
            //perform update
            this.returnFalcon.vehicle_names.pop();
            this.returnFalcon.vehicle_names.push(vehicleName);
        }
    }
    getPayLoad() {
        return this.returnFalcon;
    }
    getToken() {
        return this.returnFalcon.token;
    }
}
FalconStoreService.ɵfac = function FalconStoreService_Factory(t) { return new (t || FalconStoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_errors_error_service_service__WEBPACK_IMPORTED_MODULE_3__["ErrorService"])); };
FalconStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FalconStoreService, factory: FalconStoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FalconStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _errors_error_service_service__WEBPACK_IMPORTED_MODULE_3__["ErrorService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wlho":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error/error.component */ "CG0s");
/* harmony import */ var _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vehicle/vehicle.component */ "fa1O");
/* harmony import */ var _planet_planet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../planet/planet.component */ "zXe7");
/* harmony import */ var _common_unique_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/unique-id */ "yCkt");
/* harmony import */ var _services_wizard_wizard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/wizard/wizard.service */ "M7hA");
/* harmony import */ var _services_falcon_http_falcone_getter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/falcon-http/falcone-getter.service */ "cSuo");
/* harmony import */ var _services_falcon_store_falcon_store_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/falcon-store/falcon-store.service */ "uBtM");
/* harmony import */ var _services_errors_error_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/errors/error-service.service */ "MaL4");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");














const _c0 = ["falcons"];
function MainComponent_input_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_input_5_Template_input_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.findResult(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class MainComponent {
    constructor(wizardService, falconeGetterService, falconStoreService, errorService, dialog, resolver) {
        this.wizardService = wizardService;
        this.falconeGetterService = falconeGetterService;
        this.falconStoreService = falconStoreService;
        this.errorService = errorService;
        this.dialog = dialog;
        this.resolver = resolver;
        this.finalStep = false;
    }
    ngOnInit() {
        this.wizardService.getWizard().subscribe(val => {
            this.currentStep = val;
            if (this.currentStep === 1) {
                this.falconeGetterService.getToken().then(token => {
                    this.falconStoreService.setToken(token);
                }).then(() => {
                    console.log('entered here in then');
                    //default token
                    if (!this.falconStoreService.getToken()) {
                        this.falconStoreService.setToken(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].token_default_value);
                    }
                });
            }
        });
        this.errorService.getErrorObservable().subscribe((data) => {
            if (data) {
                this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"], { data: data });
                this.errorMessage = data;
            }
        });
    }
    findResult() {
        console.log('entered findResult()');
        this.returnedResult = this.falconeGetterService.getResult();
    }
    changeOutputVehicle(data) {
        if (data.currentStep <= src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].maximum_number_steps) {
            if (Object(_common_unique_id__WEBPACK_IMPORTED_MODULE_5__["isOldComponent"])(data.uniqueId)) {
                const factory = this.resolver.resolveComponentFactory(_planet_planet_component__WEBPACK_IMPORTED_MODULE_4__["PlanetComponent"]);
                this.componentRef = this.container.createComponent(factory);
                this.componentRef.instance.returnPlanetEmit.subscribe(event => {
                    this.changeOutputPlanet(event);
                });
                Object(_common_unique_id__WEBPACK_IMPORTED_MODULE_5__["pushComponentReference"])(data.uniqueId, this.componentRef);
            }
        }
        else {
            this.finalStep = true;
        }
    }
    changeOutputPlanet(data) {
        console.log('changeOutputPlanet');
        if (Object(_common_unique_id__WEBPACK_IMPORTED_MODULE_5__["isOldComponent"])(data.uniqueId)) {
            const factory = this.resolver.resolveComponentFactory(_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_3__["VehicleComponent"]);
            this.componentRef = this.container.createComponent(factory);
            this.componentRef.instance.key = "vehicle" + data.uniqueId;
            this.componentRef.instance.distance = data.distance;
            this.componentRef.instance.nextStep.subscribe(val => {
                this.changeOutputVehicle(val);
            });
            Object(_common_unique_id__WEBPACK_IMPORTED_MODULE_5__["pushComponentReference"])(data.uniqueId, this.componentRef);
        }
        else {
            Object(_common_unique_id__WEBPACK_IMPORTED_MODULE_5__["returnLatestComponentMatch"])().instance.distance = data.distance;
        }
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_wizard_wizard_service__WEBPACK_IMPORTED_MODULE_6__["WizardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_falcon_http_falcone_getter_service__WEBPACK_IMPORTED_MODULE_7__["FalconeGetterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_falcon_store_falcon_store_service__WEBPACK_IMPORTED_MODULE_8__["FalconStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_errors_error_service_service__WEBPACK_IMPORTED_MODULE_9__["ErrorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["fal-main"]], viewQuery: function MainComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, decls: 9, vars: 6, consts: [["falcons", ""], [3, "returnPlanetEmit"], ["type", "button", "value", "Find Results", 3, "click", 4, "ngIf"], ["type", "button", "value", "Find Results", 3, "click"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "fc-planet", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("returnPlanetEmit", function MainComponent_Template_fc_planet_returnPlanetEmit_3_listener($event) { return ctx.changeOutputPlanet($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MainComponent_input_5_Template, 1, 0, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentStep, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.finalStep, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.finalStep);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, ctx.returnedResult));
    } }, directives: [_planet_planet_component__WEBPACK_IMPORTED_MODULE_4__["PlanetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fal-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return [{ type: _services_wizard_wizard_service__WEBPACK_IMPORTED_MODULE_6__["WizardService"] }, { type: _services_falcon_http_falcone_getter_service__WEBPACK_IMPORTED_MODULE_7__["FalconeGetterService"] }, { type: _services_falcon_store_falcon_store_service__WEBPACK_IMPORTED_MODULE_8__["FalconStoreService"] }, { type: _services_errors_error_service_service__WEBPACK_IMPORTED_MODULE_9__["ErrorService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }]; }, { container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["falcons", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]
        }] }); })();


/***/ }),

/***/ "yCkt":
/*!*************************************!*\
  !*** ./src/app/common/unique-id.ts ***!
  \*************************************/
/*! exports provided: isOldComponent, returnLatestComponentMatch, pushComponentReference, generateUniqueId, setUniquId, hasUniquId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOldComponent", function() { return isOldComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "returnLatestComponentMatch", function() { return returnLatestComponentMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushComponentReference", function() { return pushComponentReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateUniqueId", function() { return generateUniqueId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUniquId", function() { return setUniquId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasUniquId", function() { return hasUniquId; });
let count = 0;
let componentIds = new Set();
let componentMatch = [];
let createdComponentsIds = [];
function isOldComponent(uniqueId) {
    componentMatch = createdComponentsIds.filter(componentRef => {
        return componentRef.uniqueId === uniqueId;
    });
    return componentMatch.length === 0;
}
function returnLatestComponentMatch() {
    if (componentMatch[0] && componentMatch[0].vehiclePlanetCompnent) {
        return componentMatch[0].vehiclePlanetCompnent;
    }
    return null;
}
function pushComponentReference(uniqueId, vehiclePlanetComponent) {
    createdComponentsIds.push({ uniqueId: uniqueId, vehiclePlanetCompnent: vehiclePlanetComponent });
}
function generateUniqueId() {
    return 'component' + count++;
}
function setUniquId(prefix, uniqueId) {
    componentIds.add(prefix + '-' + uniqueId);
}
function hasUniquId(prefix, uniqueId) {
    return componentIds.has(prefix + '-' + uniqueId);
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zXe7":
/*!********************************************!*\
  !*** ./src/app/planet/planet.component.ts ***!
  \********************************************/
/*! exports provided: PlanetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetComponent", function() { return PlanetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_unique_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/unique-id */ "yCkt");
/* harmony import */ var _services_falcon_http_falcone_getter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/falcon-http/falcone-getter.service */ "cSuo");
/* harmony import */ var _services_falcon_store_falcon_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/falcon-store/falcon-store.service */ "uBtM");
/* harmony import */ var _services_wizard_wizard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/wizard/wizard.service */ "M7hA");
/* harmony import */ var _services_caching_service_caching_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/caching-service/caching.service */ "79js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icon/icon.component */ "aSRA");









function PlanetComponent_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fc-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const planet_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", planet_r1.name + ":::$$$:::" + planet_r1.distance);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", planet_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iconName", planet_r1.name);
} }
class PlanetComponent {
    constructor(falconeGetterService, falconStoreService, wizardService, cachingService) {
        this.falconeGetterService = falconeGetterService;
        this.falconStoreService = falconStoreService;
        this.wizardService = wizardService;
        this.cachingService = cachingService;
        this.returnPlanetEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.uniqueId = Object(_common_unique_id__WEBPACK_IMPORTED_MODULE_1__["generateUniqueId"])();
    }
    ngOnInit() {
        let tempCached = this.cachingService.getCache("planets");
        console.log("tempCached", tempCached);
        if (tempCached) {
            this.planets = tempCached;
        }
        else {
            this.falconeGetterService.getPlanets().then((planets) => {
                this.planets = planets;
                this.cachingService.setCache("planets", planets);
            });
        }
    }
    changeValue(planet) {
        console.log('entered here, I hope, ', planet.target.value);
        if (planet) {
            let planetName = planet.target.value.split(':::$$$:::')[0];
            let planetDistance = parseInt(planet.target.value.split(':::$$$:::')[1]);
            this.falconStoreService.setPlanet(planetName, this.uniqueId);
            let currentStep = this.wizardService.nextStep(this.uniqueId);
            console.log('returnFalcon = ', { distance: planetDistance, currentStep: currentStep, uniqueId: this.uniqueId });
            this.returnPlanetEmit.emit({ distance: planetDistance, currentStep: currentStep, uniqueId: this.uniqueId });
        }
    }
}
PlanetComponent.ɵfac = function PlanetComponent_Factory(t) { return new (t || PlanetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_falcon_http_falcone_getter_service__WEBPACK_IMPORTED_MODULE_2__["FalconeGetterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_falcon_store_falcon_store_service__WEBPACK_IMPORTED_MODULE_3__["FalconStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_wizard_wizard_service__WEBPACK_IMPORTED_MODULE_4__["WizardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_caching_service_caching_service__WEBPACK_IMPORTED_MODULE_5__["CachingService"])); };
PlanetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlanetComponent, selectors: [["fc-planet"]], outputs: { returnPlanetEmit: "returnPlanetEmit" }, decls: 3, vars: 1, consts: [[3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "iconName"]], template: function PlanetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PlanetComponent_Template_select_change_0_listener($event) { return ctx.changeValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlanetComponent_option_2_Template, 3, 3, "option", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.planets);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_7__["IconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYW5ldC9wbGFuZXQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlanetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fc-planet',
                templateUrl: './planet.component.html',
                styleUrls: ['./planet.component.scss']
            }]
    }], function () { return [{ type: _services_falcon_http_falcone_getter_service__WEBPACK_IMPORTED_MODULE_2__["FalconeGetterService"] }, { type: _services_falcon_store_falcon_store_service__WEBPACK_IMPORTED_MODULE_3__["FalconStoreService"] }, { type: _services_wizard_wizard_service__WEBPACK_IMPORTED_MODULE_4__["WizardService"] }, { type: _services_caching_service_caching_service__WEBPACK_IMPORTED_MODULE_5__["CachingService"] }]; }, { returnPlanetEmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map