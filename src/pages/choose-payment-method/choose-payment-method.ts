import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {AddCardPage} from "../add-card/add-card";
import {TransactionsProvider} from "../../providers/transactions";
import {ContactListPage} from "../contact-list/contact-list";
import {BaseSingleton} from "../../services/base";

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

  public creditCardNumber: string;
  public creditCardId: number;

  public paymentMethods: Array<any>;

  constructor(public navCtrl: NavController,
              public transactionsProvider: TransactionsProvider,
              public baseService: BaseSingleton,
              public modalCtrl: ModalController,
              public viewCtrl: ViewController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.baseService.paymentOptionsView = this.viewCtrl.index;
    this.loadMethods();
  }

  async loadMethods() {
    this.paymentMethods = (await this.transactionsProvider.paymentMethods()).results;
    this.paymentMethods.forEach(method => {
      switch (method.method_type) {
        case ChoosePaymentMethodPage.CREDIT_CARD_METHOD:
          this.creditCardNumber = method.last_4;
          this.creditCardId = method.id;
      }
    });
  }

  selectCard() {
    if (!this.creditCardNumber) {
      let modal = this.modalCtrl.create(AddCardPage);
      modal.present();
      modal.onDidDismiss(data => {
        this.loadMethods();
      });
    } else {
      this.transactionsProvider.selectPaymentMethod(this.creditCardId).then(
        res => {this.navCtrl.push(ContactListPage)},
        err => {}
      );

    }
  }

}
