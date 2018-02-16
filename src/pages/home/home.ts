import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams} from 'ionic-angular';
import {UserProvider} from "../../providers/user";
import {VerifyAccountPage} from "../verify-account/verify-account";
import {ExchangeRatesPage} from "../exchange-rates/exchange-rates";
import {BalanceProvider} from "../../providers/balance";
import {TransactionsProvider} from "../../providers/transactions";
import {ChoosePaymentMethodPage} from "../choose-payment-method/choose-payment-method";
import {ProfilePage} from "../profile/profile";
import {BaseSingleton} from "../../services/base";
import {ContactListPage} from "../contact-list/contact-list";
import * as _ from 'lodash';
import {PaymentRequestsProvider} from "../../providers/paymentRequests";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  public readonly STATUS_ACTIVE = 'ACTIVE';
  public readonly STATUS_HAVE_DOCS = "HAVE_DOCS";
  public readonly STATUS_REJECT = "REJECT";
  public readonly STATUS_APPROVED = "APPROVED";
  public readonly STATUS_NO_TRANSACTIONS = "NO_TRANSACTIONS";
  public readonly STATUS_BLANK = "BLANK";

  public static readonly SOURCE_TRANSACTION = 'transaction';
  public static readonly SOURCE_REQUEST = 'request';

  public static readonly TRANSACTION_STATUSES = [
    {
      value: 'PENDING',
      display: 'Pending',
      class: 'transaction-status-warning'
    },
    {
      value: 'SUCCESS',
      display: 'Success',
      class: 'transaction-status-hide'
    },
    {
      value: 'CANCELED',
      display: 'Canceled',
      class: 'transaction-status-error'
    },
    {
      value: 'UNSUCCESS',
      display: 'Failed',
      class: 'transaction-status-error'
    }
  ];

  public userStatus: String;
  public documentsUploaded: boolean;
  public verified: boolean;
  public balance: Array<any>;
  public transactions: Array<any>;
  public paymentRequests: Array<any>;
  public paymentMethods: Array<any>;

  public historyToShow: any = {};
  public historyKeysToShow: Array<any>;

  public Object = Object;
  public HomePage = HomePage;

  private userID: number;
  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController,
              public userProvider: UserProvider,
              public balanceProvider: BalanceProvider,
              public baseSingleton: BaseSingleton,
              public transactionsProvider: TransactionsProvider,
              public paymentRequestsProvider: PaymentRequestsProvider,
              public navParams: NavParams) {
  }

  ionViewDidEnter() {
    // Call provider methods async
    this.userProvider.status().then(
      data => {
        let userStatus = data;
        this.userStatus = userStatus.status;
        this.userID = userStatus.user_id;
        this.documentsUploaded = userStatus.documents_uploaded;
        this.verified = userStatus.verify;
        this.content.resize();
      }, err => {}
      );
    this.balanceProvider.balances().then(data => {this.balance = data.results}, err => {});
    this.transactionsProvider.transactions().then(data => {
      this.transactions = data.results;
      this.transactions.forEach(transaction => {
        transaction['source_type'] = HomePage.SOURCE_TRANSACTION;
      });
      this.paymentRequestsProvider.paymentRequests().then(requestsData => {
        this.paymentRequests = requestsData.results;
        this.paymentRequests.forEach(request => {
          request['source_type'] = HomePage.SOURCE_REQUEST;
        });
        let mergedArray = this.transactions.concat(this.paymentRequests);
        let sortedArray = _.sortBy(mergedArray, [(historyItem) => { return historyItem.created_at; }]);
        let groupedArray = _.groupBy(sortedArray, (historyItem) => {
          let formattedDate = (new Date(historyItem.created_at).toDateString());
          return (formattedDate === (new Date().toDateString()) ? 'Today' : formattedDate);
        });
        let historyKeys = _.reverse(_.keys(groupedArray));
        this.historyKeysToShow = historyKeys;
        historyKeys.forEach(key => {
            groupedArray[key] = _.reverse(groupedArray[key]);
          }
        );
        this.historyToShow = groupedArray;
      }, err => {})
    }, err => {});
    this.transactionsProvider.paymentMethods().then(data => {this.paymentMethods = data.results}, err => {});
  }

  verifyProfile() {
    this.navCtrl.push(VerifyAccountPage, {userID: this.userID});
  }

  goToRates() {
    this.navCtrl.push(ExchangeRatesPage);
  }

  sendMoney() {
    this.baseSingleton.actionSource = HomePage.SOURCE_TRANSACTION;
    this.navCtrl.push(ChoosePaymentMethodPage);
  }

  requestMoney() {
    this.baseSingleton.actionSource = HomePage.SOURCE_REQUEST;
    this.navCtrl.push(ContactListPage);
  }

  profile() {
    this.navCtrl.push(ProfilePage);
  }

}
