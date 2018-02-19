import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {TransactionsProvider} from "../../providers/transactions";
import {BaseSingleton} from "../../services/base";
import {TransactionSuccessPage} from "../transaction-success/transaction-success";
import {ChoosePaymentMethodPage} from "../choose-payment-method/choose-payment-method";

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
              public viewCtrl: ViewController,
              public navParams: NavParams) {
    this.transaction = this.navParams.get('transaction');
  }

  ionViewDidLoad() {
  }

  edit() {
    this.transactionsProvider.cancelTransaction(this.transaction.id).then(
      data => {
        if (!this.baseService.paymentOptionsView) {
          let currentViewIndex = this.viewCtrl.index;
          this.navCtrl.push(ChoosePaymentMethodPage);
          this.navCtrl.remove(currentViewIndex);
        } else {
          this.navCtrl.popTo(this.baseService.paymentOptionsView);
        }
        },
      err => {}
    )
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
