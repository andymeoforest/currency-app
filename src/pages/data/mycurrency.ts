import { Component } from '@angular/core';

export class MyCurrency{

  key:any;
  currency:any;
  isfavor:boolean;
  rate:number;

  constructor(key:string, currency:string,isfavor:boolean,rate:number){
    this.key = key;
    this.currency = currency;
    this.isfavor = isfavor;
    this.rate = rate;
  }
}


