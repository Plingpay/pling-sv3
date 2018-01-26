import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserProvider} from "../../providers/user";
import {LoginPage} from "../login/login";
import {VerifyAccountPage} from "../verify-account/verify-account";
import {ExchangeRatesPage} from "../exchange-rates/exchange-rates";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public STATUS_NOT_COMPLETED = 'Not comlite';

  public userStatus: String;
  private userID: number;

  constructor(public navCtrl: NavController,
              public userProvider: UserProvider,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {

  }

  ionViewWillEnter() {
    this.userProvider.status().subscribe(data => {
      this.userStatus = data.status;
      this.userID = data.user_id;
    }, err => {
      if (err.status === 403) {
        this.navCtrl.setRoot(LoginPage);
        this.navCtrl.popToRoot();
      }
    });
  }

  verifyProfile() {
    this.navCtrl.push(VerifyAccountPage, {userID: this.userID});
  }

  goToRates() {
    this.navCtrl.push(ExchangeRatesPage);
  }

}
