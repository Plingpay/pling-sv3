import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
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
    this.user.termsAndConditions()
      .subscribe((data) => {
          this.terms = data.text;
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
      subTitle: text||'Can\'t get Terms & Conditions from the server' ,
      buttons: ['OK']
    });
    alert.present();
  }

}
