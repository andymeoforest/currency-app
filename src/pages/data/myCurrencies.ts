import { Currency } from "./currency";
import { ALLCURRENCIES } from "./allCurrencies";

export class MyCurrencies{

    myCurrencyList:MyCurrency[];
  
    constructor(){
     this.addAllCurrency();
    }

    addAllCurrency(){
        this.myCurrencyList = [];
        ALLCURRENCIES.forEach(element => {
            this.myCurrencyList.push({key:element.code,currency:element,isfavor:false});
        });
    }
    setFavorCurrency(key:string){
        var index = this.myCurrencyList.findIndex(function(obj){return obj.key==key});
        this.myCurrencyList[index].isfavor = true;
    }
    removeFacoverCurrency(key:string){
        var index = this.myCurrencyList.findIndex(function(obj){return obj.key==key});
        this.myCurrencyList[index].isfavor = false;
    }
    sortCurrencyByCode(){
        this.myCurrencyList = this.myCurrencyList.sort(function(a,b){
            if (a.key.toString() < b.key.toString()) return -1;
            if (a.key.toString() > b.key.toString()) return 1;
            return 0;
        });
    } 

}
  class MyCurrency{
        key:string;
        currency:Currency;
        isfavor:boolean;

  }