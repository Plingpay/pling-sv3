import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, Validators} from "@angular/forms";
import {UserProvider} from "../../providers/user";
import {DocumentsPage} from "../documents/documents";

/**
 * Generated class for the VerifyAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verify-account',
  templateUrl: 'verify-account.html',
})
export class VerifyAccountPage {
  verifyProfileForm: any;
  private userID: number;

  constructor(public navCtrl: NavController,
              public formBuilder: FormBuilder,
              public loadingCtrl: LoadingController,
              public userProvider: UserProvider,
              public alertCtrl: AlertController,
              public navParams: NavParams) {
    this.verifyProfileForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')])],
      full_name: ['', Validators.compose([Validators.required])],
    });
    this.userID = this.navParams.get('userID');
  }

  ionViewDidLoad() {

  }

  submitForm(value) {
    let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      }
    );
    loading.present();
    this.userProvider.verifyEmailAndName(value, this.userID)
      .subscribe((data) => {
          loading.dismiss();
          this.navCtrl.push(DocumentsPage);
        },
        (err) => {
          console.log(err);
          loading.dismiss();
          this.presentAlert();
        })
  }

  presentAlert(text = '') {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: text||'Cannot save form data',
      buttons: ['OK']
    });
    alert.present();
  }

}
