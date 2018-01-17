import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreateaccountPage } from '../pages/createaccount/createaccount';
import { LoginPage } from '../pages/login/login';
import { LoginwithfacebookPage } from '../pages/loginwithfacebook/loginwithfacebook';
import { LoginwithgmailPage } from '../pages/loginwithgmail/loginwithgmail';
import { ChangethemePage } from '../pages/changetheme/changetheme';
import { RatealertPage } from '../pages/ratealert/ratealert';
import { FeedbackPage } from '../pages/feedback/feedback';
import {SettingsPage} from '../pages/settings/settings';
import {CurrencylistPage} from '../pages/currencylist/currencylist';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AllCurrenciesPage } from '../pages/all-currencies/all-currencies';

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
    AllCurrenciesPage

  ],
  imports: [
    BrowserModule,
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
    AllCurrenciesPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
