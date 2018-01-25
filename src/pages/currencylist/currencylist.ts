import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Currency } from '../data/currency'; 
import { Pipe, PipeTransform} from '@angular/core';
import {AllCurrenciesPage} from '../all-currencies/all-currencies';
import { MyCurrency } from '../data/mycurrency';
import { CurrencyService } from '../data/currency.service';
import { RatesProvider } from '../../providers/rates/rates';

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
export class CurrencylistPage implements OnInit{
  currencyList:MyCurrency[];
  selectedCurrency:MyCurrency;
  currencyRates:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private currencyService:CurrencyService, private ratesProvider:RatesProvider) {
    this.selectedCurrency = this.currencyService.getCurrency("CAD");
    this.getRates();
  }
  ngOnInit(){
    this.getCurrencyList();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CurrencylistPage');
  }
  getCurrencyList():void{
    this.currencyService.getCurrencyList().subscribe(currencyList => this.currencyList = currencyList); 
  }
  addCurrency(){
    console.log("push");
    this.navCtrl.push(AllCurrenciesPage,{list:this.currencyList});
  }
  getRates(){
    this.ratesProvider.getRates(this.selectedCurrency.key).subscribe(res=>{
      let rates = Object.keys((res as any).rates);
      this.currencyRates = rates.slice();
      console.log(this.currencyRates);
      rates.forEach(k=>{
        console.log(k);
        console.log((res as any).rates[k]);
        this.currencyService.setCurrencyRate(k,(res as any).rates[k]);
      })
    })
  }
  deleteCurrency(index){
    console.log(index);
    this.currencyList[index].isfavor = false;
  }

  selectCurrency(index){
    this.selectedCurrency = this.currencyList[index];
    this.getRates();
  }

}
