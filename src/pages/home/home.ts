import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {UserProvider} from "../../providers/user";
import {LoginPage} from "../login/login";
import {VerifyAccountPage} from "../verify-account/verify-account";
import {ExchangeRatesPage} from "../exchange-rates/exchange-rates";
import {BalanceProvider} from "../../providers/balance";
import {TransactionsProvider} from "../../providers/transactions";
import {ChoosePaymentMethodPage} from "../choose-payment-method/choose-payment-method";

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
  public documentsUploaded: boolean;
  public verified: boolean;
  public balance: Array<any>;
  public transactions: Array<any>;
  public paymentMethods: Array<any>;

  private userID: number;

  constructor(public navCtrl: NavController,
              public userProvider: UserProvider,
              public alertCtrl: AlertController,
              public balanceProvider: BalanceProvider,
              public transactionsProvider: TransactionsProvider,
              public loadingCtrl: LoadingController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      }
    );
    loading.present();
    this.userProvider.status().subscribe(data => {
      this.userStatus = data.status;
      this.userID = data.user_id;
      this.documentsUploaded = data.documents_uploaded;
      this.verified = data.verify;
      this.balanceProvider.balances().subscribe(balances => {
        this.balance = balances;
        this.transactionsProvider.transactions().subscribe(transactions => {
          this.transactions = transactions;
          this.transactionsProvider.paymentMethods().subscribe(paymentMethods => {
            loading.dismiss();
            this.paymentMethods = paymentMethods;
          }, err => {
            loading.dismiss();
            let alert = this.alertCtrl.create({
              title: 'Error',
              subTitle: 'Network error',
              buttons: ['OK']
            });
            alert.present();
          });
        }, err => {
          loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Network error',
            buttons: ['OK']
          });
          alert.present();
        });
      }, err => {
        loading.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Network error',
          buttons: ['OK']
        });
        alert.present();
      });
    }, err => {
      loading.dismiss();
      if (err.status === 403) {
        this.navCtrl.setRoot(LoginPage);
        this.navCtrl.popToRoot();
      } else {
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: 'Network error',
          buttons: ['OK']
        });
        alert.present();
      }
    });
  }

  verifyProfile() {
    this.navCtrl.push(VerifyAccountPage, {userID: this.userID});
  }

  goToRates() {
    this.navCtrl.push(ExchangeRatesPage);
  }

  sendMoney() {
    if (this.paymentMethods.length > 0) {

    } else {
      this.navCtrl.push(ChoosePaymentMethodPage);
    }
  }

  requestMoney() {
    alert("Open request money page");
  }

}
