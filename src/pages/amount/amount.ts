import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  public selectedCurrency: string;
  public currencies: Array<any>;
  public showCommentInput: boolean = false;
  public userPhone: string;

  public moneyAmount: number;
  public comment: string;

  constructor(public navCtrl: NavController,
              public currencyProvider: CurrencyProvider,
              public transactionsProvider: TransactionsProvider,
              public baseSingleton: BaseSingleton,
              public navParams: NavParams) {
    this.userPhone = this.navParams.get('phoneNumber');
  }

  ionViewDidLoad() {
    this.currencyProvider.currencyList().then(data => {
      this.currencies = data.results;
      this.currencyProvider.defaultCurrencyByUser(this.userPhone).then(data => {
        if (data.currency) {
          this.selectedCurrency = data.currency
        } else {
          this.selectedCurrency = this.currencies[0].currency;
        }
      }, err => {});
    }, err => {});
  }

  confirm() {
    switch (this.baseSingleton.actionSource) {
      case HomePage.SOURCE_TRANSACTION:
        this.transactionsProvider.prepareTransaction({
          amount_to: this.moneyAmount,
          phone_number_to: this.userPhone,
          currency_to: this.selectedCurrency
        }).then(transaction => {
          this.navCtrl.push(TransactionSubmitPage, {transaction: transaction.transaction});
        }, err => {});
        break;
      case HomePage.SOURCE_REQUEST:
        this.navCtrl.push(RequestSubmitPage, {request: null});
    }
  }

}
