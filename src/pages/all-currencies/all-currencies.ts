import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Currency } from '../data/currency';
import { CurrencylistPage } from '../currencylist/currencylist'

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

  myList;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myList = navParams.get('list').myCurrencyList;
    console.log(this.myList);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllCurrenciesPage');
  }

  addCurrency(index){
      console.log(this.myList[index]);
      this.myList[index].isfavor = true;
  }
  
}
