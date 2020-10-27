(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/raefkandil/Documents/Shippit Software Challenge/angular/Falcone/src/main.ts */"zUnb");


/***/ }),

/***/ "5ZoK":
/*!*******************************************************!*\
  !*** ./src/app/components/result/result.component.ts ***!
  \*******************************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_falcon_http_falcone_getter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/falcon-http/falcone-getter.service */ "cSuo");
/* harmony import */ var src_app_services_falcon_store_falcon_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/falcon-store/falcon-store.service */ "uBtM");
/* harmony import */ var src_app_services_wizard_wizard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/wizard/wizard.service */ "M7hA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ResultComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Congratulations!!! Your lucky planet is: ", ctx_r0.returnResult, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Time taken: ", ctx_r0.timeTaken, "s");
} }
function ResultComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Ohhhhh! We hate to see you lose! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ResultComponent {
    constructor(falconeGetterService, falconStoreService, wizardService, router) {
        this.falconeGetterService = falconeGetterService;
        this.falconStoreService = falconStoreService;
        this.wizardService = wizardService;
        this.router = router;
        this.success = true;
    }
    ngOnInit() {
        this.falconeGetterService.getResult().then(data => {
            this.returnResult = data.planet;
            let returnArray = this.falconStoreService.getPayLoad().planet_names.filter(data => {
                return data === this.returnResult;
            });
            if (returnArray.length === 0) {
                this.success = false;
            }
            else {
                this.timeTaken = this.falconStoreService.getTime();
            }
            this.wizardService.resetWizard();
            this.falconStoreService.resetStore();
        });
    }
}
ResultComponent.ɵfac = function ResultComponent_Factory(t) { return new (t || ResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_falcon_http_falcone_getter_service__WEBPACK_IMPORTED_MODULE_1__["FalconeGetterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_falcon_store_falcon_store_service__WEBPACK_IMPORTED_MODULE_2__["FalconStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_wizard_wizard_service__WEBPACK_IMPORTED_MODULE_3__["WizardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultComponent, selectors: [["fc-result"]], decls: 7, vars: 2, consts: [[1, "container"], [1, "u-pd-6"], ["class", "success", 4, "ngIf"], ["class", "failure", 4, "ngIf"], ["routerLink", "/falcone-game"], [1, "success"], [1, "time-taken"], [1, "failure"]], template: function ResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResultComponent_div_2_Template, 4, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ResultComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Try Again");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.success);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fc-result',
                templateUrl: './result.component.html',
                styleUrls: ['./result.component.scss']
            }]
    }], function () { return [{ type: src_app_services_falcon_http_falcone_getter_service__WEBPACK_IMPORTED_MODULE_1__["FalconeGetterService"] }, { type: src_app_services_falcon_store_falcon_store_service__WEBPACK_IMPORTED_MODULE_2__["FalconStoreService"] }, { type: src_app_services_wizard_wizard_service__WEBPACK_IMPORTED_MODULE_3__["WizardService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "5c+Q":
/*!*******************************************************!*\
  !*** ./src/app/components/planet/planet.component.ts ***!
  \*******************************************************/
/*! exports provided: PlanetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanetComponent", function() { return PlanetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/functions */ "CPI9");
/* harmony import */ var _common_unique_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/unique-id */ "yCkt");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _services_falcon_http_falcone_getter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/falcon-http/falcone-getter.service */ "cSuo");
/* harmony import */ var _services_falcon_store_falcon_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/falcon-store/falcon-store.service */ "uBtM");
/* harmony import */ var _services_wizard_wizard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/wizard/wizard.service */ "M7hA");
/* harmony import */ var _services_caching_service_caching_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/caching-service/caching.service */ "79js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../icon/icon.component */ "WaCx");











const _c0 = function (a0, a1, a2) { return { "active": a0, "disabled": a1, "margin-adjustment": a2 }; };
function PlanetComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlanetComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const planet_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.changeValue(planet_r1.name, planet_r1.distance); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fc-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const planet_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](3, _c0, planet_r1.active && planet_r1.active.indexOf(ctx_r0.uniqueId) !== -1, planet_r1.active && planet_r1.active.indexOf(ctx_r0.uniqueId) === -1, planet_r1.name !== "Lerbin"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](planet_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iconName", planet_r1.name);
} }
class PlanetComponent {
    constructor(falconeGetterService, falconStoreService, wizardService, cachingService) {
        this.falconeGetterService = falconeGetterService;
        this.falconStoreService = falconStoreService;
        this.wizardService = wizardService;
        this.cachingService = cachingService;
        //public variables
        this.visibility = "hidden";
        this.returnPlanetEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.uniqueId = Object(_common_unique_id__WEBPACK_IMPORTED_MODULE_2__["generateUniqueId"])();
    }
    ngOnInit() {
        const timeOutTime = 200;
        let tempCached = this.cachingService.getCache("planets");
        if (tempCached) {
            this.planets = tempCached;
            this.visibility = 'visible';
            setTimeout(() => { Object(_common_functions__WEBPACK_IMPORTED_MODULE_1__["scrollToBottom"])(); }, timeOutTime);
        }
        else {
            this.falconeGetterService.getPlanets().then((planets) => {
                this.planets = planets;
                this.cachingService.setCache("planets", planets);
                this.visibility = 'visible';
                setTimeout(() => { Object(_common_functions__WEBPACK_IMPORTED_MODULE_1__["scrollToBottom"])(); }, timeOutTime);
            });
        }
        this.wizardService.getWizard().subscribe((data) => {
            if (data === 1) {
                this.distance = null;
            }
        });
    }
    changeValue(planetName, planetDistance) {
        if (planetName && planetDistance) {
            this.distance = planetDistance;
            this.falconStoreService.setPlanet(planetName, this.uniqueId);
            let currentStep = this.wizardService.nextStep(this.uniqueId);
            this.returnPlanetEmit.emit({ distance: planetDistance, currentStep: currentStep, uniqueId: this.uniqueId });
            this.planets.forEach((planet) => {
                if (!planet.active) {
                    planet.active = '';
                }
                planet.active = planet.active.replace(this.uniqueId, '');
                if (planet.name === planetName) {
                    planet.active += this.uniqueId;
                }
            });
        }
    }
}
PlanetComponent.ɵfac = function PlanetComponent_Factory(t) { return new (t || PlanetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_falcon_http_falcone_getter_service__WEBPACK_IMPORTED_MODULE_4__["FalconeGetterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_falcon_store_falcon_store_service__WEBPACK_IMPORTED_MODULE_5__["FalconStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_wizard_wizard_service__WEBPACK_IMPORTED_MODULE_6__["WizardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_caching_service_caching_service__WEBPACK_IMPORTED_MODULE_7__["CachingService"])); };
PlanetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlanetComponent, selectors: [["fc-planet"]], outputs: { returnPlanetEmit: "returnPlanetEmit" }, decls: 4, vars: 4, consts: [[1, "row", "u-pd-1"], ["class", "col-lg-4 planet u-bgc-teritary-color u-c-light u-bdc-primary u-pd-2  u-bd-1px-primary  u-hvr-primary  u-act-error-color u-pr", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "distance"], [1, "col-lg-4", "planet", "u-bgc-teritary-color", "u-c-light", "u-bdc-primary", "u-pd-2", "u-bd-1px-primary", "u-hvr-primary", "u-act-error-color", "u-pr", 3, "ngClass", "click"], [3, "iconName"]], template: function PlanetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlanetComponent_div_1_Template, 3, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@state", ctx.visibility);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.planets);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.distance, " ", ctx.distance ? "KM away" : "", " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_9__["IconComponent"]], styles: [".planet[_ngcontent-%COMP%] {\n  font-size: 100px;\n  cursor: pointer;\n}\n.planet[_ngcontent-%COMP%]:active, .planet.active[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #CC5124;\n}\n[_nghost-%COMP%]     .margin-adjustment .icon {\n  margin-right: 16px;\n}\n[_nghost-%COMP%]     .icon {\n  position: absolute;\n  font-size: 12.2rem;\n  bottom: -17px;\n  right: 14px;\n}\n.disabled[_ngcontent-%COMP%]:after {\n  color: red;\n  content: \"X\";\n  position: absolute;\n  background: gray;\n  opacity: 0.25;\n  width: 100%;\n  height: 100%;\n  font-size: 200;\n  top: 0px;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYW5ldC9wbGFuZXQuY29tcG9uZW50LnNjc3MiLCIuLi9zdHlsZXMvdmFsdWVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFESjtBQUVJO0VBQ0ksZ0JBQUE7RUFDQSxjQ0hJO0FER1o7QUFLSTtFQUNJLGtCQUFBO0FBRlI7QUFJSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUZSO0FBTUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFISiIsImZpbGUiOiJwbGFuZXQvcGxhbmV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc3R5bGVzL3ZhbHVlcy5zY3NzJztcblxuLnBsYW5ldCB7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJjphY3RpdmUsICYuYWN0aXZlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6ICRlcnJvci1jb2xvcjtcbiAgICB9XG59XG5cbjpob3N0IDo6bmctZGVlcCAge1xuICAgIC5tYXJnaW4tYWRqdXN0bWVudCAuaWNvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICB9XG4gICAgLmljb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTIuMnJlbTtcbiAgICAgICAgYm90dG9tOiAtMTdweDtcbiAgICAgICAgcmlnaHQ6IDE0cHg7XG4gICAgfVxufVxuXG4uZGlzYWJsZWQ6YWZ0ZXIge1xuICAgIGNvbG9yOiByZWQ7XG4gICAgY29udGVudDogJ1gnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kOiBncmF5O1xuICAgIG9wYWNpdHk6IDAuMjU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMjAwO1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiAwcHg7XG59XG5cbiIsIiRsaWdodC1ibHVlOiAjMzY0OUM3O1xuJGRhcmstYmx1ZTogIzA1MTg5OTtcbiRza3ktYmx1ZTogIzVDQzRGQTtcbiRiZWlnZTogI0ZBQkM5MTtcbiRyZWQtYnJvd246ICNDQzUxMjQ7XG5cbiRibGFjazogIzAwMDtcbiR3aGl0ZTogI2ZmZjtcblxuJGdyYXktMTAwOiAjZjhmOWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZTllY2VmICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VkNGRhICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYWRiNWJkICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjNmM3NTdkICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjNDk1MDU3ICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyNTI5ICFkZWZhdWx0O1xuXG4kcHJpbWFyeS1jb2xvcjogJGxpZ2h0LWJsdWU7XG4kc2Vjb25kYXJ5LWNvbG9yOiAkZGFyay1ibHVlO1xuJHRlcml0YXJ5LWNvbG9yOiAkc2t5LWJsdWU7XG4kYWNjZW50LWNvbG9yOiAkYmVpZ2U7XG4kZXJyb3ItY29sb3I6ICRyZWQtYnJvd247XG5cbiRkYXJrOiAkYmxhY2s7XG4kbGlnaHQ6ICR3aGl0ZTtcblxuXG5cblxuXG5cbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('state', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('void, hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(2000px)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(0px)', })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('1s ease-in')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('1s ease-in')),
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlanetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fc-planet',
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('state', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('void, hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(2000px)' })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(0px)', })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('1s ease-in')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('1s ease-in')),
                    ])
                ],
                templateUrl: './planet.component.html',
                styleUrls: ['./planet.component.scss']
            }]
    }], function () { return [{ type: _services_falcon_http_falcone_getter_service__WEBPACK_IMPORTED_MODULE_4__["FalconeGetterService"] }, { type: _services_falcon_store_falcon_store_service__WEBPACK_IMPORTED_MODULE_5__["FalconStoreService"] }, { type: _services_wizard_wizard_service__WEBPACK_IMPORTED_MODULE_6__["WizardService"] }, { type: _services_caching_service_caching_service__WEBPACK_IMPORTED_MODULE_7__["CachingService"] }]; }, { returnPlanetEmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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
        let cacheTmp = this.matchCache(id);
        if (cacheTmp.length) {
            return cacheTmp[0].cachedObject;
        }
        else {
            return null;
        }
    }
    resetCache() {
        this.cacheMap = [];
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

/***/ "7AdY":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
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
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci9lcnJvci5jb21wb25lbnQuc2NzcyJ9 */"] });
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
    end_result_url: "http://localhost:3000/find",
    get_token: "http://localhost:3000/token",
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

/***/ "CPI9":
/*!*************************************!*\
  !*** ./src/app/common/functions.js ***!
  \*************************************/
/*! exports provided: scrollToBottom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollToBottom", function() { return scrollToBottom; });
function scrollToBottom() {
    window.scrollTo(0,document.body.scrollHeight);
}
    

/***/ }),

/***/ "IURz":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../error/error.component */ "7AdY");
/* harmony import */ var _vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vehicle/vehicle.component */ "mlG/");
/* harmony import */ var _planet_planet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../planet/planet.component */ "5c+Q");
/* harmony import */ var _common_unique_id__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/unique-id */ "yCkt");
/* harmony import */ var _services_wizard_wizard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/wizard/wizard.service */ "M7hA");
/* harmony import */ var _services_falcon_http_falcone_getter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/falcon-http/falcone-getter.service */ "cSuo");
/* harmony import */ var _services_falcon_store_falcon_store_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/falcon-store/falcon-store.service */ "uBtM");
/* harmony import */ var _services_errors_error_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/errors/error-service.service */ "MaL4");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_services_caching_service_caching_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/caching-service/caching.service */ "79js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../timer/timer.component */ "PVgB");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../icon/icon.component */ "WaCx");

















const _c0 = ["falcons"];
const _c1 = ["falconsMainContainer"];
class MainComponent {
    constructor(wizardService, falconeGetterService, falconStoreService, errorService, dialog, resolver, cachingService, router) {
        this.wizardService = wizardService;
        this.falconeGetterService = falconeGetterService;
        this.falconStoreService = falconStoreService;
        this.errorService = errorService;
        this.dialog = dialog;
        this.resolver = resolver;
        this.cachingService = cachingService;
        this.router = router;
        this.uniqueId = Object(_common_unique_id__WEBPACK_IMPORTED_MODULE_5__["generateUniqueId"])();
    }
    ngOnInit() {
        this.maximumNumberOfSteps = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].maximum_number_steps;
        this.wizardService.getWizard().subscribe(val => {
            this.currentStep = val;
            if (this.currentStep === 1) {
                this.falconeGetterService.getToken().then(token => {
                    this.falconStoreService.setToken(token);
                }).then(() => {
                    //default token
                    if (!this.falconStoreService.getToken()) {
                        this.falconStoreService.setToken(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].token_default_value);
                    }
                });
            }
            else if (this.currentStep > this.maximumNumberOfSteps) {
                this.cachingService.resetCache();
                this.router.navigate(['falcone-result']);
            }
        });
        this.errorService.getErrorObservable().subscribe((data) => {
            if (data) {
                this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"], { data: data });
                this.errorMessage = data;
            }
        });
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
    }
    refreshGame() {
        Object(_common_unique_id__WEBPACK_IMPORTED_MODULE_5__["getArrayOfComponents"])().forEach(comp => {
            comp.destroy();
        });
        this.wizardService.resetWizard();
        this.falconStoreService.resetStore();
        Object(_common_unique_id__WEBPACK_IMPORTED_MODULE_5__["resetComponentArray"])();
        this.cachingService.getCache("planets").forEach((planet) => {
            planet.active = '';
        });
    }
    changeOutputPlanet(data) {
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
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_wizard_wizard_service__WEBPACK_IMPORTED_MODULE_6__["WizardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_falcon_http_falcone_getter_service__WEBPACK_IMPORTED_MODULE_7__["FalconeGetterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_falcon_store_falcon_store_service__WEBPACK_IMPORTED_MODULE_8__["FalconStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_errors_error_service_service__WEBPACK_IMPORTED_MODULE_9__["ErrorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_caching_service_caching_service__WEBPACK_IMPORTED_MODULE_11__["CachingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["fal-main"]], viewQuery: function MainComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mainContainer = _t.first);
    } }, decls: 9, vars: 0, consts: [[1, "refresh", "u-zi-2", "u-bgc-accent-color", 3, "click"], ["iconName", "Refresh"], [1, "u-pb-3"], ["falconsMainContainer", ""], [1, "container", "u-of-hidden"], ["falcons", ""], [3, "returnPlanetEmit"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fc-timer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_div_click_1_listener() { return ctx.refreshGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fc-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "fc-planet", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("returnPlanetEmit", function MainComponent_Template_fc_planet_returnPlanetEmit_8_listener($event) { return ctx.changeOutputPlanet($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_timer_timer_component__WEBPACK_IMPORTED_MODULE_13__["TimerComponent"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_14__["IconComponent"], _planet_planet_component__WEBPACK_IMPORTED_MODULE_4__["PlanetComponent"]], styles: ["[_nghost-%COMP%]     .refresh {\n  position: fixed;\n  right: 42px;\n  top: 47px;\n  cursor: pointer;\n  box-shadow: 5px 10px rgba(0, 0, 0, 0.15);\n}\n[_nghost-%COMP%]     .refresh .icon {\n  color: #3649C7;\n  font-size: 172px;\n  right: 34px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsIi4uL3N0eWxlcy92YWx1ZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtBQUZKO0FBSUk7RUFDSSxjQ1hLO0VEYUwsZ0JBQUE7RUFFQSxXQUFBO0FBSlIiLCJmaWxlIjoibWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc3R5bGVzL3ZhbHVlcy5zY3NzJztcblxuOmhvc3QgOjpuZy1kZWVwIC5yZWZyZXNoXG57XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiA0MnB4O1xuICAgIHRvcDogNDdweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNoYWRvdzogNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcblxuICAgIC5pY29ue1xuICAgICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG5cbiAgICAgICAgZm9udC1zaXplOiAxNzJweDtcblxuICAgICAgICByaWdodDogMzRweDtcbiAgICB9XG59XG4iLCIkbGlnaHQtYmx1ZTogIzM2NDlDNztcbiRkYXJrLWJsdWU6ICMwNTE4OTk7XG4kc2t5LWJsdWU6ICM1Q0M0RkE7XG4kYmVpZ2U6ICNGQUJDOTE7XG4kcmVkLWJyb3duOiAjQ0M1MTI0O1xuXG4kYmxhY2s6ICMwMDA7XG4kd2hpdGU6ICNmZmY7XG5cbiRncmF5LTEwMDogI2Y4ZjlmYSAhZGVmYXVsdDtcbiRncmF5LTIwMDogI2U5ZWNlZiAhZGVmYXVsdDtcbiRncmF5LTMwMDogI2RlZTJlNiAhZGVmYXVsdDtcbiRncmF5LTQwMDogI2NlZDRkYSAhZGVmYXVsdDtcbiRncmF5LTUwMDogI2FkYjViZCAhZGVmYXVsdDtcbiRncmF5LTYwMDogIzZjNzU3ZCAhZGVmYXVsdDtcbiRncmF5LTcwMDogIzQ5NTA1NyAhZGVmYXVsdDtcbiRncmF5LTgwMDogIzM0M2E0MCAhZGVmYXVsdDtcbiRncmF5LTkwMDogIzIxMjUyOSAhZGVmYXVsdDtcblxuJHByaW1hcnktY29sb3I6ICRsaWdodC1ibHVlO1xuJHNlY29uZGFyeS1jb2xvcjogJGRhcmstYmx1ZTtcbiR0ZXJpdGFyeS1jb2xvcjogJHNreS1ibHVlO1xuJGFjY2VudC1jb2xvcjogJGJlaWdlO1xuJGVycm9yLWNvbG9yOiAkcmVkLWJyb3duO1xuXG4kZGFyazogJGJsYWNrO1xuJGxpZ2h0OiAkd2hpdGU7XG5cblxuXG5cblxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fal-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return [{ type: _services_wizard_wizard_service__WEBPACK_IMPORTED_MODULE_6__["WizardService"] }, { type: _services_falcon_http_falcone_getter_service__WEBPACK_IMPORTED_MODULE_7__["FalconeGetterService"] }, { type: _services_falcon_store_falcon_store_service__WEBPACK_IMPORTED_MODULE_8__["FalconStoreService"] }, { type: _services_errors_error_service_service__WEBPACK_IMPORTED_MODULE_9__["ErrorService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: src_app_services_caching_service_caching_service__WEBPACK_IMPORTED_MODULE_11__["CachingService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] }]; }, { container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["falcons", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]
        }], mainContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["falconsMainContainer"]
        }] }); })();


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
        this.currentStage = 1;
        this.wiardSubject$.next(this.currentStage);
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

/***/ "PVgB":
/*!*****************************************************!*\
  !*** ./src/app/components/timer/timer.component.ts ***!
  \*****************************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_services_wizard_wizard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/wizard/wizard.service */ "M7hA");
/* harmony import */ var src_app_services_falcon_store_falcon_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/falcon-store/falcon-store.service */ "uBtM");






class TimerComponent {
    constructor(wizardService, falconStoreService) {
        this.wizardService = wizardService;
        this.falconStoreService = falconStoreService;
        this.visibility = "hidden";
        this.initialTime = new Date().getTime();
    }
    ngOnInit() {
        this.interval = setInterval(() => {
            this.time = Math.floor((new Date().getTime() - this.initialTime) / 1000);
            this.visibility = 'visible';
        }, 1000);
        this.wizardService.getWizard().subscribe(data => {
            if (data === 1) {
                this.initialTime = new Date().getTime();
            }
            else if (data > src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].maximum_number_steps) {
                this.falconStoreService.setTime(this.time);
            }
        });
    }
    ngOnDestroy() {
        clearInterval(this.interval);
    }
}
TimerComponent.ɵfac = function TimerComponent_Factory(t) { return new (t || TimerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_wizard_wizard_service__WEBPACK_IMPORTED_MODULE_3__["WizardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_falcon_store_falcon_store_service__WEBPACK_IMPORTED_MODULE_4__["FalconStoreService"])); };
TimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimerComponent, selectors: [["fc-timer"]], decls: 3, vars: 3, consts: [[1, "timer", "u-c-light", "u-pd-1", "u-bd-1px-dark", "u-zi-3"]], template: function TimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@state", ctx.visibility);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.time, "", ctx.time ? "s" : "", "");
    } }, styles: [".timer[_ngcontent-%COMP%] {\n  font-family: Roboto;\n  box-shadow: 5px 10px rgba(0, 0, 0, 0.15);\n  right: 10px;\n  background: #051899;\n  position: fixed;\n  top: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVyL3RpbWVyLmNvbXBvbmVudC5zY3NzIiwiLi4vc3R5bGVzL3ZhbHVlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLFdBQUE7RUFDQSxtQkNMUTtFRE1SLGVBQUE7RUFDQSxRQUFBO0FBREoiLCJmaWxlIjoidGltZXIvdGltZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzL3ZhbHVlcy5zY3NzXCI7XG5cbi50aW1lciB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBib3gtc2hhZG93OiA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICRkYXJrLWJsdWU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNnB4O1xufSIsIiRsaWdodC1ibHVlOiAjMzY0OUM3O1xuJGRhcmstYmx1ZTogIzA1MTg5OTtcbiRza3ktYmx1ZTogIzVDQzRGQTtcbiRiZWlnZTogI0ZBQkM5MTtcbiRyZWQtYnJvd246ICNDQzUxMjQ7XG5cbiRibGFjazogIzAwMDtcbiR3aGl0ZTogI2ZmZjtcblxuJGdyYXktMTAwOiAjZjhmOWZhICFkZWZhdWx0O1xuJGdyYXktMjAwOiAjZTllY2VmICFkZWZhdWx0O1xuJGdyYXktMzAwOiAjZGVlMmU2ICFkZWZhdWx0O1xuJGdyYXktNDAwOiAjY2VkNGRhICFkZWZhdWx0O1xuJGdyYXktNTAwOiAjYWRiNWJkICFkZWZhdWx0O1xuJGdyYXktNjAwOiAjNmM3NTdkICFkZWZhdWx0O1xuJGdyYXktNzAwOiAjNDk1MDU3ICFkZWZhdWx0O1xuJGdyYXktODAwOiAjMzQzYTQwICFkZWZhdWx0O1xuJGdyYXktOTAwOiAjMjEyNTI5ICFkZWZhdWx0O1xuXG4kcHJpbWFyeS1jb2xvcjogJGxpZ2h0LWJsdWU7XG4kc2Vjb25kYXJ5LWNvbG9yOiAkZGFyay1ibHVlO1xuJHRlcml0YXJ5LWNvbG9yOiAkc2t5LWJsdWU7XG4kYWNjZW50LWNvbG9yOiAkYmVpZ2U7XG4kZXJyb3ItY29sb3I6ICRyZWQtYnJvd247XG5cbiRkYXJrOiAkYmxhY2s7XG4kbGlnaHQ6ICR3aGl0ZTtcblxuXG5cblxuXG5cbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('state', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void, hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('5s ease-in')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('5s ease-in')),
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fc-timer',
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('state', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('void, hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('5s ease-in')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('5s ease-in')),
                    ])
                ],
                templateUrl: './timer.component.html',
                styleUrls: ['./timer.component.scss']
            }]
    }], function () { return [{ type: src_app_services_wizard_wizard_service__WEBPACK_IMPORTED_MODULE_3__["WizardService"] }, { type: src_app_services_falcon_store_falcon_store_service__WEBPACK_IMPORTED_MODULE_4__["FalconStoreService"] }]; }, null); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'Falcone';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "WaCx":
/*!***************************************************!*\
  !*** ./src/app/components/icon/icon.component.ts ***!
  \***************************************************/
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
            'Space ship': 9734,
            'Refresh': 9738
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
    } }, styles: [".icon[_ngcontent-%COMP%] {\n  font-family: FalconeFont !important;\n  font-weight: 100 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljb24vaWNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUFBO0VBQ0EsMkJBQUE7QUFDSiIsImZpbGUiOiJpY29uL2ljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbiB7XG4gICAgZm9udC1mYW1pbHk6IEZhbGNvbmVGb250ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDEwMCAhaW1wb3J0YW50O1xufSJdfQ== */"] });
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
/* harmony import */ var _components_planet_planet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/planet/planet.component */ "5c+Q");
/* harmony import */ var _components_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/vehicle/vehicle.component */ "mlG/");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pipes_id_creator_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/id-creator.pipe */ "Z85B");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/error/error.component */ "7AdY");
/* harmony import */ var _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/icon/icon.component */ "WaCx");
/* harmony import */ var _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/timer/timer.component */ "PVgB");
/* harmony import */ var _components_result_result_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/result/result.component */ "5ZoK");
















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
        _components_planet_planet_component__WEBPACK_IMPORTED_MODULE_5__["PlanetComponent"],
        _components_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_6__["VehicleComponent"],
        _components_main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"],
        _pipes_id_creator_pipe__WEBPACK_IMPORTED_MODULE_9__["IdCreatorPipe"],
        _components_error_error_component__WEBPACK_IMPORTED_MODULE_11__["ErrorComponent"],
        _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_12__["IconComponent"],
        _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_13__["TimerComponent"],
        _components_result_result_component__WEBPACK_IMPORTED_MODULE_14__["ResultComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_planet_planet_component__WEBPACK_IMPORTED_MODULE_5__["PlanetComponent"],
                    _components_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_6__["VehicleComponent"],
                    _components_main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"],
                    _pipes_id_creator_pipe__WEBPACK_IMPORTED_MODULE_9__["IdCreatorPipe"],
                    _components_error_error_component__WEBPACK_IMPORTED_MODULE_11__["ErrorComponent"],
                    _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_12__["IconComponent"],
                    _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_13__["TimerComponent"],
                    _components_result_result_component__WEBPACK_IMPORTED_MODULE_14__["ResultComponent"]
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
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].end_result_url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            let random = Math.floor(Math.random() * data.length);
            return data[random];
        }))
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
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].get_token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => { return data.token; }))
            .toPromise().catch(err => {
            let error;
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

/***/ "mlG/":
/*!*********************************************************!*\
  !*** ./src/app/components/vehicle/vehicle.component.ts ***!
  \*********************************************************/
/*! exports provided: VehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleComponent", function() { return VehicleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_unique_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/unique-id */ "yCkt");
/* harmony import */ var _common_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/functions */ "CPI9");
/* harmony import */ var _services_falcon_http_falcone_getter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/falcon-http/falcone-getter.service */ "cSuo");
/* harmony import */ var _services_falcon_store_falcon_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/falcon-store/falcon-store.service */ "uBtM");
/* harmony import */ var _services_wizard_wizard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/wizard/wizard.service */ "M7hA");
/* harmony import */ var _services_caching_service_caching_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/caching-service/caching.service */ "79js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icon/icon.component */ "WaCx");
/* harmony import */ var _pipes_id_creator_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/id-creator.pipe */ "Z85B");











function VehicleComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fc-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function VehicleComponent_div_1_Template_input_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const vehicle_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.setVehicle($event, vehicle_r1.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "idCreator");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "idCreator");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vehicle_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("iconName", vehicle_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, vehicle_r1.name))("name", ctx_r0.key)("disabled", vehicle_r1.max_distance < ctx_r0.distance);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 9, vehicle_r1.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", vehicle_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", vehicle_r1.max_distance, ")");
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
        const timeOutTime = 200;
        let tempCached = this.cachingService.getCache("vehicles");
        if (tempCached) {
            this.vehicle = tempCached;
            setTimeout(() => { Object(_common_functions__WEBPACK_IMPORTED_MODULE_2__["scrollToBottom"])(); }, timeOutTime);
        }
        else {
            this.falconeGetterService.getVehicles().then(vehicles => {
                this.vehicle = vehicles;
                this.cachingService.setCache("vehicles", vehicles);
                setTimeout(() => { Object(_common_functions__WEBPACK_IMPORTED_MODULE_2__["scrollToBottom"])(); }, timeOutTime);
            });
        }
    }
    ngOnChanges(changes) {
        this.distance = changes.distance.currentValue;
    }
    setVehicle(event, vehicleName) {
        if (event.target.value === 'on') {
            this.falconStoreService.setVehicle(vehicleName, this.uniqueId);
            let currentStep = this.wizardService.nextStep(this.uniqueId);
            this.nextStep.emit({ uniqueId: this.uniqueId, currentStep: currentStep });
        }
    }
}
VehicleComponent.ɵfac = function VehicleComponent_Factory(t) { return new (t || VehicleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_falcon_http_falcone_getter_service__WEBPACK_IMPORTED_MODULE_3__["FalconeGetterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_falcon_store_falcon_store_service__WEBPACK_IMPORTED_MODULE_4__["FalconStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_wizard_wizard_service__WEBPACK_IMPORTED_MODULE_5__["WizardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_caching_service_caching_service__WEBPACK_IMPORTED_MODULE_6__["CachingService"])); };
VehicleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VehicleComponent, selectors: [["fc-vehicle"]], inputs: { distance: "distance", key: "key" }, outputs: { nextStep: "nextStep" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 1, consts: [[1, "u-mgb-5"], [4, "ngFor", "ngForOf"], [3, "iconName"], ["type", "radio", 3, "id", "name", "disabled", "change"], [3, "for"], [1, "distance"]], template: function VehicleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VehicleComponent_div_1_Template, 9, 11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.vehicle);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_8__["IconComponent"]], pipes: [_pipes_id_creator_pipe__WEBPACK_IMPORTED_MODULE_9__["IdCreatorPipe"]], styles: [".distance[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-family: Robotto;\n}\n\n[_nghost-%COMP%]     .icon {\n  line-height: 22px;\n  font-size: 144px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljbGUvdmVoaWNsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUdJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUFSIiwiZmlsZSI6InZlaGljbGUvdmVoaWNsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXN0YW5jZSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdHRvO1xufVxuXG46aG9zdCA6Om5nLWRlZXAge1xuICAgIC5pY29uIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTQ0cHg7XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VehicleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fc-vehicle',
                templateUrl: './vehicle.component.html',
                styleUrls: ['./vehicle.component.scss']
            }]
    }], function () { return [{ type: _services_falcon_http_falcone_getter_service__WEBPACK_IMPORTED_MODULE_3__["FalconeGetterService"] }, { type: _services_falcon_store_falcon_store_service__WEBPACK_IMPORTED_MODULE_4__["FalconStoreService"] }, { type: _services_wizard_wizard_service__WEBPACK_IMPORTED_MODULE_5__["WizardService"] }, { type: _services_caching_service_caching_service__WEBPACK_IMPORTED_MODULE_6__["CachingService"] }]; }, { distance: [{
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
        this.returnFalcon = { token: "", planet_names: [], vehicle_names: [], time: 0 };
        this.maximum_array_size = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].maximum_number_steps / 2;
    }
    setToken(token) {
        this.returnFalcon.token = token;
    }
    resetStore() {
        this.returnFalcon.token = "";
        this.returnFalcon.planet_names = [];
        this.returnFalcon.vehicle_names = [];
    }
    setPlanet(planetName, uniqueId) {
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
    setTime(time) {
        this.returnFalcon.time = time;
    }
    getTime() {
        return this.returnFalcon.time;
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
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");
/* harmony import */ var _components_result_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/result/result.component */ "5ZoK");






const routes = [
    { path: 'falcone-game', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] },
    { path: 'falcone-result', component: _components_result_result_component__WEBPACK_IMPORTED_MODULE_3__["ResultComponent"] },
    { path: '', redirectTo: '/falcone-game', pathMatch: 'full' }
];
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

/***/ "yCkt":
/*!*************************************!*\
  !*** ./src/app/common/unique-id.ts ***!
  \*************************************/
/*! exports provided: isOldComponent, resetComponentArray, getArrayOfComponents, returnLatestComponentMatch, pushComponentReference, generateUniqueId, setUniquId, hasUniquId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOldComponent", function() { return isOldComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetComponentArray", function() { return resetComponentArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArrayOfComponents", function() { return getArrayOfComponents; });
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
function resetComponentArray() {
    componentIds = new Set();
    componentMatch = [];
    createdComponentsIds = [];
}
function getArrayOfComponents() {
    return createdComponentsIds.map((val) => { return val.vehiclePlanetCompnent; });
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