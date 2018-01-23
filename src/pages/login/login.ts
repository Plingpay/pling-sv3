import {Component, ElementRef, Renderer, ViewChild} from '@angular/core';
import {AlertController, IonicPage, LoadingController, ModalController, NavController} from 'ionic-angular';
import {UserProvider} from "../../providers/user";
import {Cookie} from "ng2-cookies";
import {RegisterPhonePage} from "../register-phone/register-phone";
import {TermsAndConditionsPage} from "../terms-and-conditions/terms-and-conditions";
import {ExchangeRatesPage} from "../exchange-rates/exchange-rates";
import * as countryData from "country-data";
import {CountryPhoneSelectorPage} from "../country-phone-selector/country-phone-selector";

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
  private countryFlag: String;
  private selectedCountry = 'US';

  @ViewChild('phoneInput') phoneInput ;

  constructor(public navCtrl: NavController,
              private loadingCtrl: LoadingController,
              public user: UserProvider,
              public alertCtrl: AlertController,
              private modalCtrl: ModalController,
              private renderer: Renderer,
              private elementRef: ElementRef,
              public elRef: ElementRef) {
    this.updateCodes();
  }

  ionViewDidLoad(): any {

  }

  updateCodes() {
    this.countryFlag = countryData.countries[this.selectedCountry].emoji;
    this.phone_number = countryData.countries[this.selectedCountry].countryCallingCodes[0];
  }

  openCodesSelector() {
    let countryModal = this.modalCtrl.create(CountryPhoneSelectorPage);
    countryModal.onDidDismiss(data => {
      if (data) {
        this.selectedCountry = data.countryCode;
        this.updateCodes();
        let phoneNativeInput = this.elementRef.nativeElement.querySelector('#phoneNativeInput>input');
        setTimeout(() => {
          this.renderer.invokeElementMethod(phoneNativeInput, 'focus', []);
        }, 0);
      }
    });
    countryModal.present();
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
