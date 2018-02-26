import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {CurrencyProvider} from "../../providers/currency";
import {TransactionsProvider} from "../../providers/transactions";
import {TransactionSubmitPage} from "../transaction-submit/transaction-submit";
import {BaseSingleton} from "../../services/base";
import {HomePage} from "../home/home";
import {RequestSubmitPage} from "../request-submit/request-submit";

/**
 * Generated class for the AmountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-amount',
  templateUrl: 'amount.html',
})
export class AmountPage {
  public currencies: Array<any>;
  public isModal: boolean = false;

  public amount: number;
  public currency: string;
  public comment: string;

  constructor(public navCtrl: NavController,
              public currencyProvider: CurrencyProvider,
              public transactionsProvider: TransactionsProvider,
              public viewCtrl: ViewController,
              public baseSingleton: BaseSingleton,
              public navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.amount = this.baseSingleton.transactionDetails.amount;
    this.currency = this.baseSingleton.transactionDetails.currency;
    this.comment = this.baseSingleton.transactionDetails.comment;
    this.isModal = this.navParams.get('isModal');
    this.currencyProvider.currencyList().then(data => {
      this.currencies = data.results;
      if (!this.baseSingleton.transactionDetails.currency) {
        this.currencyProvider.defaultCurrencyByUser(this.baseSingleton.transactionDetails.phoneNumber).then(data => {
          if (data.currency) {
            this.currency = data.currency
          } else {
            this.currency = this.currencies[0].currency;
          }
        }, err => {
        });
      }
    }, err => {});
  }

  confirm() {
    this.baseSingleton.transactionDetails.amount = this.amount;
    this.baseSingleton.transactionDetails.currency = this.currency;
    this.baseSingleton.transactionDetails.comment = this.comment;
    if (this.isModal) {
      this.viewCtrl.dismiss();
      return
    }
    switch (this.baseSingleton.actionSource) {
      case HomePage.SOURCE_TRANSACTION:
        this.transactionsProvider.prepareTransaction({
          amount_to: this.baseSingleton.transactionDetails.amount,
          phone_number_to: this.baseSingleton.transactionDetails.phoneNumber,
          currency_to: this.baseSingleton.transactionDetails.currency,
          comment: this.baseSingleton.transactionDetails.comment
        }).then(transaction => {
          this.navCtrl.push(TransactionSubmitPage, {transaction: transaction.transaction});
        }, err => {});
        break;
      case HomePage.SOURCE_REQUEST:
        this.navCtrl.push(RequestSubmitPage);
    }
  }

}
