webpackJsonp([6],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencylistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_currencies_all_currencies__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_currency_service__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rates_rates__ = __webpack_require__(54);
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
    function CurrencylistPage(navCtrl, navParams, currencyService, ratesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.currencyService = currencyService;
        this.ratesProvider = ratesProvider;
        this.selectedCurrency = this.currencyService.getCurrency("CAD");
        this.getRates();
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
    CurrencylistPage.prototype.getRates = function () {
        var _this = this;
        this.ratesProvider.getRates(this.selectedCurrency.key).subscribe(function (res) {
            var rates = Object.keys(res.rates);
            _this.currencyRates = rates.slice();
            console.log(_this.currencyRates);
            rates.forEach(function (k) {
                console.log(k);
                console.log(res.rates[k]);
                _this.currencyService.setCurrencyRate(k, res.rates[k]);
            });
        });
    };
    CurrencylistPage.prototype.deleteCurrency = function (index) {
        console.log(index);
        this.currencyList[index].isfavor = false;
    };
    CurrencylistPage.prototype.selectCurrency = function (index) {
        this.selectedCurrency = this.currencyList[index];
        this.getRates();
    };
    CurrencylistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-currencylist',template:/*ion-inline-start:"/Users/lennakz/WebRoot/currency-app/src/pages/currencylist/currencylist.html"*/'<ion-header >\n  <ion-navbar>\n    <div style="float:left">\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n    </div>\n\n    <div style="float:right">\n        <button ion-button icon-right (click) = "addCurrency()">\n            <ion-icon name="add"></ion-icon>\n          </button>\n    </div>\n\n    <div>\n        <ion-title text-center>Currency List</ion-title>\n    </div>\n\n    <!-- Float the icon right -->\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list  *ngFor = "let obj of currencyList; let i = index;" >\n    <ion-item-sliding *ngIf = "obj.isfavor" >\n      <ion-item (click)="selectCurrency(i)">\n        <ion-avatar item-start>\n          <img src="../assets/imgs/{{obj.currency.imgUrl}}">\n        </ion-avatar>\n        <h2>{{obj.currency.code}} - {{obj.currency.name}}  <div style="float:right">{{selectedCurrency.currency.code}} to {{obj.currency.code}} = 1:{{obj.rate}}</div></h2>\n      </ion-item>\n        <ion-item-options slide="left">\n          <button ion-button color="danger" (click)="deleteCurrency(i)">Delete</button>\n        </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n\n\n\n\n'/*ion-inline-end:"/Users/lennakz/WebRoot/currency-app/src/pages/currencylist/currencylist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__data_currency_service__["a" /* CurrencyService */], __WEBPACK_IMPORTED_MODULE_4__providers_rates_rates__["a" /* RatesProvider */]])
    ], CurrencylistPage);
    return CurrencylistPage;
}());

//# sourceMappingURL=currencylist.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencylistPageModule", function() { return CurrencylistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__currencylist__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CurrencylistPageModule = (function () {
    function CurrencylistPageModule() {
    }
    CurrencylistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__currencylist__["a" /* CurrencylistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__currencylist__["a" /* CurrencylistPage */]),
            ],
        })
    ], CurrencylistPageModule);
    return CurrencylistPageModule;
}());

//# sourceMappingURL=currencylist.module.js.map

/***/ })

});
//# sourceMappingURL=6.js.map