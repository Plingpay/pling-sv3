import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {UserProvider} from "../../providers/user";

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
              public user: UserProvider,
              public alertCtrl: AlertController,
              private loadingCtrl: LoadingController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      }
    );
    loading.present();
    this.user.currencyList()
      .subscribe((data) => {
          this.currencies = data;
          loading.dismiss();
        },
        (err) => {
          loading.dismiss();
          this.presentAlert();
        })
  }

  loadRates() {
    let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      }
    );
    loading.present();
    this.user.currencyRate(this.currency)
      .subscribe((data) => {
          this.rates = data;
          loading.dismiss();
        },
        (err) => {
          loading.dismiss();
          this.presentAlert();
        })
  }

  presentAlert(text = '') {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: text||'Can\'t load data from the server' ,
      buttons: ['OK']
    });
    alert.present();
  }

}
