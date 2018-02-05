import { Component } from '@angular/core';
import {
  AlertController, Events, IonicPage, Loading, LoadingController, ModalController, NavController,
  NavParams
} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {UserProvider} from "../../providers/user";
import {HomePage} from "../home/home";
import {ErrorPage} from "../error/error";

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
  private loader: Loading;
  private loadingCounter: Array<boolean>;

  constructor(public navCtrl: NavController,
              public userProvider: UserProvider,
              public alertCtrl: AlertController,
              public events: Events,
              public modalCtrl: ModalController,
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
      let modal = this.modalCtrl.create(ErrorPage, {title: title, message: message});
      modal.present();
    });
    events.subscribe('403:show', () => {
      console.log("Asdasd");
      let prompt = this.alertCtrl.create({
        message: "Your session has expired or you have insufficient rights to access this content. Please sign in again.",
        buttons: [
          {
            text: 'OK',
            handler: data => {
              this.events.publish('403:hide');
            }
          },
        ]
      });
      prompt.present();
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
