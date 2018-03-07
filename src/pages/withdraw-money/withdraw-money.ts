import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {TransactionsProvider} from "../../providers/transactions";

/**
 * Generated class for the WithdrawMoneyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-withdraw-money',
  templateUrl: 'withdraw-money.html',
})
export class WithdrawMoneyPage {
  public method: any;
  public balanceID: any;

  constructor(public navCtrl: NavController,
              public transactionsProvider: TransactionsProvider,
              public alertCtrl: AlertController,
              public navParams: NavParams) {
    this.method = this.navParams.get('method');
    this.balanceID = this.navParams.get('balanceID');
  }

  ionViewDidEnter() {

  }

  confirm() {
    let data = {
      balance_id: this.balanceID,
      method_id: this.method.id
    };
    this.method.method.fields.forEach(field => {
      data[field.name] = field.value
    });
    this.transactionsProvider.withdrawMoney(data).then(res => {
      let prompt = this.alertCtrl.create({
        message: 'Your request has been successfully sent',
        buttons: [
          {
            text: 'OK',
            handler: data => {
              this.navCtrl.popToRoot();
            }
          },
        ]
      });
      prompt.present();
    }, err => {});
  }

}
