import { Component } from '@angular/core';

export class Currency {

	public code: string;
	public name: string;
	public rates: {};
	public isFavor: boolean;

	constructor(code: string, name: string, rates: {}) {
		this.code = code;
		this.name = name;
		this.rates = rates;
		this.isFavor = false;
	}

	public setIsFavor(value: boolean): void {
		this.isFavor = value;
	}

	getIsFavor(): boolean {
		return this.isFavor;
	}

	public getFlagUrl(): string {
		return '/src/assets/imgs/flags/' + this.code + '.png';
	}
}