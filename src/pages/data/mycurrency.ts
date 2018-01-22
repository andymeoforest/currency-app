import { Component } from '@angular/core';

export class MyCurrency{

  key:any;
  currency:any;
  isfavor:boolean;

  constructor(key:string, currency:string,isfavor:boolean){
    this.key = key;
    this.currency = currency;
    this.isfavor = isfavor;
  }
}


