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
	showingFavorite: boolean;

	constructor(public navCtrl: NavController, public navParams: NavParams, protected ratesProvider: RatesProvider) {
		this.selectedCurrency = "CAD";
		this.allCurrencies = [];
		this.outputCurrencies = [];
		this.amount = 1;
		this.showingFavorite = true;
	}

	ionViewDidLoad() {
		this.ratesProvider.getStorageRates().then((allCurrencies) => {
			allCurrencies.forEach(obj => {
				this.allCurrencies.push(new Currency(obj.code, obj.name, obj.rates))
			});
			this.allCurrencies[3].setIsFavor(true);
			this.allCurrencies[5].setIsFavor(true);
			this.allCurrencies[31].setIsFavor(true);
			this.showFavorite();
		});				
	}

	changeSelectedCurrency(e) {
		this.selectedCurrency = e;
		let outputCurrencies = this.allCurrencies.filter(obj => {
			if (this.showingFavorite)
				return obj.isFavor === true && obj.code !== this.selectedCurrency;
			else
				return obj.code !== this.selectedCurrency;
		});
		this.outputCurrencies = outputCurrencies;
	}

	showAll() {
		this.showingFavorite = false;
		let outputCurrencies = this.allCurrencies.filter(obj => {
			return obj.code !== this.selectedCurrency;
		});
		this.outputCurrencies = outputCurrencies;
	}

	showFavorite() {
		this.showingFavorite = true;
		let outputCurrencies = this.allCurrencies.filter(obj => {
			return obj.isFavor === true && obj.code !== this.selectedCurrency;
		});
		this.outputCurrencies = outputCurrencies;
	}

	calculate() {
		this.outputCurrencies.forEach(k => {
			k.rates[this.selectedCurrency] = k.rates[this.selectedCurrency] / this.amount;
		});
	}
	

}
