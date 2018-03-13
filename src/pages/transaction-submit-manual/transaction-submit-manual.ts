import { Component } from '@angular/core';
import {NavController, NavParams, ToastController} from 'ionic-angular';
import {TransactionSuccessPage} from "../transaction-success/transaction-success";
import {TransactionsProvider} from "../../providers/transactions";

/**
 * Generated class for the TransactionSubmitManualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-transaction-submit-manual',
  templateUrl: 'transaction-submit-manual.html',
})
export class TransactionSubmitManualPage {

  public transaction: any;

  constructor(public navCtrl: NavController,
              public transactionsProvider: TransactionsProvider,
              public toastCtrl: ToastController,
              public navParams: NavParams) {
    this.transaction = this.navParams.get('transaction');
  }

  ionViewDidLoad() {
  }

  submit() {
    this.transactionsProvider.approveTransaction(this.transaction.id).then(
      data => {
        this.navCtrl.push(TransactionSuccessPage);
      },
      err => {}
    )
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Copied to clipboard',
      duration: 3000
    });
    toast.present();
  }

}
