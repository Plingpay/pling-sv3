import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProvider} from "../../providers/user";
import {AmountPage} from "../amount/amount";

/**
 * Generated class for the ContactConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-confirm',
  templateUrl: 'contact-confirm.html',
})
export class ContactConfirmPage {
  public userPhone: string;
  public userName: string;

  public userPhoneInput: string;
  public selectedCode: string;
  public selectedFlag: string;

  public countriesData: Array<any> = [];

  constructor(public navCtrl: NavController,
              public userProvider: UserProvider,
              public navParams: NavParams) {
    this.userPhone = this.navParams.get('userPhone');
    this.userName = this.navParams.get('userName');
  }

  ionViewDidLoad() {
  }

  selectCountry(country) {
    this.selectedCode = country.phone_code;
    this.selectedFlag = this.userProvider.envVars.API + country.flag_image;
  }

  confirm() {
    this.navCtrl.push(AmountPage, {phoneNumber: this.userPhoneInput})
  }

}
