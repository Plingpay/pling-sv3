import { Component } from '@angular/core';
import {AlertController, NavController, NavParams, ViewController} from 'ionic-angular';
import {AddCardPage} from "../add-card/add-card";
import {TransactionsProvider} from "../../providers/transactions";
import {ContactListPage} from "../contact-list/contact-list";
import {BaseSingleton} from "../../services/base";
import {TransactionSubmitPage} from "../transaction-submit/transaction-submit";

/**
 * Generated class for the ChoosePaymentMethodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-choose-payment-method',
  templateUrl: 'choose-payment-method.html',
})
export class ChoosePaymentMethodPage {
  public static CREDIT_CARD_METHOD = 'Stripe Credit card';
  public static BANK_ACCOUNT_METHOD = 'Bank account';
  public static SWISH_METHOD = 'Swish';
  public static SOURCE_PROFILE = 1;
  public static SOURCE_PAYMENT_REQUEST = 2;

  public creditCardNumber: string;
  public creditCardId: number;

  public bankAccountId: number;
  public swishId: number;

  public paymentMethods: Array<any>;

  private source: number;
  private paymentRequestTransaction: any;

  constructor(public navCtrl: NavController,
              public transactionsProvider: TransactionsProvider,
              public baseService: BaseSingleton,
              public alertCtrl: AlertController,
              public viewCtrl: ViewController,
              public navParams: NavParams) {
    this.source = this.navParams.get('source');
    this.paymentRequestTransaction = this.navParams.get('transaction');
  }

  ionViewDidEnter() {
    this.baseService.paymentOptionsView = this.viewCtrl.index;
    this.loadMethods();
  }

  loadMethods() {
    this.transactionsProvider.paymentMethods().then(data => {
      this.paymentMethods = data.results;
      this.paymentMethods.forEach(method => {
        switch (method.type) {
          case ChoosePaymentMethodPage.CREDIT_CARD_METHOD:
            this.creditCardNumber = method.last_4;
            this.creditCardId = method.id;
            break;
          case ChoosePaymentMethodPage.BANK_ACCOUNT_METHOD:
            this.bankAccountId = method.id;
            break;
          case ChoosePaymentMethodPage.SWISH_METHOD:
            this.swishId = method.id;
            break;
        }
      });
    }, err => {});
  }

  private selectPaymentMethod(methodId) {
    this.transactionsProvider.selectPaymentMethod(methodId).then(
      res => {
        switch (this.source) {
          case ChoosePaymentMethodPage.SOURCE_PROFILE:
            this.navCtrl.pop();
            break;
          case ChoosePaymentMethodPage.SOURCE_PAYMENT_REQUEST:
            this.baseService.transactionDetails.amount = this.paymentRequestTransaction.amount;
            this.baseService.transactionDetails.currency = this.paymentRequestTransaction.currency.currency;
            this.baseService.transactionDetails.comment = this.paymentRequestTransaction.comment;
            this.baseService.transactionDetails.phoneNumber = this.paymentRequestTransaction.user.phone_number;
            this.transactionsProvider.prepareTransaction({
              amount_to: this.baseService.transactionDetails.amount,
              phone_number_to: this.baseService.transactionDetails.phoneNumber,
              currency_to: this.baseService.transactionDetails.currency,
              comment: this.baseService.transactionDetails.comment
            }).then(transaction => {
              this.navCtrl.push(TransactionSubmitPage, {transaction: transaction.transaction});
            }, err => {});
            break;
          default:
            this.navCtrl.push(ContactListPage);
        }
      },
      err => {}
    );
  }

  selectCard() {
    if (!this.creditCardNumber) {
      this.navCtrl.push(AddCardPage);
    } else {
      this.selectPaymentMethod(this.creditCardId);
    }
  }

  private showError(message) {
    let prompt = this.alertCtrl.create({
      title: '<div class="alert-icon"><img src="assets/icon/alert.svg"/></div>',
      message: message,
      buttons: [
        {
          text: 'OK',
          handler: data => {
          }
        },
      ]
    });
    prompt.present();
  }

  selectBankAccount() {
    if (!this.bankAccountId) {
      this.showError("This payment method is not available in your country");
      return
    }
    this.selectPaymentMethod(this.bankAccountId)
  }

  selectSwish() {
    if (!this.swishId) {
      this.showError("This payment method is not available in your country");
      return
    }
    this.selectPaymentMethod(this.swishId)
  }


  selectMobilePay() {
    this.showError("Service not yet available. We are working on it.")
  }

  selectVips() {
    this.showError("Service not yet available. We are working on it.")
  }

}
