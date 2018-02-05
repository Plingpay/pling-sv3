import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import {UserProvider} from "../../providers/user";

/**
 * Generated class for the TermsAndConditionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terms-and-conditions',
  templateUrl: 'terms-and-conditions.html',
})
export class TermsAndConditionsPage {
  private terms: String;

  constructor(public navCtrl: NavController,
              public user: UserProvider,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.user.termsAndConditions()
      .then((data) => {
          this.terms = data.text;
        },
        (err) => {})
  }

}
