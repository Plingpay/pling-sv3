import {Component, ElementRef, Renderer} from '@angular/core';
import {AlertController, IonicPage, LoadingController, ModalController, NavController, NavParams} from 'ionic-angular';
import {CountryPhoneSelectorPage} from "../country-phone-selector/country-phone-selector";
import {RegisterCodePage} from "../register-code/register-code";
import * as countryData from "country-data";
import {UserProvider} from "../../providers/user";


/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
  private phone_number: String = '';
  private countryFlag: String;
  private selectedCountry = 'US';

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              private renderer: Renderer,
              private elementRef: ElementRef,
              private alertCtrl: AlertController,
              private user: UserProvider,
              private loadingCtrl: LoadingController,
              public navParams: NavParams) {
    this.updateCodes();
  }

  ionViewDidLoad() {
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

  updateCodes() {
    this.countryFlag = countryData.countries[this.selectedCountry].emoji;
    this.phone_number = countryData.countries[this.selectedCountry].countryCallingCodes[0];
  }

  submitForm() {
    let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      }
    );
    loading.present();
    let phone_striped = this.phone_number.replace(/\D/g,'');
    this.user.resetPassword({phone_number: '+' + phone_striped})
      .subscribe((data) => {
          loading.dismiss();
          this.navCtrl.push(RegisterCodePage, {phone: this.phone_number, user: data.user_id, source: 'reset'})
        },
        (err) => {
          loading.dismiss();
          this.presentAlert(('phone_number' in err.json())?err.json().phone_number[0]:'');
        })
  }

  presentAlert(text = '') {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: text||'Wrong phone number',
      buttons: ['OK']
    });
    alert.present();
  }

}
