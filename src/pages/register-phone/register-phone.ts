import {Component} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController} from 'ionic-angular';
import {UserProvider} from "../../providers/user";
import {RegisterCodePage} from "../register-code/register-code";


/**
 * Generated class for the RegisterPhonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-phone',
  templateUrl: 'register-phone.html',
})
export class RegisterPhonePage {

  public phone_number: String = '';

  constructor(public navCtrl: NavController,
              private loadingCtrl: LoadingController,
              public user: UserProvider,
              public alertCtrl: AlertController,
  ) {
  }

  submitForm() {
    let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      }
    );
    loading.present();
    this.user.registerPhone({phone_number: this.phone_number})
      .subscribe((data) => {
          loading.dismiss();
          this.navCtrl.push(RegisterCodePage, {phone: this.phone_number, user: data.user_id, source: 'signup'})
        },
        (err) => {
          loading.dismiss();
          this.presentAlert(('phone_number' in err.json())?err.json().phone_number[0]:'');
        })
  }

  /*submitForm() {
    this.navCtrl.push(RegisterCodePage, {phone: this.phone_number})
  }*/

  presentAlert(text = '') {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: text||'Wrong phone number',
      buttons: ['OK']
    });
    alert.present();
  }

}
