import { Component } from '@angular/core';
import {
  AlertController,
  Events, Loading, LoadingController, NavController,
  NavParams
} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {UserProvider} from "../../providers/user";
import {HomePage} from "../home/home";

/**
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {
  private loader: Loading;
  private loadingCounter: Array<boolean>;
  private show403: boolean;
  private show500: boolean;
  private showOffline: boolean;

  constructor(public navCtrl: NavController,
              public userProvider: UserProvider,
              public alertCtrl: AlertController,
              public events: Events,
              public loadingCtrl: LoadingController,
              public navParams: NavParams) {
    this.loadingCounter = [];
    events.subscribe('loading:show', (message) => {
      this.showLoader(message);
    });
    events.subscribe('loading:hide', () => {
      this.hideLoader();
    });
    events.subscribe('error:show', (title, message) => {
      let prompt = this.alertCtrl.create({
        title: '<div class="alert-icon"><img src="assets/icon/alert.svg"/></div>' + title,
        message: message,
        buttons: [
          {
            text: 'GOT IT',
            handler: data => {
            }
          },
        ]
      });
      prompt.present();
    });
    events.subscribe('403:show', () => {
      if (!this.show403) {
        this.show403 = true;
        this.navCtrl.setRoot(LoginPage);
        this.navCtrl.popToRoot();
        let prompt = this.alertCtrl.create({
          title: '<div class="alert-icon"><img src="assets/icon/alert.svg"/></div>',
          message: "Your session has expired or you have insufficient rights to access this content. Please sign in again.",
          buttons: [
            {
              text: 'GOT IT',
              handler: data => {
                this.events.publish('403:hide');
                this.show403 = false;
              }
            },
          ]
        });
        prompt.present();
      }
    });

    events.subscribe('500:show', () => {
      if (!this.show500) {
        this.show500 = true;
        let prompt = this.alertCtrl.create({
          title: '<div class="alert-icon"><img src="assets/icon/alert.svg"/></div>',
          message: "Something went wrong. Please try again later.",
          buttons: [
            {
              text: 'GOT IT',
              handler: data => {
                this.events.publish('500:hide');
                this.show500 = false;
              }
            },
          ]
        });
        prompt.present();
      }
    });

    events.subscribe('offline:show', () => {
      if (!this.showOffline) {
        this.showOffline = true;
        let prompt = this.alertCtrl.create({
          title: '<div class="alert-icon"><img src="assets/icon/alert.svg"/></div>',
          message: "Please check your internet connection",
          buttons: [
            {
              text: 'GOT IT',
              handler: data => {
                this.events.publish('offline:hide');
                this.showOffline = false;
              }
            },
          ]
        });
        prompt.present();
      }
    });
  }

  ionViewDidLoad() {
    this.userProvider.status('LoadingEntry').then(data => {
      this.navCtrl.setRoot(HomePage);
      this.navCtrl.popToRoot();
    }, err => {
      this.navCtrl.setRoot(LoginPage);
      this.navCtrl.popToRoot();
    });
  }

  private showLoader(message: string): void {
    if (this.loadingCounter.length === 0) {
      this.loader = this.loadingCtrl.create({
        content: message || "Please wait...",
      });
      this.loader.present();
    }
    this.loadingCounter.push(true);
  }

  private hideLoader(): void {
    if (this.loadingCounter.length > 0) this.loadingCounter.pop();
    if (this.loadingCounter.length === 0) this.loader.dismiss();
  }

}
