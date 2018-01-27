import { Component } from '@angular/core';

export class Currency {

	public code: string;
	public name: string;
	public value: number;
	public isFavor: boolean;

	constructor(code: string, name: string, value: number) {
		this.code = code;
		this.name = name;
		this.value = value;
		this.isFavor = false;
	}

	public setValue(value: number): void {
		this.value = value;
	}

	public getValue(): number {
		return this.value;
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

	public recalculate(factor: number): void {
		this.value = this.value / factor;
	}
}