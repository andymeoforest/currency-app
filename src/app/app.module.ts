import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreateaccountPage } from '../pages/createaccount/createaccount';
import { LoginPage } from '../pages/login/login';
import { LoginwithfacebookPage } from '../pages/loginwithfacebook/loginwithfacebook';
import { LoginwithgmailPage } from '../pages/loginwithgmail/loginwithgmail';
import { ChangethemePage } from '../pages/changetheme/changetheme';
import { RatealertPage } from '../pages/ratealert/ratealert';
import { FeedbackPage } from '../pages/feedback/feedback';
import { SettingsPage } from '../pages/settings/settings';
import { CurrencylistPage } from '../pages/currencylist/currencylist';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AllCurrenciesPage } from '../pages/all-currencies/all-currencies';
import { CurrenciesPage } from '../pages/currencies/currencies';

import { RatesProvider } from '../providers/rates/rates';
import { CurrencyService } from '../pages/data/currency.service';

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		CreateaccountPage,
		LoginPage,
		LoginwithfacebookPage,
		LoginwithgmailPage,
		ChangethemePage,
		ChangethemePage,
		RatealertPage,
		FeedbackPage,
		SettingsPage,
		CurrencylistPage,
		AllCurrenciesPage,
		CurrenciesPage
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		IonicModule.forRoot(MyApp),
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		CreateaccountPage,
		LoginPage,
		LoginwithfacebookPage,
		LoginwithgmailPage,
		ChangethemePage,
		RatealertPage,
		FeedbackPage,
		SettingsPage,
		CurrencylistPage,
		AllCurrenciesPage,
		CurrenciesPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		RatesProvider,
		CurrencyService
	]
})
export class AppModule { }
