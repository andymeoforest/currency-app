import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RatesProvider } from '../../providers/rates/rates';
import { Currency } from '../../providers/rates/currency';

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
		this.outputCurrencies = [];
		this.amount = 1;
	}

	ionViewDidLoad() {
		this.ratesProvider.getStorageRates().then((allCurrencies: Currency[]) => {
			allCurrencies[3].isFavor = true;
			allCurrencies[5].isFavor = true;
			this.allCurrencies = allCurrencies;
			this.showFavorite();
		});
	}

	changeSelectedCurrency(e) {
		this.selectedCurrency = e;
		let baseObject = this.outputCurrencies.find(obj => {
			return obj.code === e;
		});
		let baseValue = baseObject.value;
	}

	showAll() {
		let outputCurrencies = this.allCurrencies.filter(obj => {
			return obj.code !== this.selectedCurrency;
		});
		this.outputCurrencies = outputCurrencies;
	}

	showFavorite() {
		let outputCurrencies = this.allCurrencies.filter(obj => {
			return obj.isFavor === true && obj.code !== this.selectedCurrency;
		});
		this.outputCurrencies = outputCurrencies;
	}

	calculate() {
		this.outputCurrencies.forEach(k => {
			k.value = k.value * this.amount;
		});
	}
	

}
