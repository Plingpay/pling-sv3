import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {UserProvider} from "../../providers/user";
import {HomePage} from "../home/home";

/**
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

  constructor(public navCtrl: NavController,
              public userProvider: UserProvider,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      }
    );
    loading.present();
    this.userProvider.status().subscribe(data => {
      loading.dismiss();
      this.navCtrl.setRoot(HomePage);
      this.navCtrl.popToRoot();
    }, err => {
      this.navCtrl.setRoot(LoginPage);
      this.navCtrl.popToRoot();
      loading.dismiss();
    });
  }

}
