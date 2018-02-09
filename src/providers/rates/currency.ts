import { Component } from '@angular/core';

export class Currency {

	public code: string;
	public name: string;
	public rates: {};
	public isFavor: boolean;

	constructor(code: string, name: string, rates: {}, isFavor: boolean) {
		this.code = code;
		this.name = name;
		this.rates = rates;
		this.isFavor = isFavor;
	}

	public setIsFavor(value: boolean): void {
		this.isFavor = value;
	}

	getIsFavor(): boolean {
		return this.isFavor;
	}

	public getFlagUrl(): string {
		return 'assets/imgs/flags/' + this.code.toLowerCase() + '.png';
	}
}