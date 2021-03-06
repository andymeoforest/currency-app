import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CreateaccountPage } from '../pages/createaccount/createaccount';
import { LoginPage } from '../pages/login/login';
import { LoginwithfacebookPage } from '../pages/loginwithfacebook/loginwithfacebook';
import { LoginwithgmailPage } from '../pages/loginwithgmail/loginwithgmail';
import { ChangethemePage } from '../pages/changetheme/changetheme';
import { RatealertPage } from '../pages/ratealert/ratealert';
import { FeedbackPage } from '../pages/feedback/feedback';
import { SettingsPage } from '../pages/settings/settings';
import { CurrenciesPage } from '../pages/currencies/currencies';
import { SettingsProvider } from './../providers/settings/settings';

import { RatesProvider } from '../providers/rates/rates';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	rootPage: any = HomePage;

	selectedTheme: String;
	baseCurrency: string = 'CAD';
	updateInterval: number = 1000 * 60 * 60 * 24; // 1 day

	pages: Array<{ title: string, component: any }>;

	constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private settings: SettingsProvider, protected ratesProvider: RatesProvider) {
		this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
	
		this.initializeApp();
		// used for an example of ngFor and navigation
		this.pages = [
			{ title: 'Home', component: HomePage },
			{ title: "Create Account", component: CreateaccountPage },
			{ title: "Login with Email", component: LoginPage },
			{ title: "Login with Facebook", component: LoginwithfacebookPage },
			{ title: "Login with Gmail", component: LoginwithgmailPage },
			{ title: "Change Theme", component: ChangethemePage },
			{ title: "Rate Alert", component: RatealertPage },
			{ title: "Give us feedback!", component: FeedbackPage },
			{ title: "Currencies", component: CurrenciesPage },
			{ title: "Settings", component: SettingsPage }
		];
	}

	initializeApp() {
		this.platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			this.statusBar.styleDefault();
			this.splashScreen.hide();
			this.createCurrencies(this.baseCurrency);
			this.updateCurrenciesRates(this.baseCurrency);
		});
	}

	openPage(page) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		this.nav.setRoot(page.component);
	}

	createCurrencies(baseCurrency: string): void {
		this.ratesProvider.createCurrencies(baseCurrency);		
	}
	updateCurrenciesRates(baseCurrency: string): void {
		this.ratesProvider.updateCurrenciesRates(baseCurrency);
		setTimeout(() => { this.ratesProvider.updateCurrenciesRates(baseCurrency) }, this.updateInterval);
	}
}
