import {Component} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController} from 'ionic-angular';
import {RegisterCodePage} from "../register-code/register-code";
import {UserProvider} from "../../providers/user";


/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
  public phone_number: String = '';

  constructor(public navCtrl: NavController,
              private alertCtrl: AlertController,
              private user: UserProvider,
              private loadingCtrl: LoadingController
  ) {
  }

  ionViewDidLoad() {
  }


  submitForm() {
    let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      }
    );
    loading.present();
    let phone_striped = this.phone_number.replace(/\D/g,'');
    this.user.resetPassword({phone_number: '+' + phone_striped})
      .subscribe((data) => {
          loading.dismiss();
          this.navCtrl.push(RegisterCodePage, {phone: this.phone_number, user: data.user_id, source: 'reset'})
        },
        (err) => {
          loading.dismiss();
          this.presentAlert(('phone_number' in err.json())?err.json().phone_number[0]:'');
        })
  }

  presentAlert(text = '') {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: text||'Wrong phone number',
      buttons: ['OK']
    });
    alert.present();
  }

}
