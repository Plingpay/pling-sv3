import { Component } from '@angular/core';
import {Events, NavController, NavParams} from 'ionic-angular';
import {TransactionsProvider} from "../../providers/transactions";
import {BaseSingleton} from "../../services/base";
import {TransactionSuccessPage} from "../transaction-success/transaction-success";
import {AmountPage} from "../amount/amount";

/**
 * Generated class for the TransactionSubmitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-transaction-submit',
  templateUrl: 'transaction-submit.html',
})
export class TransactionSubmitPage {
  public saveAsTemplate: boolean;
  public transaction: any;

  public fromRequest : boolean;

  constructor(public navCtrl: NavController,
              public transactionsProvider: TransactionsProvider,
              public baseService: BaseSingleton,
              public events: Events,
              public navParams: NavParams) {
    this.transaction = this.navParams.get('transaction');
    this.fromRequest = this.navParams.get('fromRequest');
    events.subscribe('transactions:edited', () => {
      this.transactionsProvider.editTransaction(this.transaction.id, {
        amount_to: this.baseService.transactionDetails.amount,
        currency_to: this.baseService.transactionDetails.currency,
        comment: this.baseService.transactionDetails.comment
      }).then(transaction => {
        this.transaction = transaction.transaction;
      }, err => {});
    });
  }

  ionViewDidLoad() {
  }

  edit() {
    this.navCtrl.push(AmountPage, { isModal: true });
  }

  submit() {
    this.transactionsProvider.approveTransaction(this.transaction.id).then(
      data => {
        if (this.saveAsTemplate) {
          this.transactionsProvider.saveTransactionAsTemplate(this.transaction.id).then(()=>{},()=>{});
        }
        this.navCtrl.push(TransactionSuccessPage);
      },
      err => {}
    )
  }

  cancel() {
    this.baseService.initiateTransactionDetails();
    this.transactionsProvider.cancelTransaction(this.transaction.id).then(
      data => {this.navCtrl.popToRoot()},
      err => {}
    )
  }

}
