import { Component } from '@angular/core';

export class Currency{

  name:string;
  code:string;

  constructor(name:string, rate:number, code:string,isFavor:boolean){
    this.name = name;
    this.code = code;
  }
}


