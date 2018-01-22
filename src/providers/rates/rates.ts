import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RatesProvider {

	apiUrl: string;

	constructor(protected http: HttpClient) { 
		this.apiUrl = 'http://api.fixer.io/latest';
	}

	getRates(base: string) {
		return this.http.get(this.apiUrl + '?base=' + base);
	}

}
