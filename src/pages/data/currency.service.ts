import { Currency } from "./currency";
import { ALLCURRENCIES } from "./allCurrencies";
import { MyCurrency } from "./mycurrency";
import { Injectable,OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/Observable/of";

@Injectable()
export class CurrencyService implements OnInit{

    currencyList: MyCurrency[];
  
    constructor(){
        this.currencyList = [];
        this.addAllCurrency();
		this.sortCurrencyByCode();

    }

    
    ngOnInit(){
        
    }

    //load all currency information
    addAllCurrency(){
        this.currencyList = [];
        ALLCURRENCIES.forEach(element => {
            this.currencyList.push({
				key: element.code,
				currency: element,
                isfavor: false,
                rate:1
        });
        });
    }
    
    setFavorCurrency(key:string){
        var index = this.currencyList.findIndex(function(obj){return obj.key==key});
        this.currencyList[index].isfavor = true;
    }
    removeFacoverCurrency(key:string){
        var index = this.currencyList.findIndex(function(obj){return obj.key==key});
        this.currencyList[index].isfavor = false;
    }
    setCurrencyRate(key:string,rate:number){
        try{
            var index = this.currencyList.findIndex(function(obj){return obj.key==key});
            this.currencyList[index].rate = rate;
        }catch(error){

        }
        
    }
    getCurrency(key:string):MyCurrency{
        var index = this.currencyList.findIndex(function(obj){return obj.key==key});
        return this.currencyList[index];
    }
    sortCurrencyByCode(){
        this.currencyList = this.currencyList.sort(function(a,b){
            if (a.key.toString() < b.key.toString()) return -1;
            if (a.key.toString() > b.key.toString()) return 1;
            return 0;
        });
    } 

    getCurrencyList():Observable<MyCurrency[]>{
        return of(this.currencyList);
    }

}
