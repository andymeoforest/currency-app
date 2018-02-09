webpackJsonp([11],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsProvider = (function () {
    function SettingsProvider() {
        this.theme = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["BehaviorSubject"]('deep-ocean-theme');
    }
    SettingsProvider.prototype.setActiveTheme = function (val) {
        this.theme.next(val);
    };
    SettingsProvider.prototype.getActiveTheme = function () {
        return this.theme.asObservable();
    };
    SettingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SettingsProvider);
    return SettingsProvider;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangethemePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__ = __webpack_require__(117);
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
    function ChangethemePage(navCtrl, navParams, settings) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.settings = settings;
        this.showTheme = 0;
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
    }
    ChangethemePage.prototype.setOceanTheme = function () {
        this.settings.setActiveTheme('deep-ocean-theme');
        this.showTheme = 0;
    };
    ChangethemePage.prototype.setSunnyTheme = function () {
        this.settings.setActiveTheme('sunny-day-theme');
        this.showTheme = 1;
    };
    ChangethemePage.prototype.setMidnightTheme = function () {
        this.settings.setActiveTheme('midnight-at-last-theme');
        this.showTheme = 2;
    };
    ChangethemePage.prototype.setPastelTheme = function () {
        this.settings.setActiveTheme('pastel-sunset-theme');
        this.showTheme = 3;
    };
    ChangethemePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-changetheme',template:/*ion-inline-start:"/Users/lennakz/WebRoot/currency-app/src/pages/changetheme/changetheme.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Change Theme</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content card-background-page>\n\n    <ion-card id="ion-card-ocean" (click)="setOceanTheme()">\n        <img src="../../assets/imgs/themes/ocean.jpg"/>\n        <div id="card-title-ocean">Deep Ocean (default)</div>\n        <div *ngIf="showTheme==0" id="card-subtitle-ocean"> <ion-icon name="checkmark"></ion-icon></div>\n      </ion-card>\n    \n      <ion-card id="ion-card-sunny" (click)="setSunnyTheme()">\n        <img src="../../assets/imgs/themes/sunny.jpg"/>\n        <div id="card-title-sunny">Sunny Days</div>\n        <div *ngIf="showTheme==1" id="card-subtitle-sunny"> <ion-icon name="checkmark"></ion-icon></div>\n      </ion-card>\n    \n      <ion-card id="ion-card-midnight" (click)="setMidnightTheme()">\n        <img src="../../assets/imgs/themes/midnight.jpg"/>\n        <div id="card-title-midnight">Midnight at Last</div>\n        <div *ngIf="showTheme==2" id="card-subtitle-midnight"> <ion-icon name="checkmark"></ion-icon></div>\n      </ion-card>\n    \n      <ion-card id="ion-card-pastel" (click)="setPastelTheme()">\n        <img src="../../assets/imgs/themes/pastel.jpg"/>\n        <div id="card-title-pastel">Pastel Sunset</div>\n        <div *ngIf="showTheme==3" id="card-subtitle-pastel"> <ion-icon name="checkmark"></ion-icon></div>\n      </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lennakz/WebRoot/currency-app/src/pages/changetheme/changetheme.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_settings_settings__["a" /* SettingsProvider */]])
    ], ChangethemePage);
    return ChangethemePage;
}());

//# sourceMappingURL=changetheme.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateaccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
            selector: 'page-createaccount',template:/*ion-inline-start:"/Users/lennakz/WebRoot/currency-app/src/pages/createaccount/createaccount.html"*/'<ion-header >\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Create Account</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lennakz/WebRoot/currency-app/src/pages/createaccount/createaccount.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CreateaccountPage);
    return CreateaccountPage;
}());

//# sourceMappingURL=createaccount.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrenciesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rates_rates__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rates_currency__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__all_currencies_all_currencies__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CurrenciesPage = (function () {
    function CurrenciesPage(navCtrl, navParams, ratesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ratesProvider = ratesProvider;
        this.selectedCurrency = "CAD";
        this.allCurrencies = [];
        this.outputCurrencies = [];
        this.amount = 1;
        this.showingFavorite = true;
    }
    CurrenciesPage.prototype.ionViewDidLoad = function () {
    };
    CurrenciesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.allCurrencies = [];
        this.ratesProvider.getStorageRates().then(function (allCurrencies) {
            allCurrencies.forEach(function (obj) {
                _this.allCurrencies.push(new __WEBPACK_IMPORTED_MODULE_3__providers_rates_currency__["a" /* Currency */](obj.code, obj.name, obj.rates, obj.isFavor));
            });
            _this.showFavorite();
        });
    };
    CurrenciesPage.prototype.changeSelectedCurrency = function (e) {
        var _this = this;
        this.selectedCurrency = e;
        var outputCurrencies = this.allCurrencies.filter(function (obj) {
            if (_this.showingFavorite)
                return obj.isFavor === true && obj.code !== _this.selectedCurrency;
            else
                return obj.code !== _this.selectedCurrency;
        });
        this.outputCurrencies = outputCurrencies;
    };
    CurrenciesPage.prototype.showAll = function () {
        var _this = this;
        this.showingFavorite = false;
        var outputCurrencies = this.allCurrencies.filter(function (obj) {
            return obj.code !== _this.selectedCurrency;
        });
        this.outputCurrencies = outputCurrencies;
    };
    CurrenciesPage.prototype.showFavorite = function () {
        var _this = this;
        this.showingFavorite = true;
        var outputCurrencies = this.allCurrencies.filter(function (obj) {
            return obj.isFavor === true && obj.code !== _this.selectedCurrency;
        });
        this.outputCurrencies = outputCurrencies;
    };
    CurrenciesPage.prototype.editFavoriteCurrencies = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__all_currencies_all_currencies__["a" /* AllCurrenciesPage */], { list: this.allCurrencies });
    };
    CurrenciesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-currencies',template:/*ion-inline-start:"/Users/lennakz/WebRoot/currency-app/src/pages/currencies/currencies.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title text-center>Currencies</ion-title>\n		<ion-buttons end>\n			<button ion-button icon-only (click)="editFavoriteCurrencies()">\n			  <ion-icon name="options"></ion-icon>\n			</button>\n		  </ion-buttons>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-card>\n		<ion-list inset>\n			<ion-item>\n				<ion-select item-start (ionChange)="changeSelectedCurrency($event)">\n					<ion-option *ngFor="let cur of allCurrencies" value="{{cur.code}}" [selected]="cur.code == selectedCurrency">{{cur.name}}</ion-option>\n				</ion-select>\n				<ion-input item-end [(ngModel)]="amount" name="amount" type="number" value="{{amount}}"></ion-input>\n			</ion-item>\n			<ion-item>\n				<button ion-button (click)="showAll()">Show All</button>\n				<button ion-button (click)="showFavorite()">Show Favorite</button>\n			</ion-item>\n		</ion-list>\n	</ion-card>\n\n	<div *ngFor="let cur of outputCurrencies" (click)="changeSelectedCurrency(cur.code)">\n		<ion-card>\n			<ion-list>\n				<ion-item>\n					<ion-label color="primary">{{ cur.name }}</ion-label>\n					<div item-content>{{ amount * (1 / cur.rates[selectedCurrency]) | number:\'1.2-2\' }}</div>\n				</ion-item>\n			</ion-list>\n		</ion-card>\n	</div>\n\n\n</ion-content>'/*ion-inline-end:"/Users/lennakz/WebRoot/currency-app/src/pages/currencies/currencies.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_rates_rates__["a" /* RatesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_rates_rates__["a" /* RatesProvider */]) === "function" && _c || Object])
    ], CurrenciesPage);
    return CurrenciesPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=currencies.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
            selector: 'page-feedback',template:/*ion-inline-start:"/Users/lennakz/WebRoot/currency-app/src/pages/feedback/feedback.html"*/'<ion-header >\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Give Feedback</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lennakz/WebRoot/currency-app/src/pages/feedback/feedback.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FeedbackPage);
    return FeedbackPage;
}());

//# sourceMappingURL=feedback.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
            selector: 'page-login',template:/*ion-inline-start:"/Users/lennakz/WebRoot/currency-app/src/pages/login/login.html"*/'<ion-header >\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Login with email</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lennakz/WebRoot/currency-app/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginwithfacebookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
            selector: 'page-loginwithfacebook',template:/*ion-inline-start:"/Users/lennakz/WebRoot/currency-app/src/pages/loginwithfacebook/loginwithfacebook.html"*/'<ion-header >\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Login with Facebook</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lennakz/WebRoot/currency-app/src/pages/loginwithfacebook/loginwithfacebook.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginwithfacebookPage);
    return LoginwithfacebookPage;
}());

//# sourceMappingURL=loginwithfacebook.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginwithgmailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
            selector: 'page-loginwithgmail',template:/*ion-inline-start:"/Users/lennakz/WebRoot/currency-app/src/pages/loginwithgmail/loginwithgmail.html"*/'<ion-header >\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Login with Gmail</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lennakz/WebRoot/currency-app/src/pages/loginwithgmail/loginwithgmail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginwithgmailPage);
    return LoginwithgmailPage;
}());

//# sourceMappingURL=loginwithgmail.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatealertPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
            selector: 'page-ratealert',template:/*ion-inline-start:"/Users/lennakz/WebRoot/currency-app/src/pages/ratealert/ratealert.html"*/'<ion-header >\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Rate Alert</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lennakz/WebRoot/currency-app/src/pages/ratealert/ratealert.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RatealertPage);
    return RatealertPage;
}());

//# sourceMappingURL=ratealert.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
            selector: 'page-settings',template:/*ion-inline-start:"/Users/lennakz/WebRoot/currency-app/src/pages/settings/settings.html"*/'<ion-header >\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/lennakz/WebRoot/currency-app/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 174:
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
webpackEmptyAsyncContext.id = 174;

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/all-currencies/all-currencies.module": [
		696,
		10
	],
	"../pages/changetheme/changetheme.module": [
		697,
		9
	],
	"../pages/createaccount/createaccount.module": [
		698,
		8
	],
	"../pages/currencies/currencies.module": [
		699,
		7
	],
	"../pages/currencylist/currencylist.module": [
		700,
		6
	],
	"../pages/feedback/feedback.module": [
		701,
		5
	],
	"../pages/login/login.module": [
		702,
		4
	],
	"../pages/loginwithfacebook/loginwithfacebook.module": [
		703,
		3
	],
	"../pages/loginwithgmail/loginwithgmail.module": [
		704,
		2
	],
	"../pages/ratealert/ratealert.module": [
		705,
		1
	],
	"../pages/settings/settings.module": [
		706,
		0
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
webpackAsyncContext.id = 218;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__allCurrencies__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable_of__ = __webpack_require__(671);
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
        this.currencyList = [];
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
            _this.currencyList.push({
                key: element.code,
                currency: element,
                isfavor: false,
                rate: 1
            });
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
    CurrencyService.prototype.setCurrencyRate = function (key, rate) {
        try {
            var index = this.currencyList.findIndex(function (obj) { return obj.key == key; });
            this.currencyList[index].rate = rate;
        }
        catch (error) {
        }
    };
    CurrencyService.prototype.getCurrency = function (key) {
        var index = this.currencyList.findIndex(function (obj) { return obj.key == key; });
        return this.currencyList[index];
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

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/lennakz/WebRoot/currency-app/src/pages/home/home.html"*/'<ion-header >\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>Currency</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <!--- Do not delete button. Testing the navigation. -->\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/Users/lennakz/WebRoot/currency-app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(364);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_createaccount_createaccount__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_loginwithfacebook_loginwithfacebook__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_loginwithgmail_loginwithgmail__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_changetheme_changetheme__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_ratealert_ratealert__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_feedback_feedback__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_all_currencies_all_currencies__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_currencies_currencies__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_rates_rates__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_data_currency_service__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_settings_settings__ = __webpack_require__(117);
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
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_createaccount_createaccount__["a" /* CreateaccountPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_loginwithfacebook_loginwithfacebook__["a" /* LoginwithfacebookPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_loginwithgmail_loginwithgmail__["a" /* LoginwithgmailPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_changetheme_changetheme__["a" /* ChangethemePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_changetheme_changetheme__["a" /* ChangethemePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_ratealert_ratealert__["a" /* RatealertPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_all_currencies_all_currencies__["a" /* AllCurrenciesPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_currencies_currencies__["a" /* CurrenciesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
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
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_createaccount_createaccount__["a" /* CreateaccountPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_loginwithfacebook_loginwithfacebook__["a" /* LoginwithfacebookPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_loginwithgmail_loginwithgmail__["a" /* LoginwithgmailPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_changetheme_changetheme__["a" /* ChangethemePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_ratealert_ratealert__["a" /* RatealertPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_feedback_feedback__["a" /* FeedbackPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_all_currencies_all_currencies__["a" /* AllCurrenciesPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_currencies_currencies__["a" /* CurrenciesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_21__providers_settings_settings__["a" /* SettingsProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_rates_rates__["a" /* RatesProvider */],
                __WEBPACK_IMPORTED_MODULE_20__pages_data_currency_service__["a" /* CurrencyService */]
            ],
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(222);
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
    function RatesProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        this.apiRatesUrl = 'http://api.fixer.io/latest?base=';
        this.apiCountriesUrl = 'https://restcountries.eu/rest/v2/currency/';
        this.apiCurrencyNamesUrl = 'https://openexchangerates.org/api/currencies.json';
    }
    RatesProvider.prototype.callRatesApi = function (baseCurrency) {
        return this.http.get(this.apiRatesUrl + baseCurrency);
    };
    // run once on first load of app
    RatesProvider.prototype.createCurrencies = function (baseCurrency) {
        var _this = this;
        this.callRatesApi(baseCurrency).subscribe(function (res) {
            var currencyList = [];
            var rates = res.rates;
            _this.http.get(_this.apiCurrencyNamesUrl).subscribe(function (res) {
                Object.keys(rates).forEach(function (code) {
                    currencyList.push({ code: code, name: res[code], rates: [], isFavor: false });
                });
                currencyList.push({ code: baseCurrency, name: res[baseCurrency], rates: [], isFavor: false });
                _this.storage.set('createdCurrencies', currencyList);
            });
        });
    };
    // run every day to update rates from api
    RatesProvider.prototype.updateCurrenciesRates = function (baseCurrency) {
        var _this = this;
        this.callRatesApi(baseCurrency).subscribe(function (res) {
            _this.storage.get('createdCurrencies').then(function (array) {
                var ratesArray = [];
                array.forEach(function (obj) {
                    if (obj.code === baseCurrency) {
                        obj.rates = res.rates;
                    }
                    else {
                        var rates_1 = Object.assign({}, res.rates);
                        rates_1['CAD'] = 1;
                        Object.keys(rates_1).forEach(function (k) {
                            rates_1[k] = Math.round((rates_1[k] / res.rates[obj.code]) * 10000) / 10000;
                        });
                        obj.rates = rates_1;
                    }
                    ratesArray.push(obj);
                });
                _this.storage.set('updatedCurrencies', array);
            });
        });
    };
    RatesProvider.prototype.getRates = function (base) {
        return this.http.get(this.apiRatesUrl + base);
    };
    RatesProvider.prototype.getStorageRates = function () {
        return this.storage.get('updatedCurrencies');
    };
    RatesProvider.prototype.setStorageRates = function (rates) {
        this.storage.set('updatedCurrencies', rates);
    };
    RatesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], RatesProvider);
    return RatesProvider;
}());

//# sourceMappingURL=rates.js.map

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Currency; });
var Currency = (function () {
    function Currency(code, name, rates, isFavor) {
        this.code = code;
        this.name = name;
        this.rates = rates;
        this.isFavor = isFavor;
    }
    Currency.prototype.setIsFavor = function (value) {
        this.isFavor = value;
    };
    Currency.prototype.getIsFavor = function () {
        return this.isFavor;
    };
    Currency.prototype.getFlagUrl = function () {
        return 'assets/imgs/flags/' + this.code.toLowerCase() + '.png';
    };
    return Currency;
}());

//# sourceMappingURL=currency.js.map

/***/ }),

/***/ 670:
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
        name: 'Brazilian Real',
        code: 'BRL',
        imgUrl: ''
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

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_createaccount_createaccount__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_loginwithfacebook_loginwithfacebook__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_loginwithgmail_loginwithgmail__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_changetheme_changetheme__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_ratealert_ratealert__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_feedback_feedback__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_settings_settings__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_currencies_currencies__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_settings_settings__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_rates_rates__ = __webpack_require__(54);
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
    function MyApp(platform, statusBar, splashScreen, settings, ratesProvider) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.settings = settings;
        this.ratesProvider = ratesProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.baseCurrency = 'CAD';
        this.updateInterval = 1000 * 60 * 60 * 24; // 1 day
        this.settings.getActiveTheme().subscribe(function (val) { return _this.selectedTheme = val; });
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
            { title: "Currencies", component: __WEBPACK_IMPORTED_MODULE_13__pages_currencies_currencies__["a" /* CurrenciesPage */] },
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
            _this.createCurrencies(_this.baseCurrency);
            _this.updateCurrenciesRates(_this.baseCurrency);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.createCurrencies = function (baseCurrency) {
        this.ratesProvider.createCurrencies(baseCurrency);
    };
    MyApp.prototype.updateCurrenciesRates = function (baseCurrency) {
        var _this = this;
        this.ratesProvider.updateCurrenciesRates(baseCurrency);
        setTimeout(function () { _this.ratesProvider.updateCurrenciesRates(baseCurrency); }, this.updateInterval);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/lennakz/WebRoot/currency-app/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header >\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content id="side-menu">\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false" [class]="selectedTheme"></ion-nav>'/*ion-inline-end:"/Users/lennakz/WebRoot/currency-app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_14__providers_settings_settings__["a" /* SettingsProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__providers_settings_settings__["a" /* SettingsProvider */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_15__providers_rates_rates__["a" /* RatesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_15__providers_rates_rates__["a" /* RatesProvider */]) === "function" && _f || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllCurrenciesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rates_rates__ = __webpack_require__(54);
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
    function AllCurrenciesPage(navCtrl, navParams, ratesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ratesProvider = ratesProvider;
    }
    AllCurrenciesPage.prototype.ionViewDidLoad = function () {
        this.allCurrencies = this.navParams.get('list');
    };
    AllCurrenciesPage.prototype.ionViewWillLeave = function () {
        this.ratesProvider.setStorageRates(this.allCurrencies);
    };
    AllCurrenciesPage.prototype.editFavorite = function (index) {
        this.allCurrencies[index].isFavor = !this.allCurrencies[index].isFavor;
    };
    AllCurrenciesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-all-currencies',template:/*ion-inline-start:"/Users/lennakz/WebRoot/currency-app/src/pages/all-currencies/all-currencies.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title text-center>Currency List</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-list>\n		<button ion-item detail-none *ngFor="let obj of allCurrencies; let i = index;" (click)="editFavorite(i)">\n			<ion-thumbnail item-start>\n				<img src="{{obj.getFlagUrl()}}">\n			</ion-thumbnail>\n			<h2>{{ obj.name }}</h2>\n			<ion-icon *ngIf="obj.isFavor" name="checkmark" item-end></ion-icon>\n		</button>\n	</ion-list>\n</ion-content>'/*ion-inline-end:"/Users/lennakz/WebRoot/currency-app/src/pages/all-currencies/all-currencies.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_rates_rates__["a" /* RatesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_rates_rates__["a" /* RatesProvider */]) === "function" && _c || Object])
    ], AllCurrenciesPage);
    return AllCurrenciesPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=all-currencies.js.map

/***/ })

},[359]);
//# sourceMappingURL=main.js.map