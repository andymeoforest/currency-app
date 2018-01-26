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
	currenciesRates: Currency[];
	amount: number;

	constructor(public navCtrl: NavController, public navParams: NavParams, protected ratesProvider: RatesProvider) {
		this.selectedCurrency = "CAD";
		this.currenciesRates = [];
		this.amount = 1;
	}

	ionViewDidLoad() {
		this.ratesProvider.getAllCurrencies().then(allCurrencies => {
			this.allCurrencies = allCurrencies;
			this.ratesProvider.getRates().then(rates => {
				allCurrencies.forEach(obj => {
					if (obj.code === this.selectedCurrency) {
						return;
					}
					obj.value = rates[obj.code];
					this.currenciesRates.push(obj);
				});
				this.currenciesRates[3].isFavor = true;
				this.currenciesRates[5].isFavor = true;
			});
			this.showFavorite();
		});
	}

	changeSelectedCurrency(e) {
		this.selectedCurrency = e;
		let baseObject = this.currenciesRates.find(obj => {
			return obj.code === e;
		});
		let baseValue = baseObject.value;
	}

	showAll() {
		this.currenciesRates = [];
		this.currenciesRates = this.allCurrencies;	
	}

	showFavorite() {
		let currenciesRates = this.currenciesRates.filter(obj => {
			return obj.isFavor === true;
		});
		console.log(currenciesRates);
	}

	calculate() {
		this.currenciesRates.forEach(k => {
			k.value = k.value * this.amount;
		});
	}
	

}
