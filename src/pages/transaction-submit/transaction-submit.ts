import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TransactionsProvider} from "../../providers/transactions";
import {BaseSingleton} from "../../services/base";
import {TransactionSuccessPage} from "../transaction-success/transaction-success";

/**
 * Generated class for the TransactionSubmitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction-submit',
  templateUrl: 'transaction-submit.html',
})
export class TransactionSubmitPage {
  public saveAsTemplate: boolean;
  public transaction: any;

  public source: any;

  constructor(public navCtrl: NavController,
              public transactionsProvider: TransactionsProvider,
              public baseService: BaseSingleton,
              public navParams: NavParams) {
    this.transaction = this.navParams.get('transaction');
  }

  ionViewDidLoad() {
  }

  edit() {
    this.navCtrl.popTo(this.baseService.paymentOptionsView);
  }

  submit() {
    this.transactionsProvider.approveTransaction(this.transaction.id).then(
      data => {
        if (this.saveAsTemplate) {
          this.transactionsProvider.saveTransactionAsTemplate(this.transaction.id).then(()=>{},()=>{});
        }
        this.navCtrl.push(TransactionSuccessPage, {
          address: this.transaction.user_to.full_name || this.transaction.user_to.phone_number,
          amount: this.transaction.amount.amount + ' ' + this.transaction.amount.currency
        });
      },
      err => {}
    )
  }

  cancel() {
    this.transactionsProvider.cancelTransaction(this.transaction.id).then(
      data => {this.navCtrl.popToRoot()},
      err => {}
    )
  }

}
