import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllCurrenciesPage } from './all-currencies';

@NgModule({
  declarations: [
    AllCurrenciesPage,
  ],
  imports: [
    IonicPageModule.forChild(AllCurrenciesPage),
  ],
})
export class AllCurrenciesPageModule {}
