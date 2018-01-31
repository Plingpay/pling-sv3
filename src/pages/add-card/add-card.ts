import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, Validators} from "@angular/forms";
import {CurrencyProvider} from "../../providers/currency";

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

}
