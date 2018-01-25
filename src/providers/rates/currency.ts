import { Component } from '@angular/core';

export class Currency {

	// name: string;
	code: string;
	// imgUrl: string;
	value: number;
	imgUrl: string;

	constructor(code: string, value: number) {
		// this.name = name;
		this.code = code;
		// this.imgUrl = imgUrl;
		this.value = value;
	}
}


