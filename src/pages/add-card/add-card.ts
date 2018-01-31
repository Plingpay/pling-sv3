import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, Validators} from "@angular/forms";
import {CurrencyProvider} from "../../providers/currency";
import {TransactionsProvider} from "../../providers/transactions";

/**
 * Generated class for the AddCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-card',
  templateUrl: 'add-card.html',
})
export class AddCardPage {
  public currencies: Array<any>;
  public cardForm: any;

  constructor(public navCtrl: NavController,
              public formBuilder: FormBuilder,
              public currencyProvider: CurrencyProvider,
              public transactionsProvider: TransactionsProvider,
              public navParams: NavParams) {
    this.cardForm = this.formBuilder.group({
      number: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]{16}')])],
      currency: ['', Validators.compose([Validators.required])],
      cvc: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]{3}')])],
      expDate: ['', Validators.compose([Validators.required])]
    });
  }

  async ionViewDidLoad() {
    this.currencies = await this.currencyProvider.currencyList();
  }

  addCard() {
    this.transactionsProvider.addCard({
      card_number: this.cardForm.controls['number'].value,
      expired_year: this.cardForm.controls['expDate'].value.split("-")[0],
      expired_month: this.cardForm.controls['expDate'].value.split("-")[1],
      cvc: this.cardForm.controls['cvc'].value,
      currency: this.cardForm.controls['currency'].value,
    }).then(res => {
      this.navCtrl.popToRoot();
    }, err => {});
  }

}
