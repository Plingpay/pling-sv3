import { Component } from '@angular/core';
import {IonicPage, LoadingController, ModalController, NavController, NavParams, ViewController} from 'ionic-angular';
import {Contacts} from "@ionic-native/contacts";
import {AmountPage} from "../amount/amount";
import {Keyboard} from "@ionic-native/keyboard";
import {TransactionsProvider} from "../../providers/transactions";
import {ContactConfirmPage} from "../contact-confirm/contact-confirm";
import {BaseSingleton} from "../../services/base";
import {TransactionSubmitPage} from "../transaction-submit/transaction-submit";
import * as _ from 'lodash';


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
  public userName: string;
  public showConfirmButton: boolean = false;
  public contactsList: Array<any> = [
    // {
    //   displayName: "Test User",
    //   phoneNumbers: [ {
    //     value: "0956446122"
    //   }
    //   ],
    // },
    // {
    //   displayName: "Test User2",
    //   phoneNumbers: [ {
    //     value: "+380974279509"
    //   }
    //   ]
    // }
  ];

  public lastContactsList: Array<any> = [];

  constructor(public navCtrl: NavController,
              public contacts: Contacts,
              private keyboard: Keyboard,
              public loadingCtrl: LoadingController,
              public baseService: BaseSingleton,
              public viewCtrl: ViewController,
              public modalCtrl: ModalController,
              public transactionsProvider: TransactionsProvider,
              public navParams: NavParams) {
    this.keyboard.onKeyboardShow().subscribe(()=>{this.showConfirmButton = true});
    this.keyboard.onKeyboardHide().subscribe(()=>{this.showConfirmButton = false});
  }

  ionViewDidLoad() {
    this.baseService.contactListView = this.viewCtrl.index;
    this.transactionsProvider.lastContacts().then(data => {
      this.lastContactsList = data.results;
    }, () => {});
    let loader = this.loadingCtrl.create({
      content: "Reading contacts...",
    });
    loader.present();
    this.contacts.find(['*']).then(contacts => {
      this.contactsList = _.sortBy(contacts, [user => { return user.displayName }]);
      loader.dismiss();
    }, err => {
      loader.dismiss();
      //alert('Cannot read contacts list');
    });
  }

  selectContact(contact) {
    this.phoneNumber = contact.phoneNumbers[0].value;
    this.userName = contact.displayName;
    this.confirm();
  }

  selectContactFromLast(contact) {
    this.phoneNumber = contact.phone_number;
    this.confirm();
  }

  confirm() {
    if (this.phoneNumber.indexOf('+') === -1) {
      let contactModal = this.modalCtrl.create(ContactConfirmPage, {userPhone: this.phoneNumber, userName: this.userName});
      contactModal.onDidDismiss(data => {
        this.finalStep()
      });
      contactModal.present();
    } else {
      this.baseService.transactionDetails.phoneNumber = this.phoneNumber;
      this.finalStep()
    }
  }

  finalStep() {
    this.transactionsProvider.checkIfTransactionTemplate({phone_number: this.baseService.transactionDetails.phoneNumber})
      .then(transaction => {
        console.log(transaction);
        this.baseService.transactionDetails.amount = transaction.transaction.amount.amount;
        this.baseService.transactionDetails.currency = transaction.transaction.amount.currency;
        this.baseService.transactionDetails.comment = transaction.transaction.comment;
        this.navCtrl.push(TransactionSubmitPage, {transaction: transaction.transaction});
      }, err => {
        this.navCtrl.push(AmountPage)
      });
  }

}
