import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Currency } from './currency';
import { CurrenciesPage } from '../../pages/currencies/currencies';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RatesProvider {

	public apiRatesUrl: string;
	public apiCountriesUrl: string;
	public apiCurrencyNamesUrl: string;

	constructor(protected http: HttpClient, protected storage: Storage) { 
		this.apiRatesUrl = 'http://api.fixer.io/latest?base=';
		this.apiCountriesUrl = 'https://restcountries.eu/rest/v2/currency/';
		this.apiCurrencyNamesUrl = 'https://openexchangerates.org/api/currencies.json';
	}

	public callRatesApi(baseCurrency: string): Observable<any> {
		return this.http.get(this.apiRatesUrl + baseCurrency);
	}

	// run once on first load of app
	public createCurrencies(baseCurrency: string): void {
		this.callRatesApi(baseCurrency).subscribe((res: any) => {
			let currencyList: Currency[] = [];
			let rates = res.rates;

			this.http.get(this.apiCurrencyNamesUrl).subscribe((res: any) => {
				Object.keys(rates).forEach(code => {
					currencyList.push(new Currency(code, res[code], 0));			
				});
				currencyList.push(new Currency(baseCurrency, res[baseCurrency], 0));
				this.storage.set('createdCurrencies', currencyList);
			});			
		});
	}

	// run every day to update rates from api
	public updateCurrenciesRates(baseCurrency: string): void {
		this.callRatesApi(baseCurrency).subscribe((res: any) => {
			this.storage.get('createdCurrencies').then(array => {
				array.forEach(obj => {
					if (obj.code === baseCurrency) {
						obj.value = 1;
						return;
					}
					obj.value = res.rates[obj.code];
				});
				this.storage.set('updatedCurrencies', array);
			});
		});
	}

	public getRates(base: string): Observable<any> {
		return this.http.get(this.apiRatesUrl + base);
	}

	public getStorageRates(): Promise<any> {
		return this.storage.get('updatedCurrencies');
	}


}
