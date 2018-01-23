import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {UserProvider} from "../../providers/user";
import {LoginPage} from "../login/login";

/**
 * Generated class for the CreatePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-password',
  templateUrl: 'create-password.html',
})
export class CreatePasswordPage {
  public password: String;
  public userID: String;

  public source: String;
  public URL: String;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public user: UserProvider,
              public alertCtrl: AlertController,
              public navParams: NavParams) {
    this.userID = this.navParams.get('userID');
    this.source = this.navParams.get('source');
    this.URL = this.navParams.get('url');
  }

  ionViewDidLoad() {
  }

  createPassword() {
    let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      }
    );
    loading.present();
    let action;
    switch (this.source) {
      case 'signup':
        action = this.user.signupPassword(this.password, this.userID);
        break;
      case 'reset':
        action = this.user.changePassword(this.password, this.URL);

    }
    action.subscribe((data) => {
          loading.dismiss();
          switch (this.source) {
            case 'signup':
              alert('Goto Homepage');
              break;
            case 'reset':
              let alertPopup = this.alertCtrl.create({
                subTitle: 'Your password has been successfully reset',
                buttons: [
                  {
                    text: 'OK',
                    handler: data => {
                      this.navCtrl.setRoot(LoginPage);
                      this.navCtrl.popToRoot();
                    }
                  },
                ]
              });
              alertPopup.present();
          }
        },
        (err) => {
          loading.dismiss();
          this.presentAlert(('message' in err.json())?err.json().message:'Unknown error');
        })
  }

  presentAlert(text = '') {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: text||'Cannot set password',
      buttons: ['OK']
    });
    alert.present();
  }

}
