import { Component } from '@angular/core';
import {AlertController, LoadingController, NavController, NavParams} from 'ionic-angular';
import {UserProvider} from "../../providers/user";
import {LoginPage} from "../login/login";
import {CurrencyProvider} from "../../providers/currency";
import {TransactionsProvider} from "../../providers/transactions";
import {ChoosePaymentMethodPage} from "../choose-payment-method/choose-payment-method";
import {DomSanitizer} from "@angular/platform-browser";
import {BaseSingleton} from "../../services/base";
import {HomePage} from "../home/home";
import {LocalStorage} from "ngx-webstorage";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public profile = {
    photo: undefined
  };
  public currencies: Array<any>;
  //public withdrawMethods: Array<any>;
  public paymentMethods: Array<any>;
  public methodString: string;
  public tmpImage: any = false;

  @LocalStorage() public token: string;

  public enablePaymentOptions: boolean;

  constructor(public navCtrl: NavController,
              public userProvider: UserProvider,
              public currencyProvider: CurrencyProvider,
              public baseSingleton: BaseSingleton,
              private sanitizer: DomSanitizer,
              public alertCtrl: AlertController,
              public transactionsProvider: TransactionsProvider,
              public loadingCtrl: LoadingController,
              public navParams: NavParams) {

  }

  ionViewDidEnter() {
    if ([HomePage.STATUS_ACTIVE, HomePage.STATUS_APPROVED, HomePage.STATUS_NO_TRANSACTIONS].indexOf(this.baseSingleton.currentUserStatus) > -1)  this.enablePaymentOptions = true;
    this.userProvider.profile().then(profileData => {
      this.profile = profileData;
      this.transactionsProvider.paymentMethods().then(data => {
        this.paymentMethods = data.results;
        this.paymentMethods.forEach(method => {
          if (method.id === profileData.payment_method) {
            if (method.type === ChoosePaymentMethodPage.CREDIT_CARD_METHOD) {
              this.methodString = 'Card **** ' + method.last_4;
            }
            if (method.type === ChoosePaymentMethodPage.BANK_ACCOUNT_METHOD) {
              this.methodString = 'Bank account';
            }
            if (method.type === ChoosePaymentMethodPage.SWISH_METHOD) {
              this.methodString = 'Swish';
            }
          }
        });
      }, err => {});
    }, err => {});
    this.currencyProvider.currencyList().then(data => {
      this.currencies = data.results;
    }, err => {});
    // this.transactionsProvider.withdrawMethods().then(data => {
    //   this.withdrawMethods = data.results;
    // }, err => {});

  }

  logout() {
    this.userProvider.logout().then(res => {
      this.token = '';
      this.navCtrl.setRoot(LoginPage);
      this.navCtrl.popToRoot();
    }, () => {});
  }

  chooseMethod() {
    if (this.enablePaymentOptions) this.navCtrl.push(ChoosePaymentMethodPage, {source: ChoosePaymentMethodPage.SOURCE_PROFILE});
  }

  saveProfile() {
    this.userProvider.saveProfile(this.profile).then(
      _ => {},
      _ => {}
    )
  }

  onPhotoChange(files) {
    if (files[0]) {
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();
      this.profile.photo = files[0];
      let reader = new FileReader();
      reader.readAsDataURL(this.profile.photo);
      reader.onload = () => {
        loading.dismiss();
        if (reader.result.indexOf('data:image') === -1) {
          this.profile.photo = false;
          let prompt = this.alertCtrl.create({
            title: '<div class="alert-icon"><img src="assets/icon/alert.svg"/></div>',
            message: 'Please select images only',
            buttons: [
              {
                text: 'GOT IT',
                handler: data => {
                }
              },
            ]
          });
          prompt.present();
          return;
        }
        this.tmpImage = this.sanitizer.bypassSecurityTrustUrl(reader.result);
        this.saveProfile();
      };
      reader.onerror = (error) => {
        loading.dismiss();
      };
    }
  }

}
