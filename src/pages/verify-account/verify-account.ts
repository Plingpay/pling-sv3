import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {FormBuilder, Validators} from "@angular/forms";
import {UserProvider} from "../../providers/user";
import {DocumentsPage} from "../documents/documents";

/**
 * Generated class for the VerifyAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-verify-account',
  templateUrl: 'verify-account.html',
})
export class VerifyAccountPage {
  verifyProfileForm: any;
  private userID: number;

  constructor(public navCtrl: NavController,
              public formBuilder: FormBuilder,
              public userProvider: UserProvider,
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
    this.userProvider.verifyEmailAndName(value, this.userID)
      .then((data) => {
          this.navCtrl.push(DocumentsPage);
        },
        (err) => {})
  }

}
