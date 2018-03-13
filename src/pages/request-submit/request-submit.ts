import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TransactionSuccessPage} from "../transaction-success/transaction-success";
import {BaseSingleton} from "../../services/base";
import {PaymentRequestsProvider} from "../../providers/paymentRequests";

/**
 * Generated class for the RequestSubmitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-request-submit',
  templateUrl: 'request-submit.html',
})
export class RequestSubmitPage {
  public saveAsTemplate: boolean;

  constructor(public navCtrl: NavController,
              public baseService: BaseSingleton,
              public paymentRequestsProvider: PaymentRequestsProvider,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  edit() {
    this.navCtrl.popTo(this.baseService.contactListView);
  }

  submit() {
    this.paymentRequestsProvider.sendPaymentRequest({
      amount: this.baseService.transactionDetails.amount,
      phone_number_from: this.baseService.transactionDetails.phoneNumber,
      currency: this.baseService.transactionDetails.currency,
      comment: this.baseService.transactionDetails.comment
    }).then(
      data => {
        if (this.saveAsTemplate) {
          this.paymentRequestsProvider.savePaymentRequestAsTemplate(data.payment_rquest_id).then(()=>{},()=>{});
        }
        this.navCtrl.push(TransactionSuccessPage);
      },
      err => {}
    )
  }

  cancel() {
    this.navCtrl.popToRoot();
  }

}
