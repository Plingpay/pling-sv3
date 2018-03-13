import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TransactionsProvider} from "../../providers/transactions";
import {WithdrawMoneyPage} from "../withdraw-money/withdraw-money";

/**
 * Generated class for the ChooseWithdrawalMethodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-choose-withdrawal-method',
  templateUrl: 'choose-withdrawal-method.html',
})
export class ChooseWithdrawalMethodPage {
  public withdrawMethods: any;
  public balanceID: any;

  constructor(public navCtrl: NavController,
              public transactionsProvider: TransactionsProvider,
              public navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.balanceID = this.navParams.get('balanceID');
    this.transactionsProvider.withdrawalUserMethods().then(methods => {
      this.withdrawMethods = methods;
    }, err => {});
  }

  selectMethod(method) {
    this.navCtrl.push(WithdrawMoneyPage, {balanceID: this.balanceID, method: method});
  }

}
