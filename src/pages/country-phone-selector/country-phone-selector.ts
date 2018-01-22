import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import * as countryData from "country-data";


/**
 * Generated class for the CountryPhoneSelectorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-country-phone-selector',
  templateUrl: 'country-phone-selector.html',
})
export class CountryPhoneSelectorPage {
  public countriesData: any = countryData;

  constructor(public navCtrl: NavController,
              public viewCtrl: ViewController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  close() {
    this.viewCtrl.dismiss();
  }

  selectCountry(code) {
    this.viewCtrl.dismiss({countryCode : code});
  }

}
