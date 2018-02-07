import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TransactionsProvider} from "../../providers/transactions";

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

  constructor(public navCtrl: NavController,
              public transactionsProvider: TransactionsProvider,
              public navParams: NavParams) {
    this.transaction = this.navParams.get('transaction');
  }

  ionViewDidLoad() {
  }

  edit() {
    alert("TBD");
  }

  submit() {
    this.transactionsProvider.approveTransaction(this.transaction.id).then(
      data => {
        if (this.saveAsTemplate) {
          this.transactionsProvider.saveTransactionAsTemplate(this.transaction.id).then(()=>{},()=>{});
        }
        this.navCtrl.popToRoot();
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
