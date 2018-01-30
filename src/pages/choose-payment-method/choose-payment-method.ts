import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AddCardPage} from "../add-card/add-card";

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  addCard() {
    this.navCtrl.push(AddCardPage);
  }

}
