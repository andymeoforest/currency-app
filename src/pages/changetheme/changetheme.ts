import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SettingsProvider } from './../../providers/settings/settings';

/**
 * Generated class for the ChangethemePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changetheme',
  templateUrl: 'changetheme.html',
})
export class ChangethemePage {
  selectedTheme: String;
  showTheme:number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private settings: SettingsProvider) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);

  }

  setOceanTheme(){
    this.settings.setActiveTheme('deep-ocean-theme');
    this.showTheme = 0;
  }
  setSunnyTheme(){
    this.settings.setActiveTheme('sunny-day-theme');
    this.showTheme = 1;
  }


  setMidnightTheme(){
    this.settings.setActiveTheme('midnight-at-last-theme');
    this.showTheme = 2;
  }

  setPastelTheme(){
    this.settings.setActiveTheme('pastel-sunset-theme');
    this.showTheme = 3;

  }

 


  }
 
