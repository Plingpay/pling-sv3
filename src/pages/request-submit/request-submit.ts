import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TransactionSuccessPage} from "../transaction-success/transaction-success";
import {BaseSingleton} from "../../services/base";
import {PaymentRequestsProvider} from "../../providers/paymentRequests";

/**
 * Generated class for the RequestSubmitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-request-submit',
  templateUrl: 'request-submit.html',
})
export class RequestSubmitPage {
  public request: any;
  public saveAsTemplate: boolean;

  constructor(public navCtrl: NavController,
              public baseService: BaseSingleton,
              public paymentRequestsProvider: PaymentRequestsProvider,
              public navParams: NavParams) {
    this.request = this.navParams.get('request');
  }

  ionViewDidLoad() {
  }

  edit() {
    this.navCtrl.popTo(this.baseService.contactListView);
  }

  submit() {
    this.paymentRequestsProvider.sendPaymentRequest(this.request).then(
      data => {
        if (this.saveAsTemplate) {
          this.paymentRequestsProvider.savePaymentRequestAsTemplate(data.payment_rquest_id).then(()=>{},()=>{});
        }
        this.navCtrl.push(TransactionSuccessPage, {
          address: this.request.phone_number_from,
          amount: this.request.amount + ' ' + this.request.currency
        });
      },
      err => {}
    )
  }

  cancel() {
    this.navCtrl.popToRoot();
  }

}
