import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginwithfacebookPage } from './loginwithfacebook';

@NgModule({
  declarations: [
    LoginwithfacebookPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginwithfacebookPage),
  ],
})
export class LoginwithfacebookPageModule {}
