import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {CurrencyProvider} from "../../providers/currency";

/**
 * Generated class for the ExchangeRatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exchange-rates',
  templateUrl: 'exchange-rates.html',
})
export class ExchangeRatesPage {
  private currencies: any = [];
  private currency: String;
  private rates: any = [];

  constructor(public navCtrl: NavController,
              public currencyProvider: CurrencyProvider,
              public navParams: NavParams) {
  }

  async ionViewDidLoad() {
    this.currencies = (await this.currencyProvider.currencyList()).results;
  }

  async loadRates() {
    this.rates = await this.currencyProvider.currencyRate(this.currency);
  }

}
