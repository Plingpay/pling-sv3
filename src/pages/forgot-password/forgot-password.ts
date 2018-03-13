import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RegisterCodePage} from "../register-code/register-code";
import {UserProvider} from "../../providers/user";


/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
  public phone_number: String = '';

  constructor(public navCtrl: NavController,
              private user: UserProvider
  ) {
  }

  ionViewDidLoad() {
  }


  submitForm() {
    let phone_striped = this.phone_number.replace(/\D/g,'');
    this.user.resetPassword({phone_number: '+' + phone_striped})
      .then((data) => {
          this.navCtrl.push(RegisterCodePage, {phone: this.phone_number, user: data.user_id, source: 'reset'})
        },
        (err) => {})
  }

}
