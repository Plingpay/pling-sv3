import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {UserProvider} from "../../providers/user";
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

  public STATUS_ACTIVE = 'ACTIVE';
  public STATUS_HAVE_DOCS = "HAVE_DOCS";
  public STATUS_REJECT = "REJECT";
  public STATUS_APPROVED = "APPROVED";
  public STATUS_NO_TRANSACTIONS = "NO_TRANSACTIONS";
  public STATUS_BLANK = "BLANK";

  public userStatus: String;
  public documentsUploaded: boolean;
  public verified: boolean;
  public balance: Array<any>;
  public transactions: Array<any>;
  public paymentMethods: Array<any>;

  private userID: number;

  constructor(public navCtrl: NavController,
              public userProvider: UserProvider,
              public balanceProvider: BalanceProvider,
              public transactionsProvider: TransactionsProvider,
              public navParams: NavParams) {
  }

  ionViewDidEnter() {
    // Call provider methods async
    this.userProvider.status().then(
      data => {
        let userStatus = data;
        this.userStatus = userStatus.status;
        this.userID = userStatus.user_id;
        this.documentsUploaded = userStatus.documents_uploaded;
        this.verified = userStatus.verify;
      }, err => {}
      );
    this.balanceProvider.balances().then(data => {this.balance = data.results}, err => {});
    this.transactionsProvider.transactions().then(data => {this.transactions = data.results}, err => {});
    this.transactionsProvider.paymentMethods().then(data => {this.paymentMethods = data.results}, err => {});
  }

  verifyProfile() {
    this.navCtrl.push(VerifyAccountPage, {userID: this.userID});
  }

  goToRates() {
    this.navCtrl.push(ExchangeRatesPage);
  }

  sendMoney() {
    this.navCtrl.push(ChoosePaymentMethodPage);
  }

  requestMoney() {
    alert("Open request money page");
  }

}
