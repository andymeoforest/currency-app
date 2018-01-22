import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RatesProvider } from '../../providers/rates/rates';
// import { AllCurrenciesPage } from '../all-currencies/all-currencies';
import { Currency } from '../../providers/rates/currency';

@IonicPage()
@Component({
	selector: 'page-currencies',
	templateUrl: 'currencies.html',
})
export class CurrenciesPage {

	selectedCurrency: string;
	allCurrencies: any[];
	currenciesRates: Currency[];
	amount: number;

	constructor(public navCtrl: NavController, public navParams: NavParams, protected ratesProvider: RatesProvider) {
		this.selectedCurrency = "CAD";
		this.currenciesRates = [];
		this.amount = 1;
	}

	ionViewDidLoad() {
		this.ratesProvider.getRates(this.selectedCurrency).subscribe(res => {
			let rates = Object.keys((res as any).rates);
			this.allCurrencies = rates.slice();
			this.allCurrencies.push(this.selectedCurrency);
			rates.forEach(k => {
				this.currenciesRates.push(new Currency(k, (res as any).rates[k]));
			});
		});		
	}

	changeSelectedCurrency(e) {
		this.selectedCurrency = e;
		this.ratesProvider.getRates(this.selectedCurrency).subscribe(res => {
			this.currenciesRates = [];
			Object.keys((res as any).rates).forEach(k => {
				this.currenciesRates.push(new Currency(k, (res as any).rates[k]));
			});
		});
	}

	calculate() {
		this.currenciesRates.forEach(k => {
			k.value = k.value * this.amount;
		});
	}
	

}
