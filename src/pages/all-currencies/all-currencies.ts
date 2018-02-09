import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RatesProvider } from '../../providers/rates/rates';
import { Currency } from '../../providers/rates/currency';

@IonicPage()
@Component({
	selector: 'page-all-currencies',
	templateUrl: 'all-currencies.html',
})
export class AllCurrenciesPage {

	allCurrencies: Currency[];

	constructor(public navCtrl: NavController, public navParams: NavParams, protected ratesProvider: RatesProvider) {}

	ionViewDidLoad() {
		this.allCurrencies = this.navParams.get('list');
	}

	ionViewWillLeave() {
		this.ratesProvider.setStorageRates(this.allCurrencies);
	}

	editFavorite(index) {
		this.allCurrencies[index].isFavor = !this.allCurrencies[index].isFavor;
	}

}
