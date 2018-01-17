import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, Validators} from "@angular/forms";
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
  registerPhoneForm: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              private loadingCtrl: LoadingController,
              public user: UserProvider,
              public alertCtrl: AlertController,
  ) {
    this.registerPhoneForm = this.formBuilder.group({
      phone_number: ['', Validators.compose([Validators.required])],
    })
  }

  submitForm(value) {
    let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      }
    );
    loading.present();
    this.user.registerPhone(value)
      .subscribe((data) => {
          loading.dismiss();
          this.navCtrl.push(RegisterCodePage, {phone: value.phone_number, user: data.user_id})
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
