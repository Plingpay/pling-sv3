import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import {BaseSingleton} from "../../services/base";

/**
 * Generated class for the TransactionSuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction-success',
  templateUrl: 'transaction-success.html',
})
export class TransactionSuccessPage {
  public source: string = HomePage.SOURCE_TRANSACTION;
  public HomePage = HomePage;

  public address: string;
  public amount: string;

  constructor(public navCtrl: NavController,
              public baseSingleton: BaseSingleton,
              public navParams: NavParams) {
    this.source = this.baseSingleton.actionSource;
  }

  ionViewDidLoad() {
  }

  great() {
    this.navCtrl.popToRoot();
  }

}
