import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ALLCURRENCIES } from '../data/allCurrencies';
import { Currency } from '../data/currency'; 
import { Pipe, PipeTransform} from '@angular/core';
import {AllCurrenciesPage} from '../all-currencies/all-currencies';
import { MyCurrencies } from '../data/myCurrencies';
/**
 * Generated class for the CurrencylistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-currencylist',
  templateUrl: 'currencylist.html',
})
export class CurrencylistPage {
  myCurrencies  = new MyCurrencies();
  myList;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myCurrencies.sortCurrencyByCode();
    this.myCurrencies.myCurrencyList;
    this.myCurrencies.setFavorCurrency("CAD");
    this.myCurrencies.setFavorCurrency("USD");
    this.myCurrencies.setFavorCurrency("EUR");
    console.log(this.myCurrencies);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurrencylistPage');
  }

  addCurrency(){
    console.log("push");
    this.navCtrl.push(AllCurrenciesPage,{list:this.myCurrencies});
  }
  
  deleteCurrency(index){
    console.log(index);
    this.myCurrencies.myCurrencyList[index].isfavor = false;
  }
  

}
