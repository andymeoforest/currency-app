webpackJsonp([11],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangethemePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChangethemePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangethemePage = (function () {
    function ChangethemePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChangethemePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangethemePage');
    };
    ChangethemePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changetheme',template:/*ion-inline-start:"/Users/lennakz/WebRoot/currency/src/pages/changetheme/changetheme.html"*/'<ion-header >\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Change Theme</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lennakz/WebRoot/currency/src/pages/changetheme/changetheme.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ChangethemePage);
    return ChangethemePage;
}());

//# sourceMappingURL=changetheme.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateaccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CreateaccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateaccountPage = (function () {
    function CreateaccountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CreateaccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateaccountPage');
    };
    CreateaccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-createaccount',template:/*ion-inline-start:"/Users/lennakz/WebRoot/currency/src/pages/createaccount/createaccount.html"*/'<ion-header >\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Create Account</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lennakz/WebRoot/currency/src/pages/createaccount/createaccount.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CreateaccountPage);
    return CreateaccountPage;
}());

//# sourceMappingURL=createaccount.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrenciesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rates_rates__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rates_currency__ = __webpack_require__(261);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { AllCurrenciesPage } from '../all-currencies/all-currencies';

var CurrenciesPage = (function () {
    function CurrenciesPage(navCtrl, navParams, ratesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ratesProvider = ratesProvider;
        this.selectedCurrency = "CAD";
        this.currenciesRates = [];
        this.amount = 1;
    }
    CurrenciesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.ratesProvider.getRates(this.selectedCurrency).subscribe(function (res) {
            var rates = Object.keys(res.rates);
            _this.allCurrencies = rates.slice();
            _this.allCurrencies.push(_this.selectedCurrency);
            rates.forEach(function (k) {
                _this.currenciesRates.push(new __WEBPACK_IMPORTED_MODULE_3__providers_rates_currency__["a" /* Currency */](k, res.rates[k]));
            });
        });
    };
    CurrenciesPage.prototype.changeSelectedCurrency = function (e) {
        var _this = this;
        this.selectedCurrency = e;
        this.ratesProvider.getRates(this.selectedCurrency).subscribe(function (res) {
            _this.currenciesRates = [];
            Object.keys(res.rates).forEach(function (k) {
                _this.currenciesRates.push(new __WEBPACK_IMPORTED_MODULE_3__providers_rates_currency__["a" /* Currency */](k, res.rates[k]));
            });
        });
    };
    CurrenciesPage.prototype.calculate = function () {
        var _this = this;
        this.currenciesRates.forEach(function (k) {
            k.value = k.value * _this.amount;
        });
    };
    CurrenciesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-currencies',template:/*ion-inline-start:"/Users/lennakz/WebRoot/currency/src/pages/currencies/currencies.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title text-center>Currencies</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-card>\n		<ion-list inset>\n			<ion-item>\n				<ion-select item-start [(ngModel)]="selectedCurrency" (ionChange)="changeSelectedCurrency($event)">\n					<ion-option *ngFor="let cur of allCurrencies" value="{{cur}}">{{cur}}</ion-option>\n				</ion-select>	\n				<ion-input item-end [(ngModel)]="amount" name="amount" type="number" value="{{amount}}"></ion-input>							\n			</ion-item>\n			<ion-item>\n				<button ion-button (click)="calculate()">Calculate</button>	\n			</ion-item>\n		</ion-list>\n	</ion-card>\n\n	<div *ngFor="let rate of currenciesRates" (click)="changeSelectedCurrency(rate.code)">\n		<ion-card>\n			<ion-list>\n				<ion-item>\n					<ion-label color="primary">{{ rate.code }}</ion-label>\n					<div item-content>{{ rate.value | number:\'1.2-2\' }}</div>\n				</ion-item>\n			</ion-list>\n		</ion-card>\n	</div>\n	\n\n</ion-content>'/*ion-inline-end:"/Users/lennakz/WebRoot/currency/src/pages/currencies/currencies.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_rates_rates__["a" /* RatesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_rates_rates__["a" /* RatesProvider */]) === "function" && _c || Object])
    ], CurrenciesPage);
    return CurrenciesPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=currencies.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeedbackPage = (function () {
    function FeedbackPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FeedbackPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FeedbackPage');
    };
    FeedbackPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-feedback',template:/*ion-inline-start:"/Users/lennakz/WebRoot/currency/src/pages/feedback/feedback.html"*/'<ion-header >\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Give Feedback</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lennakz/WebRoot/currency/src/pages/feedback/feedback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/lennakz/WebRoot/currency/src/pages/login/login.html"*/'<ion-header >\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Login with email</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lennakz/WebRoot/currency/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginwithfacebookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LoginwithfacebookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginwithfacebookPage = (function () {
    function LoginwithfacebookPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginwithfacebookPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginwithfacebookPage');
    };
    LoginwithfacebookPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-loginwithfacebook',template:/*ion-inline-start:"/Users/lennakz/WebRoot/currency/src/pages/loginwithfacebook/loginwithfacebook.html"*/'<ion-header >\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Login with Facebook</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lennakz/WebRoot/currency/src/pages/loginwithfacebook/loginwithfacebook.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginwithfacebookPage);
    return LoginwithfacebookPage;
}());

//# sourceMappingURL=loginwithfacebook.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginwithgmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LoginwithgmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginwithgmailPage = (function () {
    function LoginwithgmailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginwithgmailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginwithgmailPage');
    };
    LoginwithgmailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-loginwithgmail',template:/*ion-inline-start:"/Users/lennakz/WebRoot/currency/src/pages/loginwithgmail/loginwithgmail.html"*/'<ion-header >\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Login with Gmail</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lennakz/WebRoot/currency/src/pages/loginwithgmail/loginwithgmail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginwithgmailPage);
    return LoginwithgmailPage;
}());

//# sourceMappingURL=loginwithgmail.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatealertPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RatealertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RatealertPage = (function () {
    function RatealertPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RatealertPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RatealertPage');
    };
    RatealertPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ratealert',template:/*ion-inline-start:"/Users/lennakz/WebRoot/currency/src/pages/ratealert/ratealert.html"*/'<ion-header >\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Rate Alert</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lennakz/WebRoot/currency/src/pages/ratealert/ratealert.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RatealertPage);
    return RatealertPage;
}());

//# sourceMappingURL=ratealert.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/lennakz/WebRoot/currency/src/pages/settings/settings.html"*/'<ion-header >\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lennakz/WebRoot/currency/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 120:
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
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/all-currencies/all-currencies.module": [
		288,
		1
	],
	"../pages/changetheme/changetheme.module": [
		289,
		10
	],
	"../pages/createaccount/createaccount.module": [
		290,
		9
	],
	"../pages/currencies/currencies.module": [
		291,
		8
	],
	"../pages/currencylist/currencylist.module": [
		292,
		0
	],
	"../pages/feedback/feedback.module": [
		293,
		7
	],
	"../pages/login/login.module": [
		294,
		6
	],
	"../pages/loginwithfacebook/loginwithfacebook.module": [
		295,
		5
	],
	"../pages/loginwithgmail/loginwithgmail.module": [
		296,
		4
	],
	"../pages/ratealert/ratealert.module": [
		297,
		3
	],
	"../pages/settings/settings.module": [
		298,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 162;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RatesProvider = (function () {
    function RatesProvider(http) {
        this.http = http;
        this.apiUrl = 'http://api.fixer.io/latest';
    }
    RatesProvider.prototype.getRates = function (base) {
        return this.http.get(this.apiUrl + '?base=' + base);
    };
    RatesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RatesProvider);
    return RatesProvider;
}());

//# sourceMappingURL=rates.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/lennakz/WebRoot/currency/src/pages/home/home.html"*/'<ion-header >\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Currency</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <!--- Do not delete button. Testing the navigation. -->\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/Users/lennakz/WebRoot/currency/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(231);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_createaccount_createaccount__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_loginwithfacebook_loginwithfacebook__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_loginwithgmail_loginwithgmail__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_changetheme_changetheme__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_ratealert_ratealert__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_feedback_feedback__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_currencylist_currencylist__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_all_currencies_all_currencies__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_currencies_currencies__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_rates_rates__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_data_currency_service__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_createaccount_createaccount__["a" /* CreateaccountPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_loginwithfacebook_loginwithfacebook__["a" /* LoginwithfacebookPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_loginwithgmail_loginwithgmail__["a" /* LoginwithgmailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_changetheme_changetheme__["a" /* ChangethemePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_changetheme_changetheme__["a" /* ChangethemePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_ratealert_ratealert__["a" /* RatealertPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_currencylist_currencylist__["a" /* CurrencylistPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_all_currencies_all_currencies__["a" /* AllCurrenciesPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_currencies_currencies__["a" /* CurrenciesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/all-currencies/all-currencies.module#AllCurrenciesPageModule', name: 'AllCurrenciesPage', segment: 'all-currencies', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/changetheme/changetheme.module#ChangethemePageModule', name: 'ChangethemePage', segment: 'changetheme', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/createaccount/createaccount.module#CreateaccountPageModule', name: 'CreateaccountPage', segment: 'createaccount', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/currencies/currencies.module#CurrenciesPageModule', name: 'CurrenciesPage', segment: 'currencies', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/currencylist/currencylist.module#CurrencylistPageModule', name: 'CurrencylistPage', segment: 'currencylist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/feedback/feedback.module#FeedbackPageModule', name: 'FeedbackPage', segment: 'feedback', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/loginwithfacebook/loginwithfacebook.module#LoginwithfacebookPageModule', name: 'LoginwithfacebookPage', segment: 'loginwithfacebook', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/loginwithgmail/loginwithgmail.module#LoginwithgmailPageModule', name: 'LoginwithgmailPage', segment: 'loginwithgmail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ratealert/ratealert.module#RatealertPageModule', name: 'RatealertPage', segment: 'ratealert', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_createaccount_createaccount__["a" /* CreateaccountPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_loginwithfacebook_loginwithfacebook__["a" /* LoginwithfacebookPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_loginwithgmail_loginwithgmail__["a" /* LoginwithgmailPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_changetheme_changetheme__["a" /* ChangethemePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_ratealert_ratealert__["a" /* RatealertPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_currencylist_currencylist__["a" /* CurrencylistPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_all_currencies_all_currencies__["a" /* AllCurrenciesPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_currencies_currencies__["a" /* CurrenciesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_rates_rates__["a" /* RatesProvider */],
                __WEBPACK_IMPORTED_MODULE_20__pages_data_currency_service__["a" /* CurrencyService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Currency; });
var Currency = (function () {
    function Currency(code, value) {
        // this.name = name;
        this.code = code;
        // this.imgUrl = imgUrl;
        this.value = value;
    }
    return Currency;
}());

//# sourceMappingURL=currency.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_createaccount_createaccount__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_loginwithfacebook_loginwithfacebook__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_loginwithgmail_loginwithgmail__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_changetheme_changetheme__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_ratealert_ratealert__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_feedback_feedback__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_currencylist_currencylist__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_currencies_currencies__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_14__pages_currencies_currencies__["a" /* CurrenciesPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: "Create Account", component: __WEBPACK_IMPORTED_MODULE_5__pages_createaccount_createaccount__["a" /* CreateaccountPage */] },
            { title: "Login with Email", component: __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */] },
            { title: "Login with Facebook", component: __WEBPACK_IMPORTED_MODULE_7__pages_loginwithfacebook_loginwithfacebook__["a" /* LoginwithfacebookPage */] },
            { title: "Login with Gmail", component: __WEBPACK_IMPORTED_MODULE_8__pages_loginwithgmail_loginwithgmail__["a" /* LoginwithgmailPage */] },
            { title: "Change Theme", component: __WEBPACK_IMPORTED_MODULE_9__pages_changetheme_changetheme__["a" /* ChangethemePage */] },
            { title: "Rate Alert", component: __WEBPACK_IMPORTED_MODULE_10__pages_ratealert_ratealert__["a" /* RatealertPage */] },
            { title: "Give us feedback!", component: __WEBPACK_IMPORTED_MODULE_11__pages_feedback_feedback__["a" /* FeedbackPage */] },
            { title: "Currencies", component: __WEBPACK_IMPORTED_MODULE_14__pages_currencies_currencies__["a" /* CurrenciesPage */] },
            { title: "Currency List", component: __WEBPACK_IMPORTED_MODULE_13__pages_currencylist_currencylist__["a" /* CurrencylistPage */] },
            { title: "Settings", component: __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__["a" /* SettingsPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/lennakz/WebRoot/currency/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/lennakz/WebRoot/currency/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__allCurrencies__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable_of__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CurrencyService = (function () {
    function CurrencyService() {
        this.addAllCurrency();
        this.sortCurrencyByCode();
    }
    CurrencyService.prototype.ngOnInit = function () {
    };
    //load all currency information
    CurrencyService.prototype.addAllCurrency = function () {
        var _this = this;
        this.currencyList = [];
        __WEBPACK_IMPORTED_MODULE_0__allCurrencies__["a" /* ALLCURRENCIES */].forEach(function (element) {
            _this.currencyList.push({ key: element.code, currency: element, isfavor: false });
        });
    };
    CurrencyService.prototype.setFavorCurrency = function (key) {
        var index = this.currencyList.findIndex(function (obj) { return obj.key == key; });
        this.currencyList[index].isfavor = true;
    };
    CurrencyService.prototype.removeFacoverCurrency = function (key) {
        var index = this.currencyList.findIndex(function (obj) { return obj.key == key; });
        this.currencyList[index].isfavor = false;
    };
    CurrencyService.prototype.sortCurrencyByCode = function () {
        this.currencyList = this.currencyList.sort(function (a, b) {
            if (a.key.toString() < b.key.toString())
                return -1;
            if (a.key.toString() > b.key.toString())
                return 1;
            return 0;
        });
    };
    CurrencyService.prototype.getCurrencyList = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable_of__["of"])(this.currencyList);
    };
    CurrencyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CurrencyService);
    return CurrencyService;
}());

//# sourceMappingURL=currency.service.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllCurrenciesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_currency_service__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllCurrenciesPage = (function () {
    function AllCurrenciesPage(navCtrl, navParams, currencyService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.currencyService = currencyService;
    }
    AllCurrenciesPage.prototype.ngOnInit = function () {
        this.getCurrencyList();
    };
    AllCurrenciesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CurrencylistPage');
    };
    AllCurrenciesPage.prototype.getCurrencyList = function () {
        var _this = this;
        this.currencyService.getCurrencyList().subscribe(function (currencyList) { return _this.currencyList = currencyList; });
    };
    AllCurrenciesPage.prototype.addCurrency = function (index) {
        console.log(this.currencyList[index]);
        this.currencyList[index].isfavor = true;
    };
    AllCurrenciesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-all-currencies',template:/*ion-inline-start:"/Users/lennakz/WebRoot/currency/src/pages/all-currencies/all-currencies.html"*/'<!--\n  Generated template for the AllCurrenciesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Currency List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list *ngFor = "let obj of currencyList;let i = index;">\n    <button ion-item (click)="addCurrency(i)">\n      <ion-avatar item-start>\n        <img src="../assets/imgs/{{obj.currency.imgUrl}}">\n      </ion-avatar>\n      <h2>{{obj.currency.code}} - {{obj.currency.name}}</h2>\n    </button>\n  </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"/Users/lennakz/WebRoot/currency/src/pages/all-currencies/all-currencies.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__data_currency_service__["a" /* CurrencyService */]])
    ], AllCurrenciesPage);
    return AllCurrenciesPage;
}());

//# sourceMappingURL=all-currencies.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ALLCURRENCIES; });
var ALLCURRENCIES = [
    {
        name: 'Canadian Dollar',
        code: 'CAD',
        imgUrl: 'CAD.png'
    },
    {
        name: 'Japanese Yen',
        code: 'JPY',
        imgUrl: ''
    },
    {
        name: 'Australian Dollar',
        code: 'AUD',
        imgUrl: ''
    },
    {
        name: 'Barbadian or Bajan Dollar',
        code: 'BBD',
        imgUrl: ''
    },
    {
        name: 'Bahamian Dollar',
        code: 'BSD',
        imgUrl: ''
    },
    {
        name: 'Jamaican Dollar',
        code: 'JMD',
        imgUrl: ''
    },
    {
        name: 'Mexican Peso',
        code: 'MXN',
        imgUrl: ''
    },
    {
        name: 'US Dollar',
        code: 'USD',
        imgUrl: 'USD.png'
    },
    {
        name: 'East Caribbean Dollar',
        code: 'ECD',
        imgUrl: ''
    },
    {
        name: 'Belizean Dollar',
        code: 'BZD',
        imgUrl: ''
    },
    {
        name: 'Trinidadian Dollar',
        code: 'TTD',
        imgUrl: ''
    },
    {
        name: 'Bulgarian Lev',
        code: 'BGN',
        imgUrl: ''
    },
    {
        name: 'Swiss Franc',
        code: 'CHF',
        imgUrl: ''
    },
    {
        name: 'Czech Koruna',
        code: 'CZK',
        imgUrl: ''
    },
    {
        name: 'Danish Krone',
        code: 'DKK',
        imgUrl: ''
    },
    {
        name: 'Euro',
        code: 'EUR',
        imgUrl: 'EUR.png'
    },
    {
        name: 'British Pound',
        code: 'GBP',
        imgUrl: ''
    },
    {
        name: 'Croatian Kuna',
        code: 'HRK',
        imgUrl: ''
    },
    {
        name: 'Hungarian Forint',
        code: 'HUF',
        imgUrl: ''
    },
    {
        name: 'Israeli Shekel',
        code: 'ILS',
        imgUrl: ''
    },
    {
        name: ' Norwegian Krone',
        code: 'NOK',
        imgUrl: ''
    },
    {
        name: 'Polish Zloty',
        code: 'PLN',
        imgUrl: ''
    },
    {
        name: 'Romanian Leu',
        code: 'RON',
        imgUrl: ''
    },
    {
        name: 'Serbian Dinar',
        code: 'RSD',
        imgUrl: ''
    },
    {
        name: 'Swedish Krona',
        code: 'SEK',
        imgUrl: ''
    },
    {
        name: 'Turkish Lira',
        code: 'TRY',
        imgUrl: ''
    },
    {
        name: 'Botswana Pula',
        code: 'BWP',
        imgUrl: ''
    },
    {
        name: 'Ghanaian Cedi',
        code: 'GHS',
        imgUrl: ''
    },
    {
        name: 'Kenyan Shilling',
        code: 'KES',
        imgUrl: ''
    }
];
//# sourceMappingURL=allCurrencies.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencylistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_currencies_all_currencies__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_currency_service__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CurrencylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CurrencylistPage = (function () {
    function CurrencylistPage(navCtrl, navParams, currencyService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.currencyService = currencyService;
    }
    CurrencylistPage.prototype.ngOnInit = function () {
        this.getCurrencyList();
    };
    CurrencylistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CurrencylistPage');
    };
    CurrencylistPage.prototype.getCurrencyList = function () {
        var _this = this;
        this.currencyService.getCurrencyList().subscribe(function (currencyList) { return _this.currencyList = currencyList; });
    };
    CurrencylistPage.prototype.addCurrency = function () {
        console.log("push");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__all_currencies_all_currencies__["a" /* AllCurrenciesPage */], { list: this.currencyList });
    };
    CurrencylistPage.prototype.deleteCurrency = function (index) {
        console.log(index);
        this.currencyList[index].isfavor = false;
    };
    CurrencylistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-currencylist',template:/*ion-inline-start:"/Users/lennakz/WebRoot/currency/src/pages/currencylist/currencylist.html"*/'<ion-header >\n  <ion-navbar color="primary">\n    <div style="float:left">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n    </div>\n\n    <div style="float:right">\n        <button ion-button icon-right (click) = "addCurrency()">\n            <ion-icon name="add"></ion-icon>\n          </button>\n    </div>\n\n    <div>\n        <ion-title text-center>Currency List</ion-title>\n    </div>\n\n    <!-- Float the icon right -->\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list  *ngFor = "let obj of currencyList; let i = index;">\n    <ion-item-sliding *ngIf = "obj.isfavor" >\n      <ion-item >\n        <ion-avatar item-start>\n          <img src="../assets/imgs/{{obj.currency.imgUrl}}">\n        </ion-avatar>\n        <h2>{{obj.currency.code}} - {{obj.currency.name}}</h2>\n      </ion-item>\n        <ion-item-options slide="left">\n          <button ion-button color="danger" (click)="deleteCurrency(i)">Delete</button>\n        </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n\n\n\n\n'/*ion-inline-end:"/Users/lennakz/WebRoot/currency/src/pages/currencylist/currencylist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__data_currency_service__["a" /* CurrencyService */]])
    ], CurrencylistPage);
    return CurrencylistPage;
}());

//# sourceMappingURL=currencylist.js.map

/***/ })

},[209]);
//# sourceMappingURL=main.js.map