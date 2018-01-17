import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-code',
  templateUrl: 'register-code.html',
})
export class RegisterCodePage {
  private registerPhone: string;
  private registerUserID: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.registerPhone = this.navParams.get('phone');
    this.registerUserID = this.navParams.get('user');
  }


}
