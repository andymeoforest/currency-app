import { Component } from '@angular/core';

export class Currency{

  name:string;
  code:string;
  imgUrl:string;

  constructor(name:string, code:string,imgUrl:string){
    this.name = name;
    this.code = code;
    this.imgUrl = imgUrl;
  }
}


