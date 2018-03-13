import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {UserProvider} from "../../providers/user";
import {RegisterCodePage} from "../register-code/register-code";


/**
 * Generated class for the RegisterPhonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register-phone',
  templateUrl: 'register-phone.html',
})
export class RegisterPhonePage {

  public phone_number: String = '';

  constructor(public navCtrl: NavController,
              public user: UserProvider,
  ) {
  }

  submitForm() {
    this.user.registerPhone({phone_number: this.phone_number})
      .then((data) => {
          this.navCtrl.push(RegisterCodePage, {phone: this.phone_number, user: data.user_id, source: 'signup'})
        },
        (err) => {})
  }

}
