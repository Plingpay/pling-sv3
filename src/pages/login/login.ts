import {Component, ElementRef, ViewChild} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController} from 'ionic-angular';
import {UserProvider} from "../../providers/user";
import {Cookie} from "ng2-cookies";
import {RegisterPhonePage} from "../register-phone/register-phone";
import {TermsAndConditionsPage} from "../terms-and-conditions/terms-and-conditions";
import {ExchangeRatesPage} from "../exchange-rates/exchange-rates";
import {RegisterCodePage} from "../register-code/register-code";
import {ForgotPasswordPage} from "../forgot-password/forgot-password";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public phone_number: String = '';
  private password: String = '';

  @ViewChild('phoneInput') phoneInput ;

  constructor(public navCtrl: NavController,
              private loadingCtrl: LoadingController,
              public user: UserProvider,
              public alertCtrl: AlertController,
              public elRef: ElementRef) {
  }

  ionViewDidLoad(): any {

  }

  submitForm() {
    let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      }
    );
    loading.present();
    this.user.userAuth({phone_number: this.phone_number, password: this.password})
      .subscribe((data) => {
          Cookie.set('is_authenticated', 'yes', 365);
          loading.dismiss();
          this.navCtrl.push(RegisterCodePage, {phone: this.phone_number, user: data.user_id, source: 'signin'})
        },
        (err) => {
          loading.dismiss();
          this.presentAlert();
        })
  }


  presentAlert(text = '') {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: text||'Phone or password is incorrect',
      buttons: ['OK']
    });
    alert.present();
  }

  openTerms() {
    this.navCtrl.push(TermsAndConditionsPage);
  }

  signUp() {
    this.navCtrl.push(RegisterPhonePage);
  }

  goToRates() {
    this.navCtrl.push(ExchangeRatesPage);
  }

  goToForgotPassword() {
    this.navCtrl.push(ForgotPasswordPage);
  }
}
