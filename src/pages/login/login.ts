import {Component, ElementRef} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {FormBuilder} from "@angular/forms";
import {UserProvider} from "../../providers/user";
import {Cookie} from "ng2-cookies";
import {RegisterPhonePage} from "../register-phone/register-phone";
import {TermsAndConditionsPage} from "../terms-and-conditions/terms-and-conditions";
import {ExchangeRatesPage} from "../exchange-rates/exchange-rates";

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

  private phone_number: String = '';
  private password: String = '';

  constructor(public navCtrl: NavController,
              public formBuilder: FormBuilder,
              private loadingCtrl: LoadingController,
              public user: UserProvider,
              public alertCtrl: AlertController,
              public elRef: ElementRef,
              public navParams: NavParams) {
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
          let alert = this.alertCtrl.create({
            title: 'Success',
            subTitle: 'Successful login',
            buttons: ['OK']
          });
          alert.present();
          //this.navCtrl.setRoot(HomePage);
          //this.navCtrl.popToRoot();
        },
        (err) => {
          loading.dismiss();
          this.presentAlert();
        })
  }


  presentAlert(text = '') {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: text||'Email or password is incorrect',
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
}
