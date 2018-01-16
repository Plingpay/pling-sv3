import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, Validators} from "@angular/forms";
import {UserProvider} from "../../providers/user";
import {Cookie} from "ng2-cookies";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  logForm: any;

  constructor(public navCtrl: NavController,
              public formBuilder: FormBuilder,
              private loadingCtrl: LoadingController,
              public user: UserProvider,
              public alertCtrl: AlertController,
              public navParams: NavParams) {
    this.logForm = this.formBuilder.group({
      phone_number: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.pattern('^[A-Za-z0-9!@#$%^&*()_-]{6,20}$')])],
    })
  }


  submitForm(value) {
    let loading = this.loadingCtrl.create({
        spinner: 'ios',
        content: 'Please wait...'
      }
    );
    loading.present();
    this.user.userAuth(value)
      .subscribe((data) => {
          Cookie.set('is_authenticated', 'yes', 365);
          loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Success',
            subTitle: 'Successful login',
            buttons: ['OK']
          });
          alert.present();
          //this.navCtrl.setRoot(HomePage);
          //this.navCtrl.popToRoot();
        },
        (err) => {
          loading.dismiss();
          this.presentAlert();
        })
  }


  presentAlert(text = '') {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: text||'Email or password is incorrect',
      buttons: ['OK']
    });
    alert.present();
  }
}
