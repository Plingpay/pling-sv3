import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
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

@IonicPage()
@Component({
  selector: 'page-choose-payment-method',
  templateUrl: 'choose-payment-method.html',
})
export class ChoosePaymentMethodPage {
  public static CREDIT_CARD_METHOD = 'Credit card';
  public static BANK_ACCOUNT_METHOD = 'Bank account';
  public static SOURCE_PROFILE = 1;
  public static SOURCE_PAYMENT_REQUEST = 2;

  public creditCardNumber: string;
  public creditCardId: number;

  public paymentMethods: Array<any>;

  private source: number;
  private paymentRequestTransaction: any;

  constructor(public navCtrl: NavController,
              public transactionsProvider: TransactionsProvider,
              public baseService: BaseSingleton,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController,
              public navParams: NavParams) {
    this.source = this.navParams.get('source');
    this.paymentRequestTransaction = this.navParams.get('transaction');
  }

  ionViewDidLoad() {
    this.baseService.paymentOptionsView = this.viewCtrl.index;
    this.loadMethods();
  }

  loadMethods(autoclickCard = false) {
    this.transactionsProvider.paymentMethods().then(data => {
      this.paymentMethods = data.results;
      this.paymentMethods.forEach(method => {
        switch (method.method_type) {
          case ChoosePaymentMethodPage.CREDIT_CARD_METHOD:
            this.creditCardNumber = method.last_4;
            this.creditCardId = method.id;
        }
        if (autoclickCard) this.selectPaymentMethod(method.id);
      });
    }, err => {});
  }

  private selectPaymentMethod(cardId = false) {
    this.transactionsProvider.selectPaymentMethod(cardId?cardId:this.creditCardId).then(
      res => {
        switch (this.source) {
          case ChoosePaymentMethodPage.SOURCE_PROFILE:
            if (!cardId) this.navCtrl.pop();
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
      let modal = this.modalCtrl.create(AddCardPage);
      modal.present();
      modal.onDidDismiss(data => {
        this.loadMethods(true);
      });
    } else {
      this.selectPaymentMethod();
    }
  }

}
