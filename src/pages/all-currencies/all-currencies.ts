import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ALLCURRENCIES} from '../data/allCurrencies';
import { Currency } from '../data/currency';

/**
 * Generated class for the AllCurrenciesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-currencies',
  templateUrl: 'all-currencies.html',
})
export class AllCurrenciesPage {

  allCurrency:Currency[] = ALLCURRENCIES;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllCurrenciesPage');
  }

  
}
