import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {UserProvider} from "../../providers/user";
import {LoginPage} from "../login/login";
import {HomePage} from "../home/home";

/**
 * Generated class for the CreatePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
    let action;
    switch (this.source) {
      case 'signup':
        action = this.user.signupPassword(this.password, this.userID);
        break;
      case 'reset':
        action = this.user.changePassword(this.password, this.URL);

    }
    action.then((data) => {
          switch (this.source) {
            case 'signup':
              this.navCtrl.setRoot(HomePage);
              this.navCtrl.popToRoot();
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
        (err) => {})
  }

}
