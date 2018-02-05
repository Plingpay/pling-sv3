import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Contacts} from "@ionic-native/contacts";
import {AmountPage} from "../amount/amount";

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
  public contactsList: Array<any> = [
    {
      displayName: "Ivan Petrov",
      phoneNumbers: [ {
        value: "+2342342342323"
          }
      ],
    },
    {
      displayName: "Ivan Sidorov",
      phoneNumbers: [ {
        value: "+2234232323242"
      }
      ]
    }
  ];

  constructor(public navCtrl: NavController,
              public contacts: Contacts,
              public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log(this.contacts.find(['*']).then(contacts => {
      this.contactsList = contacts;
      console.log(this.contactsList[0].displayName);
      console.log(this.contactsList[0].phoneNumbers[0].value);
    }, err => {
      //alert('Cannot read contacts list');
      console.log(err);
    }));
  }

  selectContact(contact) {
    this.phoneNumber = contact.phoneNumbers[0].value;
    this.navCtrl.push(AmountPage, {phoneNumber: this.phoneNumber})
  }

}
