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
        value: "+380956446122"
          }
      ],
    },
    {
      displayName: "Belka Sidorov",
      phoneNumbers: [ {
        value: "+380974279509"
      },
      ]
    },
    {
      displayName: "Guest",
      phoneNumbers: [ {
        value: "+380956448129"
      },
      ]
    }
  ];

  constructor(public navCtrl: NavController,
              public contacts: Contacts,
              public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.contacts.find(['*']).then(contacts => {
      this.contactsList = contacts;
    }, err => {
      //alert('Cannot read contacts list');
    });
  }

  selectContact(contact) {
    this.phoneNumber = contact.phoneNumbers[0].value;
    this.navCtrl.push(AmountPage, {phoneNumber: this.phoneNumber})
  }

}
