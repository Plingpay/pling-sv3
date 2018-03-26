import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {CurrencyProvider} from "../../providers/currency";
import {BaseSingleton} from "../../services/base";

/**
 * Generated class for the ExchangeRatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-exchange-rates',
  templateUrl: 'exchange-rates.html',
})
export class ExchangeRatesPage {
  private currencies: any = [];
  private currency: String = '';
  private rates: any = [];
  public amount: number = 1;

  private enterTimeout = null;

  constructor(public navCtrl: NavController,
              public currencyProvider: CurrencyProvider,
              public baseSingleton: BaseSingleton,
              public navParams: NavParams) {
  }

  ionViewDidEnter() {
    this.currencyProvider.currencyList().then(list => {
      this.currencies = list.results;
      this.currencyProvider.defaultCurrencyByUser(this.baseSingleton.currentUserPhone, 'LoadingEntry').then(data => {
        if (data.currency) {
          this.currency = data.currency
        }
      }, err => {});
    }, err => {});
  }

  amountEntered(e) {
    if (e.keyCode === 13){
      clearTimeout(this.enterTimeout);
      this.loadRates();
    } else {
      if (this.enterTimeout !== null) {
        clearTimeout(this.enterTimeout);
      }
      this.enterTimeout = setTimeout(() => {
        this.loadRates();
      }, 1500);
    }
  }

  loadRates() {
    this.currencyProvider.currencyRate(this.currency, this.amount).then(rate => {
      this.rates = rate;
    }, err => {});
  }

}
