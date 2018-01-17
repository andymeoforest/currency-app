import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CurrencylistPage } from './currencylist';

@NgModule({
  declarations: [
    CurrencylistPage,
  ],
  imports: [
    IonicPageModule.forChild(CurrencylistPage),
  ],
})
export class CurrencylistPageModule {}
