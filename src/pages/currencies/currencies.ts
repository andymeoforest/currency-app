import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RatesProvider } from '../../providers/rates/rates';
import { Currency } from '../../providers/rates/currency';
import { preserveWhitespacesDefault } from '@angular/compiler/src/config';

@IonicPage()
@Component({
	selector: 'page-currencies',
	templateUrl: 'currencies.html',
})
export class CurrenciesPage {

	selectedCurrency: string;
	allCurrencies: Currency[];
	outputCurrencies: Currency[];
	amount: number;

	constructor(public navCtrl: NavController, public navParams: NavParams, protected ratesProvider: RatesProvider) {
		this.selectedCurrency = "CAD";
		this.allCurrencies = [];
		this.outputCurrencies = [];
		this.amount = 1;	
	}

	ionViewDidLoad() {
		this.ratesProvider.getStorageRates().then((allCurrencies) => {
			allCurrencies.forEach(obj => {
				this.allCurrencies.push(new Currency(obj.code, obj.name, obj.value))
			});
			this.allCurrencies[3].setIsFavor(true);
			this.allCurrencies[5].setIsFavor(true);
			this.allCurrencies[31].setIsFavor(true);
			console.log(this.allCurrencies);
			this.showFavorite();
		});				
	}

	changeSelectedCurrency(e) {
		let prevSelectedCurrency = this.selectedCurrency;
		this.selectedCurrency = e;
		let prevBaseObject = this.allCurrencies.find((obj: Currency) => {
			return obj.code === prevSelectedCurrency;
		});
		let baseObject = this.allCurrencies.find((obj: Currency) => {
			return obj.code === e;
		});
		let baseValue = baseObject.value;
		console.log(prevBaseObject.value);
		console.log(baseObject.value);
		
		let outputCurrencies = this.outputCurrencies;
		this.outputCurrencies.forEach((obj: Currency) => {
			obj.setValue(obj.value / baseObject.value);
		});

		
	}

	showAll() {
		// let outputCurrencies = this.allCurrencies.filter(obj => {
		// 	return obj.code !== this.selectedCurrency;
		// });
		this.outputCurrencies = this.allCurrencies;
	}

	showFavorite() {
		let outputCurrencies = this.allCurrencies.filter(obj => {
			return obj.isFavor === true; // && obj.code !== this.selectedCurrency;
		});
		this.outputCurrencies = outputCurrencies;
	}

	calculate() {
		this.outputCurrencies.forEach(k => {
			k.value = k.value * this.amount;
		});
	}
	

}
