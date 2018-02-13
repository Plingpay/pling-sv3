import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {UserProvider} from "../../providers/user";
import {LoginPage} from "../login/login";
import {CurrencyProvider} from "../../providers/currency";
import {TransactionsProvider} from "../../providers/transactions";
import {ChoosePaymentMethodPage} from "../choose-payment-method/choose-payment-method";
import {DomSanitizer} from "@angular/platform-browser";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public profile = {
    photo: undefined
  };
  public currencies: Array<any>;
  public withdrawMethods: Array<any>;
  public paymentMethods: Array<any>;
  public methodString: string;
  public tmpImage: any = false;

  constructor(public navCtrl: NavController,
              public userProvider: UserProvider,
              public currencyProvider: CurrencyProvider,
              private sanitizer: DomSanitizer,
              public transactionsProvider: TransactionsProvider,
              public loadingCtrl: LoadingController,
              public navParams: NavParams) {

  }

  ionViewDidEnter() {
    this.userProvider.profile().then(profileData => {
      this.profile = profileData;
      this.transactionsProvider.paymentMethods().then(data => {
        this.paymentMethods = data.results;
        this.paymentMethods.forEach(method => {
          if (method.id === profileData.payment_method) {
            if (method.method_type === ChoosePaymentMethodPage.CREDIT_CARD_METHOD) {
              this.methodString = 'Card **** ' + method.last_4;
            }
          }
        });
      }, err => {});
    }, err => {});
    this.currencyProvider.currencyList().then(data => {
      this.currencies = data.results;
    }, err => {});
    this.transactionsProvider.withdrawMethods().then(data => {
      this.withdrawMethods = data;
    }, err => {});

  }

  logout() {
    this.userProvider.logout().then(res => {
      this.navCtrl.setRoot(LoginPage);
      this.navCtrl.popToRoot();
    }, () => {});
  }

  chooseMethod() {
    this.navCtrl.push(ChoosePaymentMethodPage, {source: ChoosePaymentMethodPage.SOURCE_PROFILE});
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
        this.tmpImage = this.sanitizer.bypassSecurityTrustUrl(reader.result);
        loading.dismiss();
        this.saveProfile();
      };
      reader.onerror = (error) => {
        loading.dismiss();
      };
    }
  }

}
