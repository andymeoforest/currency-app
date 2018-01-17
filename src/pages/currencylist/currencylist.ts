import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ALLCURRENCIES } from '../data/allCurrencies';
import { Currency } from '../data/currency'; 
import { Pipe, PipeTransform} from '@angular/core';
import {AllCurrenciesPage} from '../all-currencies/all-currencies';
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

  myList;
  allCurrencies:Currency [] = ALLCURRENCIES;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.myList=[
      this.allCurrencies[0],
      this.allCurrencies[1],
        this.allCurrencies[2]
    ];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CurrencylistPage');
  }

  addCurrency(){
    console.log("push");
    this.navCtrl.push(AllCurrenciesPage);
  }
  
  deleteCurrency(index){
    console.log(index);
    this.myList.splice(index,1);
  }
  

}
