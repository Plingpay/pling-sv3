import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Contacts} from "@ionic-native/contacts";
import {AmountPage} from "../amount/amount";
import {Keyboard} from "@ionic-native/keyboard";

/**
 * Generated class for the ContactListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-list',
  templateUrl: 'contact-list.html',
})
export class ContactListPage {
  public phoneNumber: string;
  public showConfirmButton: boolean = false;
  public contactsList: Array<any> = [];

  constructor(public navCtrl: NavController,
              public contacts: Contacts,
              private keyboard: Keyboard,
              public loadingCtrl: LoadingController,
              public navParams: NavParams) {
    this.keyboard.onKeyboardShow().subscribe(()=>{this.showConfirmButton = true});
    this.keyboard.onKeyboardHide().subscribe(()=>{this.showConfirmButton = false});
  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create({
      content: "Reading contacts...",
    });
    loader.present();
    this.contacts.find(['*']).then(contacts => {
      this.contactsList = contacts;
      loader.dismiss();
    }, err => {
      loader.dismiss();
      //alert('Cannot read contacts list');
    });
  }

  selectContact(contact) {
    this.phoneNumber = contact.phoneNumbers[0].value;
    this.confirm();
  }

  confirm() {
    this.navCtrl.push(AmountPage, {phoneNumber: this.phoneNumber})
  }

}
