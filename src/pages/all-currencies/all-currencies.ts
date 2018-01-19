import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CurrencylistPage } from '../currencylist/currencylist';
import { MyCurrency } from '../data/mycurrency';
import { CurrencyService } from '../data/currency.service';

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

  currencyList:MyCurrency[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private currencyService:CurrencyService) {
    
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

  addCurrency(index){
      console.log(this.currencyList[index]);
      this.currencyList[index].isfavor = true;
  }
  
}
