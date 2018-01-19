import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Currency } from '../data/currency'; 
import { Pipe, PipeTransform} from '@angular/core';
import {AllCurrenciesPage} from '../all-currencies/all-currencies';
import { MyCurrency } from '../data/mycurrency';
import { CurrencyService } from '../data/currency.service';

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
  addCurrency(){
    console.log("push");
    this.navCtrl.push(AllCurrenciesPage,{list:this.currencyList});
  }
  
  deleteCurrency(index){
    console.log(index);
    this.currencyList[index].isfavor = false;
  }
  

}
